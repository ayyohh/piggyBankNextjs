export const headerLinks = [
    {
      label: 'Top 100',
      route: '/',
    },
    {
      label: 'Add a Coin',
      route: '/portfolio/add',
    },
    {
      label: 'My Portfolio',
      route: '/portfolio',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }