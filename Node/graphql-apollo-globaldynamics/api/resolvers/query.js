export default {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionDataSource.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionDataSource.getSessionById(id);
  },

  speakers: async (parent, args, { dataSources }, info) => {
    return dataSources.speakerDataSource.getSpeakers(args);
  },

  speakerById: async (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerDataSource.getSpeakerById(id);
  },

  users: async (parent, args, context, info) => {
    return context.dataSources.userDataSource.getUsers();
  },

  userById: async (parent, { id }, { dataSources }, info) => {
    return dataSources.userDataSource.getUserById(id);
  },

  me: async (parent, { id }, { dataSources, user }, info) => {
    if (user) {
      return dataSources.userDataSource.getUserById(user.sub);
    }
    return undefined;
  },
};
