import api from './apiService';

class Target {
  static getTargets() {
    return api.get('/targets');
  }

  static getTopics() {
    return api.get('/topics');
  }

  static createNewTarget({ targetTitle, areaLenght, topic }, { coordinate: { latitude, longitude } }) {
    const targetRequest = {
      target: {
        title: targetTitle,
        radius: areaLenght,
        latitude: latitude,
        longitude: longitude,
        topic_id: topic
      }
    }
    return api.post('/targets', targetRequest);
  }
}

export default Target;
