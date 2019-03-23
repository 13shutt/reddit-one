const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.status);
    error.response = response
    throw error
  }
} 
  
const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json()
}
  
const Fetcher = {
  get: async (path, options) =>
    fetch(path, options)
    .then(checkStatus)
    .then(parseJSON)
}

export { Fetcher }