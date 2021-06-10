export default {
  speakers: async (session, args, { dataSources }) => {
    const speakersList = await dataSources.speakerDataSource.getSpeakers(args);

    return speakersList.filter(
      (speaker) => filter(session.speakers, { id: speaker.id }).length > 0
    );
  },
};
