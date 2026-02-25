import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'Флагманский смартфон с мощным процессором и отличной камерой.',
    price: 689990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-nanosim-esim-seryi-113138213/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Современный Android-смартфон с ярким дисплеем.',
    price: 499990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Xiaomi 13T',
    description: 'Мощный смартфон с отличным соотношением цены и качества.',
    price: 289990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h4c/84258379104286.jpg?format=gallery-medium',
    images: [
      'https://picsum.photos/150?31',
      'https://picsum.photos/150?32',
      'https://picsum.photos/150?33'
    ],
    link: 'https://kaspi.kz/shop/p/chehol-dlja-xiaomi-13t-13t-pro-prozrachnyi-113993348/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A56',
    description: 'Лёгкий и производительный телефон',
    price: 206460,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
    images: [
      'https://picsum.photos/150?41',
      'https://picsum.photos/150?42',
      'https://picsum.photos/150?43'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Смартфон Redmi A5',
    description: 'Доступный смартфон с хорошей батареей и ярким экраном.',
    price: 44990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/p92/67214816.png?format=gallery-medium',
    images: [
      'https://picsum.photos/150?51',
      'https://picsum.photos/150?52',
      'https://picsum.photos/150?53'
    ],
    link: 'https://kaspi.kz/shop/p/redmi-a5-3-gb-64-gb-chernyi-137003742/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 6,
    name: 'Ноутбук PRYME',
    description: 'Универсальный ноутбук для учёбы и работы.',
    price: 159990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium',
    images: [
      'https://picsum.photos/150?61',
      'https://picsum.photos/150?62',
      'https://picsum.photos/150?63'
    ],
    link: 'https://kaspi.kz/shop/p/pryme-officebook-15-6-8-gb-ssd-256-gb-win-11-officebook-n15-148883799/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Air 13',
    description: 'Лёгкий и мощный ноутбук с отличной автономностью.',
    price: 599990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
    images: [
      'https://picsum.photos/150?71',
      'https://picsum.photos/150?72',
      'https://picsum.photos/150?73'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo IdeaPad 3 15.6',
    description: 'Надёжный ноутбук для повседневных задач',
    price: 449999,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    images: [
      'https://picsum.photos/150?81',
      'https://picsum.photos/150?82',
      'https://picsum.photos/150?83'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Ноутбук Acer Aspire',
    description: 'Практичный ноутбук для работы и учебы.',
    price: 165795,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
    images: [
      'https://picsum.photos/150?91',
      'https://picsum.photos/150?92',
      'https://picsum.photos/150?93'
    ],
    link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Ноутбук Oyan Lite',
    description: 'Компактный ноутбук для базовых задач.',
    price: 139500 ,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
    images: [
      'https://picsum.photos/150?101',
      'https://picsum.photos/150?102',
      'https://picsum.photos/150?103'
    ],
    link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 11,
    name: 'Наушники Xiaomi In-Ear',
    description: 'Лёгкие наушники с чистым звучанием.',
    price: 3000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/7469533.jpg?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-in-ear-headphones-basic-chernyi-4803686/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 12,
    name: 'Наушники Bose Noise Cancelling Headphones',
    description: 'Стильные беспроводные наушники с чистым звуком.',
    price: 116500 ,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h0f/63819863719966.jpg?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-in-ear-headphones-basic-chernyi-4803686/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 13,
    name: 'Наушники Bose QuietComfort',
    description: 'Премиум-звук и активное шумоподавление.',
    price: 149990 ,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/pc2/97568449.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-headphones-chernyi-115912667/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 14,
    name: 'Наушники NOTHING',
    description: 'Стильные беспроводные наушники с чистым звуком.',
    price: 119990 ,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p13/pd8/56994825.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-nothing-headphone-1-chernyi-143636661/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 15,
    name: 'Наушники HONOR Choice',
    description: 'Доступные наушники с хорошей автономностью.',
    price: 23990 ,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p4a/40503534.jpg?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-honor-choice-headphones-belyi-139165804/?c=750000000',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 16,
    name: 'Планшет Apple iPad A16',
    description: 'Мощный планшет для работы и развлечений.',
    price: 199829  ,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 17,
    name: 'Планшет Apple iPad 11',
    description: 'Большой экран и высокая производительность.',
    price: 205484 ,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 18,
    name: 'Планшет Xiaomi Redmi Pad 2',
    description: 'Удобный планшет для учёбы и мультимедиа.',
    price: 129990 ,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 19,
    name: 'Планшет Huawei MatePad 11.5',
    description: 'Стильный планшет с чётким дисплеем.',
    price: 224890  ,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 20,
    name: 'Планшет Xiaomi Pad 6 11',
    description: 'Производительный планшет для повседневных задач.',
    price: 158001 ,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/',
    likes: 0,
    categoryId: 4,
  },

];
