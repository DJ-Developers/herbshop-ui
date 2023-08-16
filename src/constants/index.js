import { slugify } from '@/utils/slugify'

export const POSTS = [
  {
    id: '1',
    title: 'How to Master the Art of Public Speaking',
    slug: slugify('How to Master the Art of Public Speaking'),
    cover: '/post/cover_5.jpeg',
    createdAt: '02 Aug 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '2',
    title: 'The Future of Artificial Intelligence: Trends and Insights',
    slug: slugify('The Future of Artificial Intelligence: Trends and Insights'),
    cover: '/post/cover_9.jpeg',
    createdAt: '01 Aug 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '3',
    title: 'Delicious Recipes for a Vegan Diet',
    slug: slugify('Delicious Recipes for a Vegan Diet'),
    cover: '/post/cover_11.jpeg',
    createdAt: '31 Jul 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '4',
    title: 'A Beginner Guide to Investing in Stocks',
    slug: slugify('A Beginner Guide to Investing in Stocks'),
    cover: '/post/cover_13.jpeg',
    createdAt: '30 Jul 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '5',
    title: 'How to Create Engaging Content for Social Media',
    slug: slugify('How to Create Engaging Content for Social Media'),
    cover: '/post/cover_16.jpeg',
    createdAt: '30 Jul 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '6',
    title: 'Unveiling the Secrets of Successful Entrepreneurs',
    slug: slugify('Unveiling the Secrets of Successful Entrepreneurs'),
    cover: '/post/cover_14.jpeg',
    createdAt: '30 Jul 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '7',
    title: 'The Rise of Remote Work and its Impact on the Workforce',
    slug: slugify('The Rise of Remote Work and its Impact on the Workforce'),
    cover: '/post/cover_8.jpeg',
    createdAt: '30 Jul 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]

export const PRODUCTS = [
  {
    id: '1',
    name: 'Simple Wallet Crochet 1',
    slug: slugify('Simple Wallet Crochet 1'),
    featuredImage: '/product/CrochetWallet_1.jpg',
    price: '$77.32',
    sale_price: '',
    colors: ['#94d82d', '#1890ff', '#ff5630'],
  },
  {
    id: '2',
    name: 'Simple Wallet Crochet 2',
    slug: slugify('Simple Wallet Crochet 2'),
    featuredImage: '/product/CrochetWallet_2.jpg',
    price: '$47.44',
    sale_price: '',
    colors: ['#1890ff'],
  },
  {
    id: '3',
    name: 'Simple Wallet Crochet 3',
    slug: slugify('Simple Wallet Crochet 3'),
    featuredImage: '/product/CrochetWallet_3.jpg',
    price: '$60.62',
    sale_price: '$39.99',
    colors: ['#1890ff', '#ff5630'],
    label: 'sale',
  },
  {
    id: '4',
    name: 'Simple Wallet Crochet 4',
    slug: slugify('Simple Wallet Crochet 4'),
    featuredImage: '/product/CrochetWallet_4.jpg',
    price: '$43.84',
    sale_price: '',
    colors: ['#94d82d', '#ff5630'],
    label: 'new',
  },
]
