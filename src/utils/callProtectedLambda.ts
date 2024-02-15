import dotenv from 'dotenv';
import axios from "axios";

dotenv.config();

export const callProtectedLambda = async (endpoint: string, apiKey: string, payload: Record<string, unknown>) => {
	try {
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
			console.log('Error1 ', error);
			return error;
		});

		return result;
	} catch (error) {
		console.log('Error2 ', error);
		return error;
	}
}