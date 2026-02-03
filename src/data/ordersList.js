const orders = [
  {
    id: 10031,
    to: '/orders',
    date: 'Pon, 12.02.2024 u 09:15',
    customer: 'Marko Petrović',
    total: 3786.00,
    status: true,
    delivery: 0,
    articles: [
      { id: 1, quantity: 2 },
      { id: 5, quantity: 1 }
    ]
  },
  {
    id: 10032,
    to: '/orders',
    date: 'Uto, 13.02.2024 u 14:42',
    customer: 'Ivana Janković',
    total: 1996.00,
    status: false,
    delivery: 390,
    articles: [
      { id: 2, quantity: 1 }
    ]
  },
  {
    id: 10033,
    to: '/orders',
    date: 'Sre, 14.02.2024 u 18:05',
    customer: 'Nikola Ilić',
    total: 5898.00,
    status: true,
    delivery: 0,
    articles: [
      { id: 3, quantity: 2 },
      { id: 6, quantity: 1 }
    ]
  },
  {
    id: 10034,
    to: '/orders',
    date: 'Čet, 15.02.2024 u 11:30',
    customer: 'Ana Kovačević',
    total: 2981.00,
    status: true,
    delivery: 0,
    articles: [
      { id: 4, quantity: 1 }
    ]
  },
  {
    id: 10035,
    to: '/orders',
    date: 'Pet, 16.02.2024 u 16:12',
    customer: 'Milan Stojanović',
    total: 4368.00,
    status: false,
    delivery: 390,
    articles: [
      { id: 7, quantity: 3 }
    ]
  },
  {
    id: 10036,
    to: '/orders',
    date: 'Sub, 17.02.2024 u 10:05',
    customer: 'Jelena Ristić',
    total: 3224.00,
    status: true,
    delivery: 0,
    articles: [
      { id: 6, quantity: 2 },
      { id: 1, quantity: 1 }
    ]
  },
  {
    id: 10037,
    to: '/orders',
    date: 'Ned, 18.02.2024 u 19:40',
    customer: 'Stefan Pavlović',
    total: 1234.00,
    status: false,
    delivery: 0,
    articles: [
      { id: 5, quantity: 1 }
    ]
  }
]


export default orders