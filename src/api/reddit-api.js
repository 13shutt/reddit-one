function fetchPostsURL(type, limit) {
  return `https://www.reddit.com/r/${type}.json?limit=${limit}`
}

function fetchOriginalPostsURL(limit) {
  return `https://www.reddit.com/original.json?limit=${limit}`
}

export { fetchPostsURL, fetchOriginalPostsURL }