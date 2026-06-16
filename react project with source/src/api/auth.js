import api from './api';

export const getLoggedInUser = async () => {
  try {
    const response = await api.get('/me');
    return response.data.user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export const logout = async () => {
  try {
    await api.get('/logout');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
