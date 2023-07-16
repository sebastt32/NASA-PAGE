import axios from 'axios';

export const fetchImages = async (value) => {
  try {
    const response = await axios.get(value);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
};