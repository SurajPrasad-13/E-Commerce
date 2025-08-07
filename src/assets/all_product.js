import p1_img from "../assets/women1.jpg";
import p2_img from "../assets/women2.jpg";
import p3_img from "../assets/women3.jpg";
import p4_img from "../assets/women4.webp";
import p5_img from "../assets/men1.webp";
import p6_img from "../assets/men2.jpg";
import p7_img from "../assets/men3.webp";
import p8_img from "../assets/men4.jfif";
import p9_img from "../assets/men5.webp";
import p10_img from "../assets/women5.webp";
import p11_img from "../assets/men6.webp";
import p12_img from "../assets/women6.webp";
import p13_img from "../assets/men7.jpg";
import p14_img from "../assets/women7.webp";
import p15_img from "../assets/men8.jpg";
import p16_img from "../assets/women8.webp";
import p17_img from "../assets/women9.webp";
import p18_img from "../assets/women10.webp";
import p19_img from "../assets/women10.avif";
import p20_img from "../assets/women12.avif";
import p21_img from "../assets/kid1.jpg";
import p23_img from "../assets/kid2.jfif";
import p25_img from "../assets/kid3.jfif";
import p27_img from "../assets/kid4.webp";
import p29_img from "../assets/kid5.jfif";
import p31_img from "../assets/kid6.jfif";
import p33_img from "../assets/kid7.webp";
import p35_img from "../assets/kid8.jfif";
// 22 24 26 28 30 32 34
let all_product = [
  {
    id: 1,
    name: "Long Kurta",
    category: "women",
    image: p1_img,
    new_price: 709.0,
    old_price: 1109.9,
  },
  {
    id: 2,
    name: "Saree",
    category: "women",
    image: p2_img,
    new_price: 609.0,
    old_price: 909.9,
  },
  {
    id: 3,
    name: "Saree",
    category: "women",
    image: p3_img,
    new_price: 759.0,
    old_price: 1290.0,
  },
  {
    id: 4,
    name: "Leggings",
    category: "women",
    image: p4_img,
    new_price: 909.0,
    old_price: 1490.0,
  },
  {
    id: 5,
    name: "Brown Shirt",
    category: "men",
    image: p5_img,
    new_price: 459.0,
    old_price: 709.0,
  },
  {
    id: 6,
    name: "Formal Dress",
    category: "men",
    image: p6_img,
    new_price: 859.0,
    old_price: 1390.0,
  },
  {
    id: 7,
    name: "Casual Dress",
    category: "men",
    image: p7_img,
    new_price: 959.0,
    old_price: 1590.0,
  },
  {
    id: 8,
    name: "Cargo Pants",
    category: "men",
    image: p8_img,
    new_price: 559.0,
    old_price: 1090.0,
  },
  {
    id: 9,
    name: "Sleeve less Jacket",
    category: "men",
    image: p9_img,
    new_price: 709.0,
    old_price: 1190.0,
  },
  {
    id: 10,
    name: "Jumpsuit",
    category: "women",
    image: p10_img,
    new_price: 889.0,
    old_price: 1395.0,
  },
  {
    id: 11,
    name: "Sweater",
    category: "men",
    image: p11_img,
    new_price: 929.0,
    old_price: 1495.0,
  },
  {
    id: 12,
    name: "Gown",
    category: "women",
    image: p12_img,
    new_price: 999.0,
    old_price: 1690.0,
  },
  {
    id: 13,
    name: "Long Jacket",
    category: "men",
    image: p13_img,
    new_price: 409.0,
    old_price: 659.0,
  },
  {
    id: 14,
    name: "Top",
    category: "women",
    image: p14_img,
    new_price: 529.0,
    old_price: 859.0,
  },
  {
    id: 15,
    name: "White T-Shirt",
    category: "men",
    image: p15_img,
    new_price: 789.0,
    old_price: 1195.0,
  },
  {
    id: 16,
    name: "Skirt",
    category: "women",
    image: p16_img,
    new_price: 739.0,
    old_price: 1190.0,
  },

  {
    id: 21,
    name: "Denim Shirt",
    category: "kid",
    image: p21_img,
    new_price: 859.0,
    old_price: 1490.0,
  },

  {
    id: 23,
    name: "Cargo Pants",
    category: "kid",
    image: p23_img,
    new_price: 889.0,
    old_price: 1390.0,
  },

  {
    id: 25,
    name: "Trousers",
    category: "kid",
    image: p25_img,
    new_price: 769.0,
    old_price: 1290.0,
  },
  {
    id: 27,
    name: "Tank Top",
    category: "kid",
    image: p27_img,
    new_price: 499.0,
    old_price: 809.0,
  },

  {
    id: 29,
    name: "Formal Pants",
    category: "kid",
    image: p29_img,
    new_price: 989.0,
    old_price: 1690.0,
  },

  {
    id: 31,
    name: "Leather Jacket",
    category: "kid",
    image: p31_img,
    new_price: 1590.0,
    old_price: 2590.0,
  },

  {
    id: 33,
    name: "Shorts and T-Shirt",
    category: "kid",
    image: p33_img,
    new_price: 559.0,
    old_price: 909.0,
  },

  {
    id: 35,
    name: "Casual Blazer",
    category: "kid",
    image: p35_img,
    new_price: 1095.0,
    old_price: 1790.0,
  },
  {
    id: 36,
    name: "Blue Gown",
    category: "women",
    image: p17_img,
    new_price: 1209,
    old_price: 1909.9,
  },
  {
    id: 37,
    name: "Brown dress",
    category: "women",
    image: p18_img,
    new_price: 1509,
    old_price: 2409.9,
  },
  {
    id: 38,
    name: "Gym Leggings",
    category: "women",
    image: p19_img,
    new_price: 709,
    old_price: 1109.9,
  },
  {
    id: 39,
    name: "Pink Gown",
    category: "women",
    image: p20_img,
    new_price: 1609,
    old_price: 2209.9,
  },
];

export default all_product;
