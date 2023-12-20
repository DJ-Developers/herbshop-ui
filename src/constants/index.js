import { slugify } from '@/utils/slugify'

export const POST = {
  id: '1',
  title: 'Start a Kickass Online Blog',
  slug: slugify('Start a Kickass Online Blog'),
  cover: '/bg-category.jpeg',
  createdAt: '02 Aug 2023',
  category: {
    title: 'Kitchen',
    slug: 'Kitchen',
    parent: {
      title: 'Decor',
      slug: 'decor',
    },
  },
  excerpt:
    'Working on writing our first book has been one of the most amazing projects. It seems like it will be forever until I get to show you what we have been.',
  content:
    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> <br /><h2>Paragraph</h2><br /><p>What is MTAweb Directory?</p><br /><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory isthe simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list. </p> <br /> <p> With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>',
}
export const PRODUCTS = [
  {
    id: '1',
    name: 'Ngựa Vằn Xander',
    slug: slugify('Xander The Zebra'),
    featuredImage: '/product/Xander-The-Zebra.jpg',
    price: '$77.32',
    sale_price: '',
    // colors: ['#94d82d', '#1890ff', '#ff5630'],
  },
  {
    id: '2',
    name: 'Nai Sừng Tấm Monty',
    slug: slugify('Monty The Moose'),
    featuredImage:
      'https://res.cloudinary.com/herbshop/image/upload/products/monty-the-moose.jpg',
    price: '$47.44',
    sale_price: '',
    // colors: ['#1890ff'],
  },
  {
    id: '3',
    name: 'Scraps The Seagull',
    slug: slugify('Scraps The Seagull'),
    featuredImage: '/product/Scrap-The-Seagull.jpg',
    price: '$60.62',
    sale_price: '$39.99',
    // colors: ['#1890ff', '#ff5630'],
    label: 'sale',
  },
  {
    id: '4',
    name: 'Lạc Đà Không Bướu',
    slug: slugify('Lonzon The Llama'),
    featuredImage: '/product/LONZO-LLAMA.jpg',
    price: '$43.84',
    sale_price: '',
    // colors: ['#94d82d', '#ff5630'],
    label: 'new',
  },
  {
    id: '5',
    name: 'Cây Thường Xuân',
    slug: slugify('Cây Thường Xuân'),
    featuredImage: '/product/Cay-Thuong-Xuan.jpg',
    price: '$77.32',
    sale_price: '',
    // colors: ['#94d82d', '#1890ff', '#ff5630'],
  },
  {
    id: '6',
    name: 'Cây Dương Xỉ',
    slug: slugify('Cây Dương Xỉ'),
    featuredImage: '/product/Cay-Duong-Xi.jpg',
    price: '$47.44',
    sale_price: '',
    // colors: ['#1890ff'],
  },
  {
    id: '7',
    name: 'Cây đuôi công',
    slug: slugify('Cây đuôi công'),
    featuredImage: '/product/Cay-Duoi-Cong.jpg',
    price: '$60.62',
    sale_price: '$39.99',
    // colors: ['#1890ff', '#ff5630'],
    label: 'sale',
  },
  {
    id: '8',
    name: 'Cây lưỡi mèo',
    slug: slugify('Cây lưỡi mèo'),
    featuredImage: '/product/Cay-Luoi-Meo.jpg',
    price: '$43.84',
    sale_price: '',
    // colors: ['#94d82d', '#ff5630'],
    label: 'new',
  },
]

export const product = {
  title: 'Monty The Moose',
  slug: slugify('Monty The Moose'),
  featuredImage:
    'https://res.cloudinary.com/herbshop/image/upload/v1698318286/products/monty-the-moose.jpg',
  images: [
    '/product/Monty-The-Moose.jpg',
    '/product/Monty-The-Moose-1.jpg',
    '/product/Monty-The-Moose-2.jpg',
  ],
  shortDescriptions:
    'You’ll use this set of six 1″ solid wood pinch, or prep, bowls over and over again! Perfect for cooking and baking, simply use them to pre-measure ingredients and have them handy when needed. Or, use them while serving meals with garnishes. Give them to your guests so they can pinch their own salt, seasonings, and more.',
  price: '$47.44',
  salePrice: '$40.00',
  description:
    '<h2>Specifications</h2><br/><ol><li>Category</li> <li>Amigurumi</li></ol><br/><ol><li>Manufacturer</li> <li>Herbshop</li></ol><br/><ol><li>Serial Number</li> <li>358607726380311</li></ol><br/><h2>Product details</h2><br/><ul><li><p>The foam sockliner feels soft and comfortable</p></li><li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape <p/></li></ul>',
  reviews: {
    href: '#',
    average: 4,
    totalCount: 117,
  },
  category: {
    name: 'Amigurimi',
    slug: 'amigurimi',
  },
}

// ----------
