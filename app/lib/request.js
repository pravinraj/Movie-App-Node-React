'use strict';

import axios from 'axios';



let getRequest=(path,queryData,callback)=>{
  axios.get(path, {
    params: queryData
  })
  .then(function (response) {
    callback(null, response);
  })
  .catch(function (error) {
    callback(error,null);
  });
};

export {getRequest};