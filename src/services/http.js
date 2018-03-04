import axios from 'axios'

let baseUrl = 'https://afriqco.herokuapp.com/';

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
    console.log('AXIOS', payload)
    return (
        axios.post(baseUrl + url, payload)
          .then(function(response) {
            console.log(response.data)
            return response.data
          }).catch((err) => {
            return err;
          })
    );
  }
};

export default HTTP;
