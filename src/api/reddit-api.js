function fetchPopularPosts(limit) {
  return `https://www.reddit.com/r/popular.json?limit=${limit}`
}

async function fetchPopularPostsArray(limit) {
  const userResponse = await fetch(fetchPopularPosts(limit))
  const user = await userResponse.json()
  return user
}

function fetchAllPosts(limit) {
  return `https://www.reddit.com/r/all.json?limit=${limit}`
}

async function fetchAllPostsArray(limit) {
  const userResponse = await fetch(fetchAllPosts(limit))
  const user = await userResponse.json()
  return user
}

function fetchOriginalPosts(limit) {
  return `https://www.reddit.com/r/original.json?limit=${limit}`
}

async function fetchOriginalPostsArray(limit) {
  const userResponse = await fetch(fetchOriginalPosts(limit))
  const user = await userResponse.json()
  return user
}

export { fetchPopularPostsArray, fetchAllPostsArray, fetchOriginalPostsArray }