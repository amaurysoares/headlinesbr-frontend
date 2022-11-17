const apiUrl = process.env.HEADLINESBR_API_URL

export const getPosts = async (page = 1, perPage = 25) => {
  const rawContent = await fetch(`${apiUrl}/?page=${page}&per_page=${perPage}`)
  const response = await rawContent.json()  
  return response.data
}
