export interface Product {
  id: number;
  name: string;
  category: 'men' | 'accessories';
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  sizes: string[];
  colors: string[];
  description: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton Oversized Tee",
    category: "men",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    description: "Crafted from 100% premium organic cotton, this oversized tee offers a relaxed yet refined silhouette. Perfect for layering or wearing on its own for an effortlessly cool look.",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Tailored Slim-Fit Chinos",
    category: "men",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Olive"],
    description: "These slim-fit chinos are tailored for a modern look. Made from stretch cotton blend for all-day comfort and style."
  },
  {
    id: 3,
    name: "Linen Blend Casual Shirt",
    category: "men",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Beige"],
    description: "A breathable linen-cotton blend shirt designed for warm weather. Features a relaxed collar and mother-of-pearl buttons.",
    tag: "New"
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    category: "men",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Grey"],
    description: "A wardrobe essential. This classic denim jacket features a timeless wash and rugged construction that only gets better with age.",
    tag: "Trending"
  },
  {
    id: 5,
    name: "Premium Knit Crewneck Sweater",
    category: "men",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Navy", "Charcoal"],
    description: "A classic crewneck sweater knit from a soft, warm wool blend. Perfect for layering over shirts or under jackets.",
    tag: "Bestseller"
  },
  {
    id: 6,
    name: "Classic Corduroy Jacket",
    category: "men",
    price: 3899,
    originalPrice: 4999,
    discount: 22,
    rating: 4.4,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600&h=750&fit=crop",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Olive"],
    description: "Soft corduroy jacket featuring a button front, chest pockets, and a classic collar. Ideal for transitional weather."
  },
  {
    id: 7,
    name: "Athletic Fit Joggers",
    category: "men",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Charcoal"],
    description: "Designed for movement and comfort. These joggers feature a modern tapered fit, drawstring waistband, and zippered pockets."
  },
  {
    id: 8,
    name: "Structured Linen Trousers",
    category: "men",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.6,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    description: "Lightweight and elegant trousers crafted from pure organic linen. Features a relaxed straight leg and button-up closure."
  },
  {
    id: 9,
    name: "Leather Crossbody Sling Bag",
    category: "accessories",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.5,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Beige", "Black", "Burgundy"],
    description: "Handcrafted from genuine leather, this crossbody bag features an adjustable strap, magnetic closure, and multiple compartments for everyday essentials.",
    tag: "Trending"
  },
  {
    id: 10,
    name: "Minimalist Analog Watch",
    category: "accessories",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["White", "Black"],
    description: "A refined minimalist watch with a Japanese quartz movement, sapphire crystal glass, and genuine Italian leather strap. Water-resistant up to 30 meters."
  },
  {
    id: 11,
    name: "Gold Circle Hoop Earrings",
    category: "accessories",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    rating: 4.3,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["White", "Burgundy"],
    description: "Exquisite handmade jewelry that elevates any outfit. These earrings are hypoallergenic and designed for all-day comfort."
  },
  {
    id: 12,
    name: "Classic Aviator Sunglasses",
    category: "accessories",
    price: 2199,
    originalPrice: 2999,
    discount: 27,
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Black", "Grey"],
    description: "Timeless aviator sunglasses with UV400 protection lenses, lightweight metal frame, and adjustable nose pads for a comfortable fit.",
    tag: "Bestseller"
  },
  {
    id: 13,
    name: "Relaxed Fit Hoodie",
    category: "men",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    rating: 4.4,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Olive"],
    description: "Ultra-soft cotton-fleece hoodie with a relaxed fit. Features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs."
  },
  {
    id: 14,
    name: "Urban Canvas Backpack",
    category: "accessories",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    rating: 4.7,
    reviews: 153,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Navy", "Charcoal", "Olive"],
    description: "Durable water-resistant canvas backpack with dedicated laptop sleeve, leather trims, and multiple pockets for organized daily travel.",
    tag: "New"
  },
  {
    id: 15,
    name: "Merino Wool Crew Socks",
    category: "accessories",
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.2,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Charcoal", "Navy"],
    description: "Premium merino wool crew socks that are naturally temperature-regulating, moisture-wicking, and odor-resistant. Ideal for all seasons."
  },
  {
    id: 16,
    name: "Polarized Retro Sunglasses",
    category: "accessories",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Black", "Beige"],
    description: "Classic retro styled sunglasses featuring high-performance polarized lenses and lightweight acetate frames for durability and eye protection."
  },
  {
    id: 17,
    name: "Premium Leather Belt",
    category: "accessories",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Beige"],
    description: "Crafted from 100% full-grain leather with a satin-finish metal buckle. A timeless accessory that complements denim or formal trousers."
  },
  {
    id: 18,
    name: "Woven Silk Necktie",
    category: "accessories",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.4,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Navy", "Burgundy"],
    description: "Elegant necktie woven from premium mulberry silk. Features a subtle textured pattern for a smart and sophisticated look."
  }
];

export const categories = [
  {
    name: "Men",
    slug: "men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=750&fit=crop",
    description: "Refined essentials for the modern man"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    description: "Curated details that complete the look"
  }
];
