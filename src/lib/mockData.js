// Add the Main Categories here with the sample image of the category....
export const MOCK_CATEGORIES = [
  { id: 1, name: 'Rings', imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', productCount: 48 },
  { id: 2, name: 'Necklaces', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', productCount: 36 },
  { id: 3, name: 'Earrings', imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', productCount: 52 },
  { id: 4, name: 'Bangles', imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', productCount: 29 },
  { id: 5, name: 'Bracelets', imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=85', productCount: 41 },
  { id: 6, name: 'Pendants', imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80', productCount: 33 },
]


// Add the products here with the id, name, image and all information along with its category...
// ─────────────────────────────────────────────────────────────────
//  ID FORMAT:  {metal}-{category}-{number}
//  e.g.  gold-ring-1  |  silver-necklace-2  |  platinum-bracelet-1  |  rosegold-earring-3
//
//  To add more products: copy any block, bump the number at the end,
//  and update name / price / image / description.
// ─────────────────────────────────────────────────────────────────
export const MOCK_PRODUCTS = [

  // ══════════════════════════════════════════════
  //  RINGS
  // ══════════════════════════════════════════════

  // -- Rings · Gold --
  {
    id: 'gold-ring-1', name: 'Éclat Solitaire Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Gold', price: 285000, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A breathtaking solitaire featuring a 2.5ct round brilliant diamond set in gleaming 18K yellow gold. The six-prong cathedral setting elevates the stone to catch light from every angle — a timeless declaration of eternal devotion.',
    createdAt: '2024-02-01T10:00:00',
  },
  {
    id: 'gold-ring-2', name: 'Verdure Emerald Band', category: { id: 1, name: 'Rings' },
    metalType: 'Gold', price: 312000, weight: '6.1g',
    imageUrls: ['https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Seven Colombian emeralds of exceptional green saturation arranged in a floral cluster, set in 18K yellow gold with diamond accents on each petal.',
    createdAt: '2024-01-10T10:00:00',
  },
  {
    id: 'gold-ring-3', name: 'Aurore Halo Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Gold', price: 198000, weight: '3.8g',
    imageUrls: ['https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A cushion-cut yellow sapphire encircled by a double halo of brilliant diamonds, all set in 22K gold. Warm, radiant, and utterly regal.',
    createdAt: '2024-01-18T10:00:00',
  },

  // -- Rings · Silver --
  {
    id: 'silver-ring-1', name: 'Lunaire Moonstone Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Silver', price: 18500, weight: '4.0g',
    imageUrls: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A large oval moonstone glowing with blue adularescence, bezel-set in oxidised sterling silver with leaf-motif shoulders. Quietly magical.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'silver-ring-2', name: 'Opale Fire Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Silver', price: 28000, weight: '4.6g',
    imageUrls: ['https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A spectacular Ethiopian fire opal blazing with red and orange play-of-colour, claw-set in brushed sterling silver.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'silver-ring-3', name: 'Côte Turquoise Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Silver', price: 22000, weight: '5.1g',
    imageUrls: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A Sleeping Beauty turquoise cabochon set in a chunky sterling silver bezel with hand-stamped geometric detailing.',
    createdAt: '2024-01-14T10:00:00',
  },

  // -- Rings · Platinum --
  {
    id: 'platinum-ring-1', name: 'Diamant Solitaire Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Platinum', price: 485000, weight: '5.1g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A flawless 3ct round brilliant diamond secured in a timeless four-prong platinum setting. Pure, cold beauty without compromise.',
    createdAt: '2024-02-01T10:00:00',
  },
  {
    id: 'platinum-ring-2', name: 'Glacier Three-Stone Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Platinum', price: 625000, weight: '6.3g',
    imageUrls: ['https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'An oval diamond flanked by two trillion-cut diamonds, all set in cool platinum. A breathtaking statement of past, present, and future.',
    createdAt: '2024-01-12T10:00:00',
  },
  {
    id: 'platinum-ring-3', name: 'Carré Princess Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Platinum', price: 510000, weight: '5.5g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A 2.8ct princess-cut diamond in a tension-set platinum band. Geometric precision meets supreme luxury.',
    createdAt: '2023-12-05T10:00:00',
  },

  // -- Rings · Rose Gold --
  {
    id: 'rosegold-ring-1', name: 'Pétale Drop Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Rose Gold', price: 68500, weight: '3.1g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A rose quartz pear drop suspended within a hand-formed 18K rose gold petal frame. Soft, romantic, and endlessly feminine.',
    createdAt: '2024-01-20T10:00:00',
  },
  {
    id: 'rosegold-ring-2', name: 'Aurore Morganite Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Rose Gold', price: 112000, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A blush-pink oval morganite encircled by a halo of brilliant diamonds in 18K rose gold. A warm, glowing declaration of love.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'rosegold-ring-3', name: 'Cerise Ruby Cluster Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Rose Gold', price: 178000, weight: '5.0g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A cluster of round rubies and pink sapphires blooms across the finger in 18K rose gold. Rich, warm, and utterly captivating.',
    createdAt: '2024-02-16T10:00:00',
  },


  // ══════════════════════════════════════════════
  //  NECKLACES
  // ══════════════════════════════════════════════

  // -- Necklaces · Gold --
  {
    id: 'gold-necklace-1', name: 'Lumière Pearl Strand', category: { id: 2, name: 'Necklaces' },
    metalType: 'Gold', price: 142000, weight: '38g',
    imageUrls: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Forty-two perfectly matched South Sea pearls strung on silk with an 18K gold clasp set with a single brilliant diamond.',
    createdAt: '2024-02-05T10:00:00',
  },
  {
    id: 'gold-necklace-2', name: 'Collier Emerald Drop', category: { id: 2, name: 'Necklaces' },
    metalType: 'Gold', price: 265000, weight: '15g',
    imageUrls: ['https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped Colombian emerald drop suspended from a pavé-set diamond bail on an 18K gold chain. Vivid, vibrant, breathtaking.',
    createdAt: '2024-01-04T10:00:00',
  },
  {
    id: 'gold-necklace-3', name: 'Boa Snake Chain', category: { id: 2, name: 'Necklaces' },
    metalType: 'Gold', price: 92000, weight: '22g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A sinuous, flat 18K gold snake chain that moves like liquid around the neck. Statement and sophistication in one.',
    createdAt: '2024-02-12T10:00:00',
  },

  // -- Necklaces · Silver --
  {
    id: 'silver-necklace-1', name: 'Brume Opal Chain', category: { id: 2, name: 'Necklaces' },
    metalType: 'Silver', price: 28500, weight: '10g',
    imageUrls: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A delicate sterling silver chain bearing a free-form Australian opal slice, glowing with green and blue play-of-colour.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'silver-necklace-2', name: 'Ossature Vertebrae Necklace', category: { id: 2, name: 'Necklaces' },
    metalType: 'Silver', price: 32000, weight: '18g',
    imageUrls: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Inspired by natural bone structure, these articulated sterling silver links flex and move beautifully with the body.',
    createdAt: '2024-01-12T10:00:00',
  },
  {
    id: 'silver-necklace-3', name: 'Rivière Crystal Necklace', category: { id: 2, name: 'Necklaces' },
    metalType: 'Silver', price: 45000, weight: '12g',
    imageUrls: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'Graduated rock crystal quartz drops set in sterling silver bezels, strung on a fine silver chain for a rivière effect.',
    createdAt: '2024-01-06T10:00:00',
  },

  // -- Necklaces · Platinum --
  {
    id: 'platinum-necklace-1', name: 'Diamond Rivière Necklace', category: { id: 2, name: 'Necklaces' },
    metalType: 'Platinum', price: 580000, weight: '14.2g',
    imageUrls: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Out of Stock',
    description: 'A continuous line of twenty-four graduated brilliant-cut diamonds in platinum. Effortless, luminous, and utterly unforgettable.',
    createdAt: '2024-01-05T10:00:00',
  },
  {
    id: 'platinum-necklace-2', name: 'Glacier Diamond Cluster', category: { id: 2, name: 'Necklaces' },
    metalType: 'Platinum', price: 425000, weight: '12g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'An abstract cluster of twelve scattered brilliant diamonds on a fine platinum chain — as though scattered stars fell from the sky.',
    createdAt: '2024-02-06T10:00:00',
  },
  {
    id: 'platinum-necklace-3', name: 'Élan Marquise Drop', category: { id: 2, name: 'Necklaces' },
    metalType: 'Platinum', price: 378000, weight: '10g',
    imageUrls: ['https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A marquise-cut diamond of 2.1ct drops freely from a diamond-set bail on a platinum chain. Supremely elegant motion.',
    createdAt: '2023-12-02T10:00:00',
  },

  // -- Necklaces · Rose Gold --
  {
    id: 'rosegold-necklace-1', name: 'Rosée Diamond Pendant Necklace', category: { id: 2, name: 'Necklaces' },
    metalType: 'Rose Gold', price: 88000, weight: '7g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A round brilliant diamond in an open bezel drops from a delicate 18K rose gold trace chain. Simple, warm, and impossibly wearable.',
    createdAt: '2024-02-13T10:00:00',
  },
  {
    id: 'rosegold-necklace-2', name: 'Morganite Teardrop Necklace', category: { id: 2, name: 'Necklaces' },
    metalType: 'Rose Gold', price: 145000, weight: '9g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped morganite of 4ct in a claw-set 18K rose gold pendant with pavé diamond shoulders. Feminine and captivating.',
    createdAt: '2024-02-07T10:00:00',
  },
  {
    id: 'rosegold-necklace-3', name: 'Flamme Ruby Collar', category: { id: 2, name: 'Necklaces' },
    metalType: 'Rose Gold', price: 225000, weight: '16g',
    imageUrls: ['https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A graduated collar of round rubies and diamonds in 18K rose gold — a flame of colour against warm skin.',
    createdAt: '2024-01-28T10:00:00',
  },


  // ══════════════════════════════════════════════
  //  EARRINGS
  // ══════════════════════════════════════════════

  // -- Earrings · Gold --
  {
    id: 'gold-earring-1', name: 'Soleil Stud Earrings', category: { id: 3, name: 'Earrings' },
    metalType: 'Gold', price: 45000, weight: '2.0g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Classic round brilliant diamond studs in 18K yellow gold — 0.5ct each. The jewellery wardrobe\'s most essential piece.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'gold-earring-2', name: 'Éventail Fan Earrings', category: { id: 3, name: 'Earrings' },
    metalType: 'Gold', price: 142000, weight: '6.8g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Pleated fan-form drops in 22K gold pavé-set with diamonds. The motion when worn is truly mesmerising.',
    createdAt: '2024-01-08T10:00:00',
  },
  {
    id: 'gold-earring-3', name: 'Charme Chandelier', category: { id: 3, name: 'Earrings' },
    metalType: 'Gold', price: 185000, weight: '8.4g',
    imageUrls: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Three-tiered chandelier earrings in 18K gold set with emeralds and diamonds. Made for the grandest occasions.',
    createdAt: '2023-12-22T10:00:00',
  },

  // -- Earrings · Silver --
  {
    id: 'silver-earring-1', name: 'Lune Crescent Studs', category: { id: 3, name: 'Earrings' },
    metalType: 'Silver', price: 14500, weight: '2.2g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Crescent moon studs in polished sterling silver, set with three tiny cubic zirconia stars. Quietly celestial.',
    createdAt: '2024-02-09T10:00:00',
  },
  {
    id: 'silver-earring-2', name: 'Opale Drop Earrings', category: { id: 3, name: 'Earrings' },
    metalType: 'Silver', price: 32000, weight: '3.6g',
    imageUrls: ['https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Teardrop Ethiopian opal drops blazing with play-of-colour, claw-set in brushed sterling silver mounts.',
    createdAt: '2024-01-14T10:00:00',
  },
  {
    id: 'silver-earring-3', name: 'Feuille Leaf Climbers', category: { id: 3, name: 'Earrings' },
    metalType: 'Silver', price: 22000, weight: '3.2g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Delicate silver leaf ear climbers that travel elegantly up the ear, set with tiny topaz accents along the stem.',
    createdAt: '2024-02-16T10:00:00',
  },

  // -- Earrings · Platinum --
  {
    id: 'platinum-earring-1', name: 'Diamant Stud Platinum', category: { id: 3, name: 'Earrings' },
    metalType: 'Platinum', price: 185000, weight: '2.8g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A 1ct brilliant diamond stud in a four-prong platinum setting — flawless, colourless, and endlessly classic.',
    createdAt: '2024-01-20T10:00:00',
  },
  {
    id: 'platinum-earring-2', name: 'Cascade Sapphire Drops', category: { id: 3, name: 'Earrings' },
    metalType: 'Platinum', price: 345000, weight: '6.2g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Vivid blue cushion sapphires drop from diamond-set platinum studs. The quintessential occasion earring.',
    createdAt: '2024-02-06T10:00:00',
  },
  {
    id: 'platinum-earring-3', name: 'Aube Marquise Drops', category: { id: 3, name: 'Earrings' },
    metalType: 'Platinum', price: 425000, weight: '7.1g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A pair of marquise-cut diamonds, each 1.5ct, suspended from diamond-set platinum bails. Elongated, elegant, exceptional.',
    createdAt: '2024-01-12T10:00:00',
  },

  // -- Earrings · Rose Gold --
  {
    id: 'rosegold-earring-1', name: 'Petal Drop Earrings', category: { id: 3, name: 'Earrings' },
    metalType: 'Rose Gold', price: 68500, weight: '3.1g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Inspired by the gentle unfurling of a flower, these 18K rose gold earrings cradle rose quartz drops within hand-formed petal frames. Romantic and refined.',
    createdAt: '2024-01-20T10:00:00',
  },
  {
    id: 'rosegold-earring-2', name: 'Morganite Halo Studs', category: { id: 3, name: 'Earrings' },
    metalType: 'Rose Gold', price: 125000, weight: '3.8g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'Round morganites encircled by diamond halos in 18K rose gold. Pink, warm, and magnificently flattering.',
    createdAt: '2024-01-06T10:00:00',
  },
  {
    id: 'rosegold-earring-3', name: 'Rubis Berry Drops', category: { id: 3, name: 'Earrings' },
    metalType: 'Rose Gold', price: 185000, weight: '5.0g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Clusters of round ruby "berries" suspended from diamond-set rose gold studs. Rich, red, and utterly gorgeous.',
    createdAt: '2024-01-14T10:00:00',
  },


  // ══════════════════════════════════════════════
  //  BANGLES
  // ══════════════════════════════════════════════

  // -- Bangles · Gold --
  {
    id: 'gold-bangle-1', name: 'Heritage Bangle Set', category: { id: 4, name: 'Bangles' },
    metalType: 'Gold', price: 195000, weight: '42g',
    imageUrls: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A set of three 22K gold bangles with hand-engraved floral motifs — an heirloom born of Jaipur\'s centuries-old goldsmithing tradition.',
    createdAt: '2024-01-15T10:00:00',
  },
  {
    id: 'gold-bangle-2', name: 'Céleste Diamond Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Gold', price: 285000, weight: '28g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A rigid 18K gold bangle with a full row of brilliant diamonds set flush across the top surface. Daytime glamour perfected.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'gold-bangle-3', name: 'Rani Wide Cuff', category: { id: 4, name: 'Bangles' },
    metalType: 'Gold', price: 325000, weight: '58g',
    imageUrls: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A majestic wide cuff in 22K gold embossed with temple motifs and set with rubies and emeralds. A crown for the wrist.',
    createdAt: '2024-01-10T10:00:00',
  },

  // -- Bangles · Silver --
  {
    id: 'silver-bangle-1', name: 'Onde Wave Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 18500, weight: '20g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A hand-forged sterling silver bangle with an undulating wave profile. Organic, wearable, and quietly striking.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'silver-bangle-2', name: 'Serpent Wrap Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 38000, weight: '32g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A coiling serpent bangle in oxidised silver with inlaid turquoise scales and tiny garnet eyes. Mesmerising and mythic.',
    createdAt: '2023-11-28T10:00:00',
  },
  {
    id: 'silver-bangle-3', name: 'Perle Pearl Station Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 32000, weight: '18g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'Seven freshwater pearls evenly spaced around a delicate sterling silver bangle. Effortlessly classic.',
    createdAt: '2023-12-24T10:00:00',
  },

  // -- Bangles · Platinum --
  {
    id: 'platinum-bangle-1', name: 'Diamant Platinum Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Platinum', price: 485000, weight: '32g',
    imageUrls: ['https://images.unsplash.com/photo-1767921804162-9c55a278768d?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A rigid platinum bangle with a full pavé-set diamond band across the entire top half. Breathtaking from wrist to light.',
    createdAt: '2024-01-22T10:00:00',
  },
  {
    id: 'platinum-bangle-2', name: 'Règne Sapphire Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Platinum', price: 545000, weight: '30g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Alternating round sapphires and brilliant diamonds set flush in a platinum bangle. A royal wrist piece of exceptional quality.',
    createdAt: '2024-01-02T10:00:00',
  },
  {
    id: 'platinum-bangle-3', name: 'Carré Baguette Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Platinum', price: 615000, weight: '34g',
    imageUrls: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Low Stock',
    description: 'Step-cut baguette diamonds set in a geometric stepped pattern across a rigid platinum bangle. Art Deco glamour reborn.',
    createdAt: '2023-12-06T10:00:00',
  },

  // -- Bangles · Rose Gold --
  {
    id: 'rosegold-bangle-1', name: 'Rosée Slim Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Rose Gold', price: 48000, weight: '14g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A slim 18K rose gold bangle with a single row of pavé diamonds — the perfect daily wear piece.',
    createdAt: '2024-02-11T10:00:00',
  },
  {
    id: 'rosegold-bangle-2', name: 'Aurore Hinged Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Rose Gold', price: 155000, weight: '26g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A wide hinged bangle in 18K rose gold with a graduated diamond panel across the top. Warm, luxurious, and supremely elegant.',
    createdAt: '2024-01-12T10:00:00',
  },
  {
    id: 'rosegold-bangle-3', name: 'Morganite Statement Cuff', category: { id: 4, name: 'Bangles' },
    metalType: 'Rose Gold', price: 245000, weight: '28g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A wide open cuff of 18K rose gold set with four oval morganites and pavé diamond accents. Soft pink luxury.',
    createdAt: '2023-12-14T10:00:00',
  },


  // ══════════════════════════════════════════════
  //  BRACELETS
  // ══════════════════════════════════════════════

  // -- Bracelets · Gold --
  {
    id: 'gold-bracelet-1', name: 'Miel Tennis Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 285000, weight: '10.2g',
    imageUrls: ['https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Thirty-two round brilliant diamonds in individual claw settings, linked in 18K yellow gold. The gold tennis bracelet of dreams.',
    createdAt: '2024-02-12T10:00:00',
  },
  {
    id: 'gold-bracelet-2', name: 'Serpent Gold Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 215000, weight: '16g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'An articulated serpent bracelet in 22K gold with ruby eyes and a diamond-set spine. Mythic, opulent, and unmistakably grand.',
    createdAt: '2023-12-24T10:00:00',
  },
  {
    id: 'gold-bracelet-3', name: 'Jardin Charm Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 125000, weight: '12g',
    imageUrls: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A 22K gold charm bracelet with eight hand-crafted charms: a flower, a key, a star, a heart, and four more stories to tell.',
    createdAt: '2024-01-18T10:00:00',
  },

  // -- Bracelets · Silver --
  {
    id: 'silver-bracelet-1', name: 'Onde Silver Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 16500, weight: '8g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A hand-formed sterling silver bracelet with flowing wave profile, finished in a high mirror polish.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'silver-bracelet-2', name: 'Opale Silver Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 38000, weight: '10g',
    imageUrls: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Five oval opal cabochons bezel-set in brushed sterling silver links, connected by fine oval rings.',
    createdAt: '2024-02-16T10:00:00',
  },
  {
    id: 'silver-bracelet-3', name: 'Cosmos Charm Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 28000, weight: '14g',
    imageUrls: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A sterling silver belcher chain with six celestial charms: moon, stars, sun, planets. For dreamers who wear their universe.',
    createdAt: '2024-01-24T10:00:00',
  },

  // -- Bracelets · Platinum --
  {
    id: 'platinum-bracelet-1', name: 'Sapphire Tennis Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Platinum', price: 425000, weight: '12.4g',
    imageUrls: ['https://images.unsplash.com/photo-1767921804162-9c55a278768d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Forty-two natural Ceylon sapphires — each matched by colour and clarity — set in a continuous platinum line. The pinnacle of elegant restraint.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'platinum-bracelet-2', name: 'Diamant Line Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Platinum', price: 565000, weight: '11g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Thirty-eight brilliant diamonds of matched colour and cut in a continuous platinum tennis bracelet. Luminous perfection.',
    createdAt: '2024-01-26T10:00:00',
  },
  {
    id: 'platinum-bracelet-3', name: 'Acier Emerald Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Platinum', price: 685000, weight: '13g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Step-cut Colombian emeralds alternating with baguette diamonds in a sleek platinum line bracelet. Rare and utterly regal.',
    createdAt: '2024-01-02T10:00:00',
  },

  // -- Bracelets · Rose Gold --
  {
    id: 'rosegold-bracelet-1', name: 'Rosée Pavé Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Rose Gold', price: 145000, weight: '10g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A flexible pavé diamond strap in warm 18K rose gold — every angle shimmering with soft pink-tinged brilliance.',
    createdAt: '2024-02-13T10:00:00',
  },
  {
    id: 'rosegold-bracelet-2', name: 'Rubis Tennis Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Rose Gold', price: 315000, weight: '11g',
    imageUrls: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A tennis bracelet alternating round rubies and brilliant diamonds in 18K rose gold — warm, rich, and deeply romantic.',
    createdAt: '2023-12-04T10:00:00',
  },
  {
    id: 'rosegold-bracelet-3', name: 'Morganite Line Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Rose Gold', price: 195000, weight: '9g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Oval morganites alternating with brilliant diamonds in a warm 18K rose gold line bracelet. Blush-pink perfection.',
    createdAt: '2024-01-16T10:00:00',
  },


  // ══════════════════════════════════════════════
  //  PENDANTS
  // ══════════════════════════════════════════════

  // -- Pendants · Gold --
  {
    id: 'gold-pendant-1', name: 'Soleil Sun Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Gold', price: 55000, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A radiant sun motif pendant in 22K gold with fluted rays surrounding a round brilliant diamond centre.',
    createdAt: '2024-02-14T10:00:00',
  },
  {
    id: 'gold-pendant-2', name: 'Éclat Diamond Solitaire Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Gold', price: 125000, weight: '3.8g',
    imageUrls: ['https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A classic 1ct round brilliant diamond in a four-claw 18K gold pendant. The most perfect solo performer.',
    createdAt: '2024-01-28T10:00:00',
  },
  {
    id: 'gold-pendant-3', name: 'Lotus Temple Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Gold', price: 72000, weight: '6.2g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A hand-engraved lotus in 22K gold with a ruby centre and intricate petal detailing. A sacred symbol made precious.',
    createdAt: '2023-12-12T10:00:00',
  },

  // -- Pendants · Silver --
  {
    id: 'silver-pendant-1', name: 'Moonstone Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Silver', price: 34000, weight: '5.8g',
    imageUrls: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A large oval moonstone displaying ethereal blue adularescence, suspended from oxidised sterling silver with delicate leaf detailing. Quietly magical.',
    createdAt: '2024-02-12T10:00:00',
  },
  {
    id: 'silver-pendant-2', name: 'Cosmos Nebula Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Silver', price: 19500, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1562677841-b4d9fc1d56c2?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'An abstract sterling silver pendant inlaid with crushed labradorite to mimic the swirling colours of a nebula.',
    createdAt: '2024-01-26T10:00:00',
  },
  {
    id: 'silver-pendant-3', name: 'Azur Lapis Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Silver', price: 28000, weight: '5.2g',
    imageUrls: ['https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=85'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A carved lapis lazuli teardrop — deep royal blue with gold pyrite inclusions — bezel-set in oxidised sterling silver.',
    createdAt: '2023-12-10T10:00:00',
  },

  // -- Pendants · Platinum --
  {
    id: 'platinum-pendant-1', name: 'Diamant Platinum Solitaire Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Platinum', price: 345000, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A 2ct round brilliant diamond in a sleek four-claw platinum pendant. Stripped back, luminous, and utterly supreme.',
    createdAt: '2024-01-20T10:00:00',
  },
  {
    id: 'platinum-pendant-2', name: 'Glacier Pear Drop Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Platinum', price: 425000, weight: '5.0g',
    imageUrls: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped diamond of 2.2ct in a claw-set platinum pendant. The teardrop form is the most graceful of diamond cuts.',
    createdAt: '2024-02-06T10:00:00',
  },
  {
    id: 'platinum-pendant-3', name: 'Règne Sapphire Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Platinum', price: 485000, weight: '5.4g',
    imageUrls: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A Kashmir blue sapphire of exceptional colour, oval-cut, suspended from a diamond-set bail in platinum. True old-world grandeur.',
    createdAt: '2023-12-20T10:00:00',
  },

  // -- Pendants · Rose Gold --
  {
    id: 'rosegold-pendant-1', name: 'Rosée Diamond Drop Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Rose Gold', price: 88000, weight: '3.8g',
    imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A round brilliant diamond in an open bezel of 18K rose gold, suspended from a fine trace chain. Warmth and sparkle united.',
    createdAt: '2024-02-13T10:00:00',
  },
  {
    id: 'rosegold-pendant-2', name: 'Morganite Teardrop Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Rose Gold', price: 145000, weight: '5.2g',
    imageUrls: ['https://images.unsplash.com/photo-1596944924591-370ef34d15b1?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped morganite in a claw-set 18K rose gold pendant with a pavé diamond bail. Blush beauty at its finest.',
    createdAt: '2024-01-16T10:00:00',
  },
  {
    id: 'rosegold-pendant-3', name: 'Cerise Ruby Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Rose Gold', price: 188000, weight: '4.4g',
    imageUrls: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'An oval pigeon-blood ruby in a halo of brilliant diamonds, set in 18K rose gold. Warm, rich, and deeply romantic.',
    createdAt: '2023-12-04T10:00:00',
  },
]


// Add client voices here ...
export const MOCK_TESTIMONIALS = [
  { name: 'Priya Mehta', city: 'Mumbai', initials: 'PM', rating: 5, text: 'The Éclat Solitaire Ring is beyond anything I imagined. The craftsmanship is extraordinary — my fiancée hasn\'t stopped admiring it since the moment I proposed.' },
  { name: 'Arjun Kapoor', city: 'New Delhi', initials: 'AK', rating: 5, text: 'Bought the Sapphire Tennis Bracelet for our anniversary. She calls it the most beautiful thing she owns. Pranjal Enterprise truly understands what luxury means.' },
  { name: 'Ananya Reddy', city: 'Hyderabad', initials: 'AR', rating: 5, text: 'From the packaging to the piece itself, every detail speaks of care and excellence. I\'ve gifted Pranjal Enterprise to my mother, sister, and now myself.' },
]


export const MOCK_STATS = {
  totalProducts: 72,
  totalCategories: 6,
  newArrivals: 18,
}

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)