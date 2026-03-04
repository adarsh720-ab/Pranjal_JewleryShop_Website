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
    id: 'gold-ring-2', name: 'Aurore Halo Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Gold', price: 198000, weight: '3.8g',
    imageUrls: ['https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&q=85'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A cushion-cut yellow sapphire encircled by a double halo of brilliant diamonds, all set in 22K gold. Warm, radiant, and utterly regal.',
    createdAt: '2024-01-18T10:00:00',
  },

  // -- Rings · Silver --
  {
    id: 'silver-ring-1', name: 'Côte Turquoise Ring', category: { id: 1, name: 'Rings' },
    metalType: 'Silver', price: 22000, weight: '5.1g',
    imageUrls: ['https://images.unsplash.com/photo-1727808103644-9fe53796560d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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
  
  // -- Rings · Rose Gold --
  


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
    id: 'silver-necklace-2', name: 'Rivière Crystal Necklace', category: { id: 2, name: 'Necklaces' },
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



  // ══════════════════════════════════════════════
  //  EARRINGS
  // ══════════════════════════════════════════════

  // -- Earrings · Gold --
  {
    id: 'gold-earring-1', name: 'Soleil Stud Earrings', category: { id: 3, name: 'Earrings' },
    metalType: 'Gold', price: 45000, weight: '2.0g',
    imageUrls: ['https://images.unsplash.com/photo-1653903414925-adfc47c69b3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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

  // -- Earrings · Silver --
  {
    id: 'silver-earring-3', name: 'Feuille Leaf Climbers', category: { id: 3, name: 'Earrings' },
    metalType: 'Silver', price: 22000, weight: '3.2g',
    imageUrls: ['https://images.unsplash.com/photo-1714733831162-0a6e849141be?q=80&w=835&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Delicate silver leaf ear climbers that travel elegantly up the ear, set with tiny topaz accents along the stem.',
    createdAt: '2024-02-16T10:00:00',
  },

  // -- Earrings · Platinum --
  {
    id: 'platinum-earring-1', name: 'Diamant Stud Platinum', category: { id: 3, name: 'Earrings' },
    metalType: 'Platinum', price: 185000, weight: '2.8g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A 1ct brilliant diamond stud in a four-prong platinum setting — flawless, colourless, and endlessly classic.',
    createdAt: '2024-01-20T10:00:00',
  },
 

  // -- Earrings · Rose Gold --
  // {
  //   id: 'rosegold-earring-1', name: 'Petal Drop Earrings', category: { id: 3, name: 'Earrings' },
  //   metalType: 'Rose Gold', price: 68500, weight: '3.1g',
  //   imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
  //   isNewArrival: false, isFeatured: true, stockStatus: 'Available',
  //   description: 'Inspired by the gentle unfurling of a flower, these 18K rose gold earrings cradle rose quartz drops within hand-formed petal frames. Romantic and refined.',
  //   createdAt: '2024-01-20T10:00:00',
  // },
  


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
    imageUrls: ['https://images.unsplash.com/photo-1690175867343-2af70ea57537?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A rigid 18K gold bangle with a full row of brilliant diamonds set flush across the top surface. Daytime glamour perfected.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'gold-bangle-3', name: 'Rani Wide Cuff', category: { id: 4, name: 'Bangles' },
    metalType: 'Gold', price: 325000, weight: '58g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1678554875448-b98cf9fe08de?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A majestic wide cuff in 22K gold embossed with temple motifs and set with rubies and emeralds. A crown for the wrist.',
    createdAt: '2024-01-10T10:00:00',
  },

  // -- Bangles · Silver --
  {
    id: 'silver-bangle-1', name: 'Onde Wave Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 18500, weight: '20g',
    imageUrls: ['https://images.unsplash.com/photo-1762780700709-9695d1df32e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A hand-forged sterling silver bangle with an undulating wave profile. Organic, wearable, and quietly striking.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'silver-bangle-2', name: 'Serpent Wrap Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 38000, weight: '32g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1674748385691-a185ad303097?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A coiling serpent bangle in oxidised silver with inlaid turquoise scales and tiny garnet eyes. Mesmerising and mythic.',
    createdAt: '2023-11-28T10:00:00',
  },
  {
    id: 'silver-bangle-3', name: 'Perle Pearl Station Bangle', category: { id: 4, name: 'Bangles' },
    metalType: 'Silver', price: 32000, weight: '18g',
    imageUrls: ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1UwKuyPlCoR1KrmjdGthIVB0M5OqLBj9uaDjsDp7BXp_II8NNpYpmH8U2Y69GyB6qES9Kgl1nRmegme1f-GvkCHY6Os42DLS4kB2AFII'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'Seven freshwater pearls evenly spaced around a delicate sterling silver bangle. Effortlessly classic.',
    createdAt: '2023-12-24T10:00:00',
  },

  // -- Bangles · Platinum --
  // {
  //   id: 'platinum-bangle-1', name: 'Diamant Platinum Bangle', category: { id: 4, name: 'Bangles' },
  //   metalType: 'Platinum', price: 485000, weight: '32g',
  //   imageUrls: ['https://images.unsplash.com/photo-1767921804162-9c55a278768d?w=800&q=85'],
  //   isNewArrival: false, isFeatured: true, stockStatus: 'Available',
  //   description: 'A rigid platinum bangle with a full pavé-set diamond band across the entire top half. Breathtaking from wrist to light.',
  //   createdAt: '2024-01-22T10:00:00',
  // },
  

  // -- Bangles · Rose Gold --
  // {
  //   id: 'rosegold-bangle-1', name: 'Rosée Slim Bangle', category: { id: 4, name: 'Bangles' },
  //   metalType: 'Rose Gold', price: 48000, weight: '14g',
  //   imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
  //   isNewArrival: true, isFeatured: false, stockStatus: 'Available',
  //   description: 'A slim 18K rose gold bangle with a single row of pavé diamonds — the perfect daily wear piece.',
  //   createdAt: '2024-02-11T10:00:00',
  // },
  


  // ══════════════════════════════════════════════
  //  BRACELETS
  // ══════════════════════════════════════════════

  // -- Bracelets · Gold --
  {
    id: 'gold-bracelet-1', name: 'Miel Tennis Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 285000, weight: '10.2g',
    imageUrls: ['https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Thirty-two round brilliant diamonds in individual claw settings, linked in 18K yellow gold. The gold tennis bracelet of dreams.',
    createdAt: '2024-02-12T10:00:00',
  },
  {
    id: 'gold-bracelet-2', name: 'Serpent Gold Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 215000, weight: '16g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1671641737519-841d15b5211f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'An articulated serpent bracelet in 22K gold with ruby eyes and a diamond-set spine. Mythic, opulent, and unmistakably grand.',
    createdAt: '2023-12-24T10:00:00',
  },
  {
    id: 'gold-bracelet-3', name: 'Jardin Charm Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Gold', price: 125000, weight: '12g',
    imageUrls: ['https://images.unsplash.com/photo-1689397136362-dce64e557fcc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A 22K gold charm bracelet with eight hand-crafted charms: a flower, a key, a star, a heart, and four more stories to tell.',
    createdAt: '2024-01-18T10:00:00',
  },

  // -- Bracelets · Silver --
  {
    id: 'silver-bracelet-1', name: 'Onde Silver Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 16500, weight: '8g',
    imageUrls: ['https://images.unsplash.com/photo-1676291055501-286c48bb186f?q=80&w=990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A hand-formed sterling silver bracelet with flowing wave profile, finished in a high mirror polish.',
    createdAt: '2024-02-08T10:00:00',
  },
  {
    id: 'silver-bracelet-2', name: 'Opale Silver Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 38000, weight: '10g',
    imageUrls: ['https://images.unsplash.com/photo-1721103428054-6bcf4f655594?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'Five oval opal cabochons bezel-set in brushed sterling silver links, connected by fine oval rings.',
    createdAt: '2024-02-16T10:00:00',
  },
  {
    id: 'silver-bracelet-3', name: 'Cosmos Charm Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Silver', price: 28000, weight: '14g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: false, stockStatus: 'Available',
    description: 'A sterling silver belcher chain with six celestial charms: moon, stars, sun, planets. For dreamers who wear their universe.',
    createdAt: '2024-01-24T10:00:00',
  },

  // -- Bracelets · Platinum --
  {
    id: 'platinum-bracelet-1', name: 'Sapphire Tennis Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Platinum', price: 425000, weight: '12.4g',
    imageUrls: ['https://images.unsplash.com/photo-1681091639096-a7b2eb1d4990?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'Forty-two natural Ceylon sapphires — each matched by colour and clarity — set in a continuous platinum line. The pinnacle of elegant restraint.',
    createdAt: '2024-02-10T10:00:00',
  },
  {
    id: 'platinum-bracelet-2', name: 'Diamant Line Bracelet', category: { id: 5, name: 'Bracelets' },
    metalType: 'Platinum', price: 565000, weight: '11g',
    imageUrls: ['https://plus.unsplash.com/premium_photo-1724075323624-39dd965c9f36?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'Thirty-eight brilliant diamonds of matched colour and cut in a continuous platinum tennis bracelet. Luminous perfection.',
    createdAt: '2024-01-26T10:00:00',
  },

  // -- Bracelets · Rose Gold --
  // {
  //   id: 'rosegold-bracelet-1', name: 'Rosée Pavé Bracelet', category: { id: 5, name: 'Bracelets' },
  //   metalType: 'Rose Gold', price: 145000, weight: '10g',
  //   imageUrls: ['https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85'],
  //   isNewArrival: true, isFeatured: false, stockStatus: 'Available',
  //   description: 'A flexible pavé diamond strap in warm 18K rose gold — every angle shimmering with soft pink-tinged brilliance.',
  //   createdAt: '2024-02-13T10:00:00',
  // },
  


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
    imageUrls: ['https://images.unsplash.com/photo-1679019939953-7d44a6db23de?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A classic 1ct round brilliant diamond in a four-claw 18K gold pendant. The most perfect solo performer.',
    createdAt: '2024-01-28T10:00:00',
  },
  

  // -- Pendants · Silver --
  {
    id: 'silver-pendant-1', name: 'Moonstone Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Silver', price: 34000, weight: '5.8g',
    imageUrls: ['https://images.unsplash.com/photo-1758974504538-daf9f7e3b98c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: false, stockStatus: 'Available',
    description: 'A large oval moonstone displaying ethereal blue adularescence, suspended from oxidised sterling silver with delicate leaf detailing. Quietly magical.',
    createdAt: '2024-02-12T10:00:00',
  },
  {
    id: 'silver-pendant-2', name: 'Cosmos Nebula Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Silver', price: 19500, weight: '4.2g',
    imageUrls: ['https://images.unsplash.com/photo-1696533700445-9cc60ac4a651?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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
    imageUrls: ['https://images.unsplash.com/photo-1719862056472-1e4d4c10d50c?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A 2ct round brilliant diamond in a sleek four-claw platinum pendant. Stripped back, luminous, and utterly supreme.',
    createdAt: '2024-01-20T10:00:00',
  },
  {
    id: 'platinum-pendant-2', name: 'Glacier Pear Drop Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Platinum', price: 425000, weight: '5.0g',
    imageUrls: ['https://images.unsplash.com/photo-1719862056482-15c668d17ed1?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: true, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped diamond of 2.2ct in a claw-set platinum pendant. The teardrop form is the most graceful of diamond cuts.',
    createdAt: '2024-02-06T10:00:00',
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
    imageUrls: ['https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    isNewArrival: false, isFeatured: true, stockStatus: 'Available',
    description: 'A pear-shaped morganite in a claw-set 18K rose gold pendant with a pavé diamond bail. Blush beauty at its finest.',
    createdAt: '2024-01-16T10:00:00',
  },
  {
    id: 'rosegold-pendant-3', name: 'Cerise Ruby Pendant', category: { id: 6, name: 'Pendants' },
    metalType: 'Rose Gold', price: 188000, weight: '4.4g',
    imageUrls: ['https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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