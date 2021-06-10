
const sessions = async (speaker, args, { dataSources }) => {
  const sessionsList = await dataSources.sessionDataSource.getSessions();

  return sessionsList.filter(
    (session) => filter(speaker.sessions, { id: session.id }).length > 0
  );
};

export default sessions;
