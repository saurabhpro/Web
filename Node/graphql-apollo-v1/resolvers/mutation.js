export default {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionAPI.toggleFavoriteSession(id),

  addSession: (parent, { session }, { dataSources }, info) =>
    dataSources.sessionAPI.addSession(session),
};
