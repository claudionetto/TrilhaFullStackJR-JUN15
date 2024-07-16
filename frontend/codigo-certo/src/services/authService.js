const API_URL = 'https://trilhafullstackjr-jun15-production-9a8e.up.railway.app/api/auth';

async function login(username, password) {
  try {
    const response = await fetch(`${API_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/problem+json'
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 403) {
      throw new Error(`Invalid credentials`); 
    }

    const data = await response.json();
    return data.token; 

  } catch (error) {
    throw error;
  }
}

async function register(user) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/problem+json'
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function getUser() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 403) {
      localStorage.removeItem('token');
      throw new Error('Token inválido ou expirado');
    }

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export default {
  login,
  register,
  getUser,
};