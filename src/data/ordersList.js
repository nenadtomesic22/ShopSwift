const orders = [
  {
    id: 10031,
    to: '/orders',
    date: 'Pon, 12.02.2024 u 09:15',
    total: 3786.00,
    status: 'done', // Promenjeno
    delivery: 0,
    articles: [{ id: 1, quantity: 2 }, { id: 5, quantity: 1 }],
    customer: { id: 1, name: 'Marko Petrović', email: 'marko.petrovic@gmail.com', phone: 381641112223, address: 'Kralja Petra 12', city: '11000 Beograd', country: 'Srbija'}
  },
  {
    id: 10032,
    to: '/orders',
    date: 'Uto, 13.02.2024 u 14:42',
    total: 1996.00,
    status: 'unDone', // Promenjeno
    delivery: 390,
    articles: [{ id: 2, quantity: 1 }],
    customer: { id: 2, name: 'Ivana Janković', email: 'valkary@gmail.com', phone: 381643696560, address: 'JNA 31', city: '26220 Kovin', country: 'Srbija'}
  },
  {
    id: 10033,
    to: '/orders',
    date: 'Sre, 14.02.2024 u 18:05',
    total: 5898.00,
    status: 'canceled', // Promenjeno
    delivery: 0,
    articles: [{ id: 3, quantity: 2 }, { id: 6, quantity: 1 }],
    customer: { id: 3, name: 'Nikola Ilić', email: 'nikola.ilic@gmail.com', phone: 381652224445, address: 'Cara Dušana 44', city: '21000 Novi Sad', country: 'Srbija'}
  },
  {
    id: 10034,
    to: '/orders',
    date: 'Čet, 15.02.2024 u 11:30',
    total: 2981.00,
    status: 'done', // Promenjeno
    delivery: 0,
    articles: [{ id: 4, quantity: 1 }],
    customer: { id: 4, name: 'Ana Kovačević', email: 'ana.kovacevic@gmail.com', phone: 381661234567, address: 'Nemanjina 8', city: '18000 Niš', country: 'Srbija'}
  },
  {
    id: 10035,
    to: '/orders',
    date: 'Pet, 16.02.2024 u 16:12',
    total: 4368.00,
    status: 'unDone', // Promenjeno
    delivery: 390,
    articles: [{ id: 7, quantity: 3 }],
    customer: { id: 5, name: 'Milan Stojanović', email: 'milan.stojanovic@gmail.com', phone: 381693334455, address: 'Vojvode Mišića 77', city: '34000 Kragujevac', country: 'Srbija'}
  },
  {
    id: 10036,
    to: '/orders',
    date: 'Sub, 17.02.2024 u 10:05',
    total: 3224.00,
    status: 'done', // Promenjeno
    delivery: 0,
    articles: [{ id: 6, quantity: 2 }, { id: 1, quantity: 1 }],
    customer: { id: 6, name: 'Jelena Ristić', email: 'jelena.ristic@gmail.com', phone: 381621112233, address: 'Bulevar Oslobođenja 15', city: '24000 Subotica', country: 'Srbija'}
  },
  {
    id: 10037,
    to: '/orders',
    date: 'Ned, 18.02.2024 u 19:40',
    total: 1234.00,
    status: 'canceled', // Promenjeno
    delivery: 0,
    articles: [{ id: 5, quantity: 1 }],
    customer: { id: 7, name: 'Stefan Pavlović', email: 'stefan.pavlovic@gmail.com', phone: 381654445556, address: 'Zmaj Jovina 3', city: '23000 Zrenjanin', country: 'Srbija'}
  }
]

export default orders