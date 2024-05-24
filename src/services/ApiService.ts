import axios from 'axios';

const API_URL = 'http://localhost:3001/limits';

const ApiService = {
  getLimits: async () => {
    try {
      const response = await axios.get(API_URL);
      if (!response.data) {
        throw new Error('No data received');
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching limits:', error);
      throw error;
    }
  },
};

export default ApiService;
