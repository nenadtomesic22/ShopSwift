export const createEmptyOrder = () => ({
  id: null,
  date: new Date(),
  customer: [
    {
      id: null,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: 'Srbija'
    }
  ],
  total: 0,
  status: false,
  delivery: 0,
  articles: []
  
})