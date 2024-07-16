const API_URL = 'https://trilhafullstackjr-jun15-production-9a8e.up.railway.app/api';

async function getUserProjects(userId) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/users/${userId}/projects`, {
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
      throw new Error('Failed to fetch projects');
    }
    
    const data = await response.json();
    console.log(data)
    return data.content;
  } catch (error) {
    throw error;
  }
}

async function addProject(userId, project) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/users/${userId}/projects`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to add project');
    }
  } catch (error) {
    throw error;
  }
}

async function updateProject(userId, projectId, project) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/users/${userId}/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(project)
    });

    if (response.status === 403) {
      localStorage.removeItem('token');
      router.navigate('/login');
    }

    if (!response.ok) {
      throw new Error('Failed to update project');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteProject(userId, projectId) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/users/${userId}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to delete project');
    }
  } catch (error) {
    throw error;
  }
}

export default {
  getUserProjects,
  addProject,
  updateProject,
  deleteProject,
};