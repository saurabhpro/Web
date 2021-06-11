import _ from 'lodash';

export default {
  sessions: async (speaker, args, { dataSources }) => {
    console.log(speaker);
    const sessionsList = await dataSources.sessionDataSource.getSessions();

    return sessionsList.filter(
      (session) => _.filter(speaker.sessions, { id: session.id }).length > 0
    );
  },
};
