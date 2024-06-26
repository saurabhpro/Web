import { DataSource } from 'apollo-datasource';
import { v4 as uuidv4 } from 'uuid';

import { join } from 'path';
import { Low, JSONFile } from 'lowdb';
import _ from 'lodash';

// Use JSON file for storage
const file = join('data', 'speakers.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

class SpeakerDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.data.speakers;
  }

  getSpeakers(args) {
    return _.filter(this.db, args);
  }

  getSpeakerById(id) {
    return this.db.find((speaker) => speaker.id === id);
  }

  async createSpeaker(user) {
    const speakers = this.db.push({ id: uuidv4(), userId: user.id });

    await db.write(speakers);

    return speakers;
  }

  async markFeatured(speakerId, featured) {
    const ab = this.db.find((speaker) => speaker.id === speakerId);

    if (ab) {
      Object.assign(ab, { featured });
      await db.write(ab);
    }

    return ab;
  }
}

export default SpeakerDataSource;
