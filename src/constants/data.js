import images from './images';

const ogCookies = [
  {
    title: 'Couch Cookies',
    price: 'Php 250',
    tags: 'OG Cookies',
  },
  {
    title: 'Break a Brownie',
    price: 'Php 250',
    tags: 'OG Cookies',
  },
  {
    title: "S'mores it Up",
    price: 'Php 370',
    tags: 'OG Cookies',
  },
  {
    title: 'Mini Couch Cookies',
    price: 'Php 100',
    tags: 'OG Cookies',
  },
];

const redVelvet = [
  {
    title: 'Fave',
    price: 'Php 340',
    tags: 'Red Velvet Series',
  },
  {
    title: "Mood",
    price: 'Php 320',
    tags: 'Red Velvet Series',
  },
  {
    title: 'Extra',
    price: 'Php 350',
    tags: 'Red Velvet Series',
  },
  {
    title: 'Flex',
    price: 'Php 350',
    tags: 'Red Velvet Series',
  },
];

const cakes = [
  {
    title: "Tripple C's Cheesecake",
    price: 'Php 680',
    tags: 'Cakes',
  },
  {
    title: 'Minimalist Cake',
    price: 'starts @Php 850',
    tags: 'Cakes',
  },
];

const specials = [
  {
    title: "Baby C's Cerials",
    price: 'Php 280',
    tags: 'Specials',
  },
  {
    title: "Coco Bomb (3pcs.)",
    price: 'Php 180',
    tags: 'Specials',
  },
  {
    title: 'Korean Cream Cheese Garlic Buns (2pcs.)',
    price: 'Php 200',
    tags: 'Specials',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { ogCookies, redVelvet, cakes, specials, awards };
