function fetchPostData(limit) {
  return `https://www.reddit.com/r/popular.json?limit=${limit}`
}

export async function fetchData(limit) {
  const userResponse = await fetch(fetchPostData(limit))

  const user = await userResponse.json()

  return user
}