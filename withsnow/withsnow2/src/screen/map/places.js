// 파일 위치 변경 가능성 O
const places = [
  {
    id: 1,
    name: '레이브 피자',
    address: '서울 용산구 청파동',
    rating: 4.5,
    phone: '123-456-7890',
    openTime: '9:00 AM - 10:00 PM',
    category: '음식',
    img: require('../../../assets/images/pizza.png'),
    isFavorite: true,
    features: ['계단 없음', '높은 턱 없음'],
    floor: ['1F'],
  },
  {
    id: 2,
    name: '마포누구나운동센터',
    address: '서울 마포구 공덕동',
    rating: 4.0,
    phone: '987-654-3210',
    openTime: '10:00 AM - 8:00 PM',
    category: '스포츠센터',
    img: require('../../../assets/images/sportscenter.png'),
    isFavorite: true,
    features: ['휠체어 이용 가능 통로 있음'],
    floor: ['1F', 'B1'],
  },
  {
    id: 3,
    name: '현선이네 용산본점',
    address: '서울 용산구 한강로 2가',
    phone: '02-2139-0427',
    rating: 4.6,
    openTime: '18:00 영업 종료',
    category: '음식',
    img: require('../../../assets/images/tteok.png'),
    isFavorite: true,
    features: ['높은 턱 없음', '계단 없음'],
    floor: ['1F'],
  },
  {
    id: 4,
    name: '경복궁',
    category: '문화공간',
    address: '서울 종로구 세종로',
    rating: 4.0,
    phone: '987-654-3210',
    openTime: '10:00 AM - 8:00 PM',
    img: require('../../../assets/images/geongbok.png'),
    isFavorite: true,
    features: [
      '높은 턱 없음',
      '계단 없음',
      '휠체어 이용 가능 통로 있음',
      '경사로 있음',
    ],
    floor: ['1F'],
  },
  {
    id: 5,
    name: 'Place 2',
    address: 'Address 2',
    rating: 4.0,
    phone: '987-654-3210',
    openTime: '10:00 AM - 8:00 PM',
    img: require('../../../assets/images/placeDetailImg.png'),
    isFavorite: true,
    floor: ['1F'],
  },
];

export default places;
