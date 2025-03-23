
export interface DayTrip {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  category: 'historic' | 'countryside' | 'cultural';
  distance: string;
}

export const dayTrips: DayTrip[] = [
  {
    id: 'oxford',
    name: 'Oxford University City',
    location: 'Oxford, Oxfordshire',
    duration: 'Full Day (9 hours)',
    price: '£85',
    description: 'Explore the historic city of Oxford, home to the oldest university in the English-speaking world.',
    longDescription: 'Walk in the footsteps of famous scholars, visit the iconic Bodleian Library, and marvel at the magnificent architecture of Christ Church College. This tour provides a deep dive into the academic heritage and architectural beauty of this historic city, including filming locations from Harry Potter.',
    highlights: [
      'Christ Church College Tour',
      'Bodleian Library Visit',
      'Walking Tour of University Buildings',
      'Free time for shopping and lunch',
      'Harry Potter filming locations'
    ],
    image: 'https://images.unsplash.com/photo-1582653291997-079b4f628af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'historic',
    distance: '56 miles from London'
  },
  {
    id: 'stonehenge',
    name: 'Stonehenge & Bath',
    location: 'Wiltshire & Somerset',
    duration: 'Full Day (11 hours)',
    price: '£105',
    description: 'Visit the prehistoric monument of Stonehenge and the elegant city of Bath on this comprehensive day trip.',
    longDescription: 'Discover the mysteries of Stonehenge, a UNESCO World Heritage site dating back over 5,000 years. Then explore the beautiful city of Bath, known for its stunning Georgian architecture and Roman Baths. This tour offers a perfect blend of ancient history and elegant urban beauty.',
    highlights: [
      'Skip-the-line Stonehenge entry',
      'Audio guide at Stonehenge',
      'Panoramic tour of Bath',
      'Entry to the Roman Baths',
      'Free time to explore Bath city center'
    ],
    image: 'https://images.unsplash.com/photo-1559562935-63deaaba692d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'historic',
    distance: '87 miles from London'
  },
  {
    id: 'cotswolds',
    name: 'Cotswolds Villages',
    location: 'Gloucestershire',
    duration: 'Full Day (10 hours)',
    price: '£90',
    description: 'Experience the quintessential English countryside with a tour of the charming Cotswolds villages.',
    longDescription: 'Discover the honey-colored limestone villages that make the Cotswolds so special. Visit Bourton-on-the-Water, Stow-on-the-Wold, and other picture-perfect locations. Enjoy lunch in a traditional English pub and take in the rolling hills and pastoral landscapes of this designated Area of Outstanding Natural Beauty.',
    highlights: [
      'Visit to Bourton-on-the-Water, the "Venice of the Cotswolds"',
      'Explore Stow-on-the-Wold market square',
      'Photo stops at scenic viewpoints',
      'Optional lunch at a traditional English pub',
      'Visit to Arlington Row in Bibury'
    ],
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'countryside',
    distance: '75 miles from London'
  },
  {
    id: 'cambridge',
    name: 'Cambridge University City',
    location: 'Cambridge, Cambridgeshire',
    duration: 'Full Day (8 hours)',
    price: '£80',
    description: 'Discover the prestigious university city of Cambridge and enjoy a traditional punting experience on the River Cam.',
    longDescription: 'Visit the historic colleges of Cambridge University, walk through the picturesque streets, and enjoy a traditional punting trip along the River Cam. Learn about the scientific discoveries and literary masterpieces that originated in this center of academic excellence, home to 31 colleges and numerous Nobel Prize winners.',
    highlights: [
      'Guided tour of King's College and Chapel',
      'Traditional punting on the River Cam',
      'Walking tour of the historic city center',
      'View of the Mathematical Bridge',
      'Free time for lunch and exploring'
    ],
    image: 'https://images.unsplash.com/photo-1590510134975-b9c0577868c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'historic',
    distance: '64 miles from London'
  },
  {
    id: 'windsor',
    name: 'Windsor Castle, Stonehenge & Bath',
    location: 'Windsor, Wiltshire & Bath',
    duration: 'Full Day (12 hours)',
    price: '£125',
    description: 'The ultimate day trip combining three iconic locations: Windsor Castle, mysterious Stonehenge, and historic Bath.',
    longDescription: 'This comprehensive tour takes you to three of England's most famous destinations. Visit Windsor Castle, the oldest inhabited castle in the world and residence of the Royal Family. Next, uncover the mysteries of ancient Stonehenge, followed by exploration of the elegant Georgian city of Bath with its Roman heritage.',
    highlights: [
      'Entry to Windsor Castle with audio guide',
      'Visit to Stonehenge with audio guide',
      'Panoramic tour of Bath',
      'Professional guide throughout the day',
      'Luxury air-conditioned coach transportation'
    ],
    image: 'https://images.unsplash.com/photo-1585668823343-93416a16faa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'historic',
    distance: 'Multiple locations'
  },
  {
    id: 'brighton',
    name: 'Brighton Seaside Day Trip',
    location: 'Brighton, East Sussex',
    duration: 'Full Day (8 hours)',
    price: '£70',
    description: 'Escape to the vibrant seaside city of Brighton for a day of coastal charm and eclectic culture.',
    longDescription: 'Discover why Brighton is one of England's most beloved seaside destinations. Visit the exotic Royal Pavilion, stroll along the famous Brighton Pier, and explore the quirky shops of The Lanes. This tour offers the perfect mix of guided exploration and free time to enjoy the beach, shops, and restaurants at your leisure.',
    highlights: [
      'Entry to the Royal Pavilion',
      'Brighton Pier visit',
      'The Lanes shopping district',
      'Optional seafront activities',
      'Free time for lunch and exploration'
    ],
    image: 'https://images.unsplash.com/photo-1565618754318-9430d148a3d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cultural',
    distance: '54 miles from London'
  },
  {
    id: 'leeds-castle',
    name: 'Leeds Castle & Canterbury',
    location: 'Kent',
    duration: 'Full Day (10 hours)',
    price: '£95',
    description: 'Explore the "loveliest castle in the world" and the historic cathedral city of Canterbury in the garden of England.',
    longDescription: 'Visit the magnificent Leeds Castle, set on two islands in a peaceful lake and surrounded by picturesque gardens. Then journey to Canterbury, home to one of the oldest and most famous Christian structures in England - Canterbury Cathedral. This tour showcases the beautiful countryside of Kent, known as the Garden of England.',
    highlights: [
      'Entry to Leeds Castle and gardens',
      'Visit to Canterbury Cathedral',
      'Free time in Canterbury',
      'Scenic drive through Kent countryside',
      'Professional guide throughout'
    ],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'historic',
    distance: '40 miles from London'
  },
  {
    id: 'lake-district',
    name: 'Lake District Explorer',
    location: 'Cumbria',
    duration: '2 Days (overnight stay)',
    price: '£250',
    description: 'Experience the breathtaking landscapes of the Lake District National Park with an overnight stay.',
    longDescription: 'This two-day adventure takes you to England's most beautiful national park. Discover stunning lakes, dramatic mountains, and picturesque villages that inspired poets and writers for centuries. The tour includes an overnight stay in a charming lakeside hotel, boat rides on Lake Windermere, and guided walks through some of the most scenic landscapes in Britain.',
    highlights: [
      'Overnight stay in Lakeside hotel',
      'Cruise on Lake Windermere',
      'Visit to Wordsworth's Dove Cottage',
      'Scenic walks in the fells',
      'Visit to Grasmere village'
    ],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'countryside',
    distance: '260 miles from London'
  }
];
