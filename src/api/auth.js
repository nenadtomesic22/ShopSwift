// import axios from 'axios'

// export const login = (data) => {
//     return axios.post('/api/auth/login', data)
// }


//mock-front-end
export const login = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === 'nikola@nrt-media.com' &&
        password === '123456'
      ) {
        resolve({
          data: {
            token: 'mock-token-123'
          }
        })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}