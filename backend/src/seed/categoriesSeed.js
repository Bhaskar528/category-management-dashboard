const Category = require("../models/Category");

const categories = [
  {
    name: "Men Clothes",
    items: 24,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
  },
  {
    name: "Women Clothes",
    items: 12,
    image: "https://plus.unsplash.com/premium_photo-1689371958569-9591167a8db8"
  },
  {
    name: "Accessories",
    items: 43,
    image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg"
  },
  {
    name: "Cotton Clothes",
    items: 31,
    image: "https://plus.unsplash.com/premium_photo-1673125287363-b4e837f1215f"
  },
  {
    name: "Summer Clothes",
    items: 26,
    image: "https://plus.unsplash.com/premium_photo-1658526995638-39b190351b06"
  },
  {
    name: "Wedding Clothes",
    items: 52,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    name: "Spring Clothes",
    items: 31,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
  },
  {
    name: "Casual Wears",
    items: 26,
    image: "https://images.unsplash.com/photo-1600574691453-499962cc0611"
  },
  {
    name: "Hats",
    items: 52,
    image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c"
  }
];


const seedCategories = async (req, res) => {
  await Category.deleteMany();
  await Category.insertMany(categories);
  res.json({ message: "Categories seeded successfully" });
};

module.exports = seedCategories;