/* eslint-disable prettier/prettier */
import axios from 'axios';
import {baseUrl} from '../config';

export async function serviceCall(
  apiMethod: any,
  apiAddress: any,
  data: any,
  token: any,
) {
  const url = `${baseUrl}${apiAddress}`;

  try {
    let response;
    if (apiMethod === 'GET') {
      response = await axios.get(url);
    } else if (apiMethod === 'POST') {
      if (data !== '') {
        response = await axios({
          method: apiMethod,
          url,
          data,
          // headers,
        });
      } else {
        response = await axios({
          method: apiMethod,
          url,
          // headers,
        });
      }
    } else if (apiMethod === 'PUT') {
      response = await axios({
        method: apiMethod,
        url,
        data,
        // headers,
      });
    } else if (apiMethod === 'DELETE') {
      response = await axios({
        method: apiMethod,
        url,

        // headers,
      });
    } else {
      response = await axios({
        method: apiMethod,
        url,
        data,
        // headers,
      });
    }

    return response; // Adjust depending on how you want to handle the response
  } catch (error) {
    // console.log('gff', error?.request);

    // console.log('Error during API call:', error);
    return error?.request?._response;
  }
  // catch (error) {
  //   console.log(error.request._response);

  //   console.log('Error during API call:', error);
  //   return {status: 400};
  // }
}
