import UserDataSource from '../datasources/users.js';

const generateUserModel = ({ user }) => {
  return {
    getById: (id) => {
      if (user) {
        if (user.role === 'ADMIN') {
          return getUserById(id);
        }
        if (user.role === 'USER') {
          return new UserDataSource().getUserById(user.sub);
        }
      }
      return null;
    },
  };
};

export { generateUserModel };
