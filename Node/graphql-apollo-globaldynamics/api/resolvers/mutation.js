import { hashPassword, createToken, verifyPassword } from '../utils/auth.js';

export default {
  createSession: async (parent, args, { dataSources }, info) => {
    return dataSources.sessionDataSource.createSession(args.session);
  },

  signUp: async (parent, { credentials }, { dataSources, res }, info) => {
    const { email, password } = credentials;
    const userCredentials = { email: email.toLowerCase(), password };

    const existingUser = dataSources.userDataSource.getUserByEmail(
      userCredentials.email
    );

    if (existingUser) {
      throw new Error('A user account with that email already exists.');
    }

    //TODO add exception handling when below part fails and the user is still stored in our mock db
    const hash = hashPassword(userCredentials.password);
    const role = userCredentials.email
      .toLowerCase()
      .endsWith('@globomantics.com')
      ? 'ADMIN'
      : 'USER';

    const dbUser = await dataSources.userDataSource.createUser({
      email: userCredentials.email,
      hash,
      role,
    });

    if (role === 'USER') {
      dataSources.speakerDataSource.createSpeaker(dbUser);
    }

    const token = createToken(dbUser);

    res.cookie('token', token, {
      httpOnly: true,
    });

    return {
      token,
      user: {
        id: dbUser.id,
        email: dbUser.email,
      },
    };
  },

  signIn: async (parent, { credentials }, { dataSources, res }, info) => {
    const { email, password } = credentials;
    const userCredentials = { email: email.toLowerCase(), password };

    const existingUser = dataSources.userDataSource.getUserByEmail(
      userCredentials.email
    );

    if (!existingUser) {
      throw new Error('Incorrect email address or password.');
    }

    const isValidPassword = verifyPassword(password, existingUser.hash);

    if (!isValidPassword) {
      throw new Error('Incorrect email address or password.');
    }

    const token = createToken(existingUser);

    res.cookie('token', token, {
      httpOnly: true,
    });

    return {
      token,
      user: {
        id: existingUser.id,
        email: existingUser.email,
        role: existingUser.role,
      },
    };
  },

  userInfo: async (parent, args, { dataSources, user }, info) => {
    if (user) {
      return {
        user: { id: user.sub, email: user.email },
      };
    }

    return {
      user: undefined,
    };
  },

  signOut: async (parent, args, { dataSources, res }, info) => {
    res.clearCookie('token');
    return {
      user: undefined,
    };
  },

  toggleFavoriteSession: async (parent, args, context, info) => {
    if (context.user) {
      return context.dataSources.userDataSource.toggleFavoriteSession(
        args.sessionId,
        context.user.sub
      );
    }
    return undefined;
  },

  markFeatured: async (parent, args, { dataSources }, info) => {
    if (user && user.role === 'ADMIN') {
      return dataSources.speakerDataSource.markFeatured(
        args.speakerId,
        args.featured
      );
    }
    return null;
  },
};
