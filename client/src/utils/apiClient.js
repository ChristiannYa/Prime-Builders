const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const apiClient = {
  post: async (endpoint, data) => {
    const url = `${API_BASE_URL}${endpoint}`;
    // console.log('Sending request to:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    // Handle non-JSON responses
    let responseData;
    try {
      responseData = await response.json();
    } catch (err) {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      console.error('Parse error:', err.message);
      throw new Error('Server returned an invalid response');
    }
    
    if (!response.ok) {
      throw new Error(responseData.message || 'An error occurred');
    }
    
    return responseData;
  },
};
