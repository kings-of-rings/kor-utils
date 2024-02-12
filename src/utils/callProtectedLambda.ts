import dotenv from 'dotenv';
import axios from "axios";

dotenv.config();

export const callProtectedLambda = async (endpoint: string, apiKey: string, payload: Record<string, unknown>) => {
  const result = await axios.post(endpoint, payload, {
    headers: {
      'Content-Type': `application/json;`,
      Accept: '*/*',
      AcceptEncoding: 'gzip, deflate, br',
      Connection: 'keep-alive',
      'x-api-key': apiKey
    }
  }
  ).catch(function (error) {
    console.log('Error ', error);
	  return error;
  });
  return result;
}