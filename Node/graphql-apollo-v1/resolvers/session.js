import _ from 'lodash';

export default {
  async speakers(session, args, { dataSources }) {
    // get values
    const speakers = await dataSources.speakerAPI.getSpeakers();

    // get speaker for my session
    return speakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
    );
  },
};
