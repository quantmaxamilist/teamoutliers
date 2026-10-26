// Northern Outliers kit, from Halbro Sportswear's public WooCommerce Store API (fetched 2026-10-26):
// https://halbro.com/wp-json/wc/store/v1/products?category=northern-outliers&per_page=50
// Copy is verbatim (HTML stripped; Halbro's hard-wrapped lines rejoined). Sizes are sorted small to large.
// Checkout happens on Halbro: every product links to its permalink.

export interface ShopImage { src: string; sm: string; w: number; h: number; alt: string }
export interface ShopProduct {
  id: number;
  name: string;
  short: string;
  slug: string;
  permalink: string;
  price: string;
  regularPrice: string;
  onSale: boolean;
  description: string[];
  sizes: string[];
  attributes: Record<string, string[]>;
  images: ShopImage[];
}

export const shopCategory = "https://halbro.com/product-category/your-store/northern-outliers/";

export const products: ShopProduct[] = [
  {
    "id": 281519,
    "name": "Northern Outliers Seniors Sliders",
    "short": "Sliders",
    "slug": "northern-outliers-seniors-sliders",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-sliders/",
    "price": "£20.00",
    "regularPrice": "£20.00",
    "onSale": false,
    "description": [
      "Material: 100% polyester upper",
      "Slip-on style",
      "Lightweight",
      "Moulded footbed",
      "EVA injection sole",
      "Impact absorbing flat sole"
    ],
    "sizes": [
      "Shoe Size 3/4",
      "Shoe Size 4.5/5",
      "Shoe Size 6/7",
      "Shoe Size 7.5/8.5",
      "Shoe Size 9/9.5",
      "Shoe Size 10/11"
    ],
    "attributes": {
      "Colour": [
        "Black"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-sliders-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-sliders-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Sliders"
      }
    ]
  },
  {
    "id": 281512,
    "name": "Northern Outliers Seniors Baselayer Top",
    "short": "Baselayer Top",
    "slug": "northern-outliers-seniors-baselayer-top",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-baselayer-top/",
    "price": "£30.00",
    "regularPrice": "£30.00",
    "onSale": false,
    "description": [
      "Quick dry fabric.",
      "Flat lock seams for extra comfort.",
      "Easy care.",
      "Self fabric piped seam detail.",
      "92% polyester/ 8% spandex.",
      "250grm high stretch wicking finish."
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "attributes": {
      "Colour": [
        "Black"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-baselayer-top-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-baselayer-top-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Baselayer Top"
      }
    ]
  },
  {
    "id": 281505,
    "name": "Northern Outliers Seniors Arena Trackpants",
    "short": "Arena Trackpants",
    "slug": "northern-outliers-seniors-arena-trackpants",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-arena-trackpants/",
    "price": "£37.00",
    "regularPrice": "£37.00",
    "onSale": false,
    "description": [
      "Full length zip opening to mid thigh.",
      "Allows easy access whilst still wearing boots.",
      "Microfibre pants.",
      "Initials can be added for £2.50 – please note, once personalised, this product cannot be exchanged/refunded unless faulty"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "attributes": {
      "Colour": [
        "Black"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-arena-trackpants-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-arena-trackpants-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Arena Trackpants"
      }
    ]
  },
  {
    "id": 281495,
    "name": "Northern Outliers Seniors Infinity Leisure Shorts",
    "short": "Infinity Leisure Shorts",
    "slug": "northern-outliers-seniors-infinity-leisure-shorts",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-infinity-leisure-shorts/",
    "price": "£23.50",
    "regularPrice": "£23.50",
    "onSale": false,
    "description": [
      "Our Infinity range leisure shorts are made from 88% polyester / 12% lycra fabric. The stretch microfibre is lightweight and comfortable and the huge 12% lycra adds strength and stretch to the garment. It also features 2 zip side pockets and are slightly longer in length for a more fashionable look."
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "attributes": {
      "Colour": [
        "Black / Red"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-infinity-leisure-shorts-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-infinity-leisure-shorts-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Infinity Leisure Shorts"
      }
    ]
  },
  {
    "id": 281487,
    "name": "Northern Outliers Seniors Classic Hoodie",
    "short": "Classic Hoodie",
    "slug": "northern-outliers-seniors-classic-hoodie",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-classic-hoodie/",
    "price": "£27.75",
    "regularPrice": "£27.76",
    "onSale": false,
    "description": [
      "Fabric: 65% cotton / 35% polyester",
      "Weight: 310gsm",
      "Double fabric hood with self colour flat hood cords",
      "Heavyweight soft feel fabric",
      "Kangaroo pouch pocket with concealed iPod and phone pocket",
      "Ribbed cuff and hem",
      "Twin needle stitching detail",
      "Initials can be added for £2.50 – please note, once personalised, this product cannot be exchanged/refunded unless faulty"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "attributes": {
      "Colour": [
        "Black"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-classic-hoodie-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-classic-hoodie-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Classic Hoodie"
      }
    ]
  },
  {
    "id": 281476,
    "name": "Northern Outliers Seniors Cotton Tee",
    "short": "Cotton Tee",
    "slug": "northern-outliers-seniors-cotton-tee",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-cotton-tee/",
    "price": "£17.95",
    "regularPrice": "£17.95",
    "onSale": false,
    "description": [
      "100% ringspun cotton",
      "Semi fitted",
      "Taped neck and shoulders",
      "Quarter turned to eliminate centre crease",
      "Initials can be added for £2.50 – please note, once personalised, this product cannot be exchanged/refunded unless faulty"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "attributes": {
      "Colour": [
        "Black"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-cotton-tee-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-cotton-tee-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Cotton Tee"
      }
    ]
  },
  {
    "id": 281458,
    "name": "Northern Outliers Seniors Women’s Fit Infinity Midlayer",
    "short": "Women’s Fit Infinity Midlayer",
    "slug": "northern-outliers-seniors-womens-fit-infinity-midlayer",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-womens-fit-infinity-midlayer/",
    "price": "£43.00",
    "regularPrice": "£43.00",
    "onSale": false,
    "description": [
      "Our Infinity range midlayer is made from 100% softshell waffle 230gsm polyester. It is ideal for travel but is also sturdy enough for training in.",
      "The waffle effect inner layer provides good stretch to make this midlayer a perfect over garment. It also features 2 side zip pockets.",
      "Women’s fit.",
      "Initials can be added for £2.50 – please note, once personalised, this product cannot be exchanged/refunded unless faulty"
    ],
    "sizes": [
      "Size 8",
      "Size 10",
      "Size 12",
      "Size 14",
      "Size 16",
      "Size 18",
      "Size 20",
      "Size 22"
    ],
    "attributes": {
      "Colour": [
        "Black / Red"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-womens-fit-infinity-midlayer-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-womens-fit-infinity-midlayer-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Women’s Fit Infinity Midlayer"
      }
    ]
  },
  {
    "id": 281457,
    "name": "Northern Outliers Seniors Infinity Midlayer",
    "short": "Infinity Midlayer",
    "slug": "northern-outliers-seniors-infinity-midlayer",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-infinity-midlayer/",
    "price": "£43.00",
    "regularPrice": "£43.00",
    "onSale": false,
    "description": [
      "Our Infinity range midlayer is made from 100% softshell waffle 230gsm polyester. It is ideal for travel but is also sturdy enough for training in.",
      "The waffle effect inner layer provides good stretch to make this midlayer a perfect over garment. It also features 2 side zip pockets.",
      "Initials can be added for £2.50 – please note, once personalised, this product cannot be exchanged/refunded unless faulty"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "attributes": {
      "Colour": [
        "Black / Red"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-infinity-midlayer-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-infinity-midlayer-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Infinity Midlayer"
      }
    ]
  },
  {
    "id": 281447,
    "name": "Northern Outliers Seniors Infinity Rain Jacket",
    "short": "Infinity Rain Jacket",
    "slug": "northern-outliers-seniors-infinity-rain-jacket",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-infinity-rain-jacket/",
    "price": "£52.00",
    "regularPrice": "£52.00",
    "onSale": false,
    "description": [
      "Our Infinity range shower proof jacket is made from 100% polyester coated Dobby fabric. It boasts a water resistant outer coating and fully waterproof inner coating making it a perfect garment for training on damp and cold days. The jacket also features 2 zip side pockets."
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL",
      "6XL"
    ],
    "attributes": {
      "Colour": [
        "Black / Red"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-infinity-rain-jacket-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-infinity-rain-jacket-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Infinity Rain Jacket"
      }
    ]
  },
  {
    "id": 281445,
    "name": "Northern Outliers Seniors Cotton/Microfibre Towel",
    "short": "Cotton/Microfibre Towel",
    "slug": "northern-outliers-seniors-cotton-microfibre-towel",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-cotton-microfibre-towel/",
    "price": "£20.00",
    "regularPrice": "£20.00",
    "onSale": false,
    "description": [
      "PLEASE NOTE: THE LEAD TIME ON THIS PRODUCT WILL BE AROUND 3 WEEKS, DUE TO ITS BESPOKE NATURE",
      "New & improved from October ’24!",
      "70cm x 140cm, dye sublimated towel – soft, plush, and absorbent",
      "The 400gsm terry towel fabric has a unique “double-faced” construction; which is 100% recycled microfibre polyester on the print side and on the reverse side it is 100% cotton loops for water absorbency",
      "AN OPTIONAL NAME CAN BE ADDED – PLEASE NOTE: ONCE PERSONALISED THIS PRODUCT CANNOT BE RETURNED/EXCHANGED, UNLESS FAULTY"
    ],
    "sizes": [
      "One Size"
    ],
    "attributes": {
      "Colour": [
        "Black / Pink"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-cotton-microfibre-towel-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-cotton-microfibre-towel-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Cotton/Microfibre Towel"
      }
    ]
  },
  {
    "id": 281436,
    "name": "Northern Outliers Seniors Bespoke Training Tee",
    "short": "Bespoke Training Tee",
    "slug": "northern-outliers-seniors-bespoke-training-tee",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-bespoke-training-tee/",
    "price": "£31.00",
    "regularPrice": "£31.00",
    "onSale": false,
    "description": [
      "Lightweight, breathable polyester",
      "Robust stretch 215 polyester/lycra fabric",
      "Easy to wash and dry",
      "Fully Sublimated design",
      "Classic fit",
      "PLEASE NOTE: DUE TO THE BESPOKE NATURE OF THIS PRODUCT, DELIVERY WILL BE AROUND 6 WEEKS",
      "*ORDERS ARE COLLATED THROUGHOUT THE WEEK, AND SENT TO THE FACTORY TO ENTER PRODUCTION, EVERY FRIDAY MORNING"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL",
      "5XL"
    ],
    "attributes": {
      "Colour": [
        "Black / Pink"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-bespoke-training-tee-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-bespoke-training-tee-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Bespoke Training Tee"
      }
    ]
  },
  {
    "id": 281428,
    "name": "Northern Outliers Seniors Match Shorts",
    "short": "Match Shorts",
    "slug": "northern-outliers-seniors-match-shorts",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-match-shorts/",
    "price": "£24.75",
    "regularPrice": "£24.76",
    "onSale": false,
    "description": [
      "THE LEAD TIME ON THIS PRODUCT WILL BE AROUND 3 WEEKS, DUE TO ITS BESPOKE NATURE",
      "Classic fit",
      "Active 250 fabric",
      "Sublimated logos"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "attributes": {
      "Colour": [
        "Black / Pink"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-match-shorts-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-match-shorts-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Match Shorts"
      }
    ]
  },
  {
    "id": 281416,
    "name": "Northern Outliers Seniors Women’s Fit Playing Shorts",
    "short": "Women’s Fit Playing Shorts",
    "slug": "northern-outliers-seniors-womens-fit-playing-shorts",
    "permalink": "https://halbro.com/product/northern-outliers-seniors-womens-fit-playing-shorts/",
    "price": "£24.75",
    "regularPrice": "£24.76",
    "onSale": false,
    "description": [
      "DELIVERY WILL BE AROUND 3 WEEKS, DUE TO BEING BESPOKE MADE",
      "Women’s fit",
      "Two panel construction",
      "Elasticated waist with tie cord",
      "Active 250 fabric"
    ],
    "sizes": [
      "26\"",
      "28\"",
      "30\"",
      "32\"",
      "34\"",
      "36\"",
      "38\"",
      "40\"",
      "42\"",
      "44\"",
      "46\""
    ],
    "attributes": {
      "Colour": [
        "Black / Pink"
      ]
    },
    "images": [
      {
        "src": "/img/shop/northern-outliers-seniors-womens-fit-playing-shorts-1.webp",
        "sm": "/img/shop/northern-outliers-seniors-womens-fit-playing-shorts-1-sm.webp",
        "w": 1500,
        "h": 1500,
        "alt": "Northern Outliers Seniors Women’s Fit Playing Shorts"
      }
    ]
  }
];
