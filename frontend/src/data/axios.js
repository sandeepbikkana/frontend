import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common error scenarios
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear token
      localStorage.removeItem('token');
      // You can add router.push('/login') here if using Next.js router
    }
    return Promise.reject(error);
  }
);

// GET request helper
export const get = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// POST request helper
export const post = async (url, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// PUT request helper
export const put = async (url, data = {}, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// PATCH request helper
export const patch = async (url, data = {}, config = {}) => {
  try {
    const response = await api.patch(url, data, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// DELETE request helper
export const del = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// Upload file helper
export const uploadFile = async (url, file, onUploadProgress = null) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    if (onUploadProgress) {
      config.onUploadProgress = onUploadProgress;
    }

    const response = await api.post(url, formData, config);
    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      status: error.response?.status || 500,
      error: error.response?.data?.message || error.message,
      success: false,
    };
  }
};

// Set auth token helper
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  }
};

// Clear auth token helper
export const clearAuthToken = () => {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
};

// Export the api instance for direct use if needed
export { api };

// Example usage:
/*
// GET request
const getUsers = async () => {
  const result = await get('/users');
  if (result.success) {
    console.log('Users:', result.data);
  } else {
    console.error('Error:', result.error);
  }
};

// POST request
const createUser = async (userData) => {
  const result = await post('/users', userData);
  if (result.success) {
    console.log('User created:', result.data);
  } else {
    console.error('Error:', result.error);
  }
};

// PUT request
const updateUser = async (userId, userData) => {
  const result = await put(`/users/${userId}`, userData);
  if (result.success) {
    console.log('User updated:', result.data);
  } else {
    console.error('Error:', result.error);
  }
};

// PATCH request
const partialUpdateUser = async (userId, userData) => {
  const result = await patch(`/users/${userId}`, userData);
  if (result.success) {
    console.log('User partially updated:', result.data);
  } else {
    console.error('Error:', result.error);
  }
};

// DELETE request
const deleteUser = async (userId) => {
  const result = await del(`/users/${userId}`);
  if (result.success) {
    console.log('User deleted successfully');
  } else {
    console.error('Error:', result.error);
  }
};

// File upload
const uploadImage = async (file) => {
  const result = await uploadFile('/upload', file, (progressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(`Upload progress: ${percentCompleted}%`);
  });
  if (result.success) {
    console.log('File uploaded:', result.data);
  } else {
    console.error('Error:', result.error);
  }
};
*/
