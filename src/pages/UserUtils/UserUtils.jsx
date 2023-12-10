const USER_STORAGE_KEY = 'user';

export const saveUserToLocalStorage = (userData) => {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data to local storage:', error);
  }
};

export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    try {
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  };

export const removeUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {
    console.error('Error removing user data from local storage:', error);
  }
};
