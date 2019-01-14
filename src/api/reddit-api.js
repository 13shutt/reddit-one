function fetchPosts(type, limit) {
  return `https://www.reddit.com/r/${type}.json?limit=${limit}`
}

async function fetchPostsArray(type, limit) {
  const userResponse = await fetch(fetchPosts(type, limit))
  const user = await userResponse.json()
  return user
}

export { fetchPostsArray }