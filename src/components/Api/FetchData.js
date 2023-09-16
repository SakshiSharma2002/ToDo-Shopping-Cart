// api.js
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/1`); // Replace "1" with the appropriate data ID or query parameters
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
