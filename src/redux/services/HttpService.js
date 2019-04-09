import axios from 'axios';

class HttpService {
  request(requestData, cb) {
    axios(requestData)
      .then((response) => {
        cb(null, response);
      })
      .catch((error) => {
        cb(error, null);
      });
  }
}

export default new HttpService;
