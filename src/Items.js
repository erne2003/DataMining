// Items.js
class Item {
  constructor(name, price, image, category) {
    this.name = name;      // abbreviated to fit one line
    this.price = price;
    this.image = image;
    this.quantity = 0;
    this.category = category;
  }
}

const itemList = [
  new Item("Vanilla Ice Cream", 4.99, "/Assets/076326-600x600-A.avif",       "Frozen Foods"),
  new Item("Stouffer's Lasagna", 6.99, "/Assets/Stouffer's Frozen Lasagna.avif","Frozen Foods"),

  new Item("Clorox Wipes",      6.49, "/Assets/Clorox Disinfecting Wipes.jpg","Household"),
  new Item("Paper Towels",      2.99, "/Assets/Paper Towel.avif",             "Household"),

  new Item("Colgate Paste",     2.99, "/Assets/Colgate Total Toothpaste.avif","Health"),
  new Item("Dove Body Wash",    5.99, "/Assets/Dove Sensitive Skin Body Wash.avif","Health"),

  new Item("Strawberries",      3.99, "/Assets/Fresh Strawberries.avif",      "Produce"),
  new Item("Avocados",          1.50, "/Assets/Organic Avocados.avif",         "Produce"),

  new Item("Sourdough Bread",   3.69, "/Assets/Publix Bakery Sourdough Bread.avif","Bakery"),
  new Item("Chip Cookies",      4.49, "/Assets/Publix Bakery Chocolate Chip Cookies.jpg","Bakery"),

  new Item("Chicken Tenders",   7.99, "/Assets/Publix Chicken Tenderloins.avif","Meat & Seafood"),
  new Item("Salmon Fillets",    9.99, "/Assets/Publix Fresh Salmon Fillets.avif","Meat & Seafood"),

  new Item("Broccoli Florets",  2.49, "/Assets/Publix Frozen Broccoli Florets.avif","Produce"),
  new Item("Eggs",              3.79, "/Assets/Publix Grade A Cage Free Eggs.avif","Dairy"),

  new Item("Organic Milk",      3.49, "/Assets/Publix GreenWise Organic Milk.avif","Dairy"),
  new Item("Organic Pasta",     2.99, "/Assets/Publix GreenWise Organic Pasta.avif","Grocery"),

  new Item("Pretzel Crisps",    3.29, "/Assets/Publix Pretzel Crisps.avif",     "Snacks"),
  new Item("Reese Cookies",     4.99, "/Assets/Publix Chocolate Chip Cookies.avif","Snacks"),

  new Item("Orange Juice",      4.29, "/Assets/Tropicana Light Orange Juice.avif","Beverages"),
  new Item("VitaminWater",      1.89, "/Assets/Vitaminwater Zero Sugar.avif",   "Beverages"),
];

export { itemList, Item };
export default function Items() { return null; }
