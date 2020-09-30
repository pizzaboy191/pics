import React from 'react';
import axios from 'axios';

//this allows you to create a cusotmised copy of Axios with default headers
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID 9fs0HD05ZRlBNEhiXCjPtmBMoXnKfr4zg4-I93XuZ7k'
      }
  });
