import axios from 'axios'

let baseUrl = 'http://localhost:8080';

let HTTP = {
  get: (url) => {
    return (
        axios.get(baseUrl + url)
          .then((response)  => {
            return response.data
          }).catch((err) => {
            return err;
          })
    );
  },
  post: (url, payload) => {
    return (
        axios.post(baseUrl + url, payload)
          .then(function(response) {
            return response.data
          }).catch((err) => {
            return err;
          })
    );
  }
};

export default HTTP;