import axios from 'axios';

const API_URL = 'https://api.quotable.io/random'; // Example API

export const fetchRandomQuote = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.content;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Stay inspired!';
  }
};
