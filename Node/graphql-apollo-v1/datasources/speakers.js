import { RESTDataSource } from 'apollo-datasource-rest';

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  async getSpeakerById(id) {
    return this.get(`/${id}`);
  }

  async getSpeakers() {
    return this.get('/');
  }
}

export default SpeakerAPI;
