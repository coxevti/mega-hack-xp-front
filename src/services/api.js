import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parseapi.back4app.com/classes',
  headers: {
    'X-Parse-Application-Id': 'Jj4Bcskxkc9jLHvo9quGT0wvf7o6kMCiRgYEOzjF',
    'X-Parse-REST-API-Key': 'ksVkJg8lwLt1qnICsbb3wFa82MSQ27b3SvnAUKm5',
  },
});

export default api;
