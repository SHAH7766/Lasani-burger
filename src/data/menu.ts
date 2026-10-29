import type { MenuItem } from '../types/menu';

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    slug: 'lasani-special-zinger-burger',
    name: 'Lasani Special Zinger Burger',
    description: 'Crispy golden fried chicken fillet loaded with melting cheese, signature spicy sauce, crisp lettuce in a toasted butter bun.',
    category: 'burgers',
    price: 450,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
    spicyLevel: 2,
    prepTime: '12-15 mins'
  },
  {
    id: 'b2',
    slug: 'mighty-beef-burger',
    name: 'Mighty Beef Burger',
    description: 'Juicy chargrilled beef patty with smoky barbecue glaze, cheddar cheese slice, caramelized onions, and house special sauce.',
    category: 'burgers',
    price: 550,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
    spicyLevel: 1,
    prepTime: '15 mins'
  },
  {
    id: 'b3',
    slug: 'double-deck-zinger',
    name: 'Double Deck Zinger Burger',
    description: 'Two massive crispy chicken fillets stacked with double cheese, jalapeños, and tangy mayo for ultimate satisfaction.',
    category: 'burgers',
    price: 680,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    popular: true,
    spicyLevel: 3,
    prepTime: '15 mins'
  },
  {
    id: 'b4',
    slug: 'crispy-chicken-burger',
    name: 'Classic Crispy Chicken Burger',
    description: 'Crunchy chicken breast fillet with crisp lettuce and creamy mayo in a warm sesame bun.',
    category: 'burgers',
    price: 350,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 0,
    prepTime: '10 mins'
  },

  // BBQ
  {
    id: 'bbq1',
    slug: 'chicken-tikka-boti-plate',
    name: 'Chicken Tikka Boti Plate',
    description: 'Tender boneless chicken chunks marinated in traditional Lahori spices and yogurt, charcoal-grilled to smoky perfection.',
    category: 'bbq',
    price: 650,
    image: '/images/menu/tikka-boti.png',
    featured: true,
    popular: true,
    spicyLevel: 2,
    prepTime: '20 mins'
  },
  {
    id: 'bbq2',
    slug: 'special-seekh-kebab-plates',
    name: 'Special Beef Seekh Kebab (4 Pcs)',
    description: 'Minced beef blended with fresh herbs, green chillies, and aromatic spices, skewered and roasted over glowing coals.',
    category: 'bbq',
    price: 580,
    image: '/images/menu/seekh-kebab.png',
    featured: true,
    popular: true,
    spicyLevel: 2,
    prepTime: '15 mins'
  },
  {
    id: 'bbq3',
    slug: 'lasani-mixed-bbq-platter',
    name: 'Lasani Mixed BBQ Platter',
    description: 'A feast of Chicken Tikka, Malai Boti, Seekh Kebabs, and Grilled Fish served with naan, mint raita, and salad.',
    category: 'bbq',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
    spicyLevel: 2,
    prepTime: '25 mins'
  },
  {
    id: 'bbq4',
    slug: 'creamy-malai-boti',
    name: 'Creamy Malai Boti',
    description: 'Juicy chicken cubes marinated in rich cream, cheese, green cardamom, and mild spices, grilled over gentle coals.',
    category: 'bbq',
    price: 700,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 1,
    prepTime: '20 mins'
  },

  // Pizza
  {
    id: 'p1',
    slug: 'lasani-special-pizza',
    name: 'Lasani Special Supreme Pizza',
    description: 'Loaded with spicy chicken tikka chunks, mushrooms, capsicum, olives, sweet corn, and a heavy blanket of mozzarella cheese.',
    category: 'pizza',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
    spicyLevel: 2,
    prepTime: '20 mins'
  },
  {
    id: 'p2',
    slug: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    description: 'Flavorful fajita chicken, onions, green bell peppers, jalapeños, and herbs on a handcrafted crust with rich tomato sauce.',
    category: 'pizza',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2,
    prepTime: '20 mins'
  },
  {
    id: 'p3',
    slug: 'hot-peri-peri-pizza',
    name: 'Hot Peri Peri Pizza',
    description: 'Fiery peri peri chicken, sun-dried tomatoes, red onions, and extra cheese for those who love bold spicy kicks.',
    category: 'pizza',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 3,
    prepTime: '20 mins'
  },

  // Shawarma
  {
    id: 's1',
    slug: 'special-chicken-shawarma',
    name: 'Special Chicken Shawarma Roll',
    description: 'Shredded garlic chicken, crisp cabbage, pickles, and creamy garlic tahini sauce wrapped in soft pita bread.',
    category: 'shawarma',
    price: 250,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    popular: true,
    spicyLevel: 1,
    prepTime: '8 mins'
  },
  {
    id: 's2',
    slug: 'cheese-loaded-shawarma',
    name: 'Cheese Loaded Shawarma Platter',
    description: 'Open shawarma bread loaded with chicken, french fries, melted cheese sauce, and special garlic dip.',
    category: 'shawarma',
    price: 400,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    featured: true,
    spicyLevel: 1,
    prepTime: '10 mins'
  },

  // Sides
  {
    id: 'sd1',
    slug: 'masala-fries',
    name: 'Crispy Masala Fries',
    description: 'Golden french fries tossed in our signature secret spice blend, served with garlic mayo.',
    category: 'sides',
    price: 220,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    popular: true,
    spicyLevel: 1,
    prepTime: '8 mins'
  },
  {
    id: 'sd2',
    slug: 'loaded-cheese-fries',
    name: 'Loaded Cheese & Jalapeño Fries',
    description: 'Crispy fries smothered in hot liquid cheddar cheese sauce and pickled jalapeño slices.',
    category: 'sides',
    price: 350,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    featured: true,
    spicyLevel: 2,
    prepTime: '10 mins'
  },
  {
    id: 'sd3',
    slug: 'garlic-mayo-wings',
    name: 'Hot Wings (6 Pcs)',
    description: 'Crispy chicken wings glazed in spicy tangy buffalo sauce, served with cool ranch dip.',
    category: 'sides',
    price: 400,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    spicyLevel: 2,
    prepTime: '12 mins'
  },

  // Drinks
  {
    id: 'd1',
    slug: 'mint-margarita',
    name: 'Fresh Mint Margarita',
    description: 'Refreshing blend of fresh mint leaves, lime juice, sprite, and crushed ice.',
    category: 'drinks',
    price: 250,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    prepTime: '5 mins'
  },
  {
    id: 'd2',
    slug: 'soft-drink-can',
    name: 'Soft Drink (Can)',
    description: 'Chilled carbonated beverage (Coke, Pepsi, Sprite, or 7Up).',
    category: 'drinks',
    price: 120,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    prepTime: '2 mins'
  },
  {
    id: 'd3',
    slug: 'mineral-water',
    name: 'Mineral Water (500ml)',
    description: 'Pure bottled drinking water.',
    category: 'drinks',
    price: 70,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
    prepTime: '1 min'
  }
];
