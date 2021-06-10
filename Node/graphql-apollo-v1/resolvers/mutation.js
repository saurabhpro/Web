export default {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionAPI.toggleFavoriteSession(id),
};
