const apiUrl = process.env.HEADLINESBR_API_URL

export const getPosts = async (page = 1, perPage = 25) => {
  const response = await fetch(apiUrl + `?page=${page}&per_page=${perPage}`)
  const data = await response.json()  
  return data.model
}
