import { ApolloError } from 'apollo-server';
import _ from 'lodash';

export default {
  speakers: async (session, args, { dataSources }) => {
    try {
      // get values
      const speakers = await dataSources.speakerAPI.getSpeakers();

      // get speaker for my session
      return speakers.filter(
        (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
      );
    } catch (error) {
      return new ApolloError('Unable to retrieve speakers', 'SPEAKERAPIERROR', {
        token: 'uniquetoken',
      });
    }
  },
};
