import api from './apiService';

class Target {
  static getTargets() {
    return api.get('/targets');
  }

  static getTopics() {
    return api.get('/topics');
  }

  static createNewTarget(target, { coordinate } ) {
    const targetRequest = {
      target: {
        title: target.targetTitle,
        radius: target.areaLenght,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        topic_id: target.topic
      }
    }
    return api.post('/targets', targetRequest);
  }
}

export default Target;
