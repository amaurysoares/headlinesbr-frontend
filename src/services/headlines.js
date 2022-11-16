const apiUrl = process.env.HEADLINESBR_API_URL

export const getPosts = async (page = 1, perPage = 25) => {
  const response = await fetch(`http://191.252.103.213:8090/?page=${page}&per_page=${perPage}`)
  const data = await response.json()  
  return data.model
}
