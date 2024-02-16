function createHttpClient(baseURL) {
  async function get(url) {
    const response = await fetch(baseURL + url);
    return await response.json();
  }

  async function post(url, data) {
    const response = await fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async function put(url, data) {
    const response = await fetch(baseURL + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async function del(url) {
    const response = await fetch(baseURL + url, {
      method: 'DELETE',
    });
    return await response.json();
  }

  return {
    get,
    post,
    put,
    delete: del,
  };
}

export default createHttpClient;
