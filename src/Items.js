import React from 'react';
import './Items.css';


function Items() {

class Item{
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
const items = [
  new Item("Vanilla Ice Cream", 4.99, "/Assets/076326-600x600-A.avif"),
  new Item("Clorox Wipes", 6.49, "/Assets/Clorox Disinfecting Wipes.jpg"),
  new Item("Tooth Paste", 2.99, "/Assets/Colgate Total Toothpaste.avif"),
  new Item("Dove Body Wash", 5.99, "/Assets/Dove Sensitive Skin Body Wash.avif"),
  new Item("Strawberries", 3.99, "/Assets/Fresh Strawberries.avif"),
  new Item("Avocadoes", 1.50, "/Assets/Organic Avocados.avif"),
  new Item("Bounty Paper", 6.99, "/Assets/Paper Towel.avif"),
  new Item("Chocolate Chips", 4.49, "/Assets/Publix Bakery Chocolate Chip Cookies.jpg"),
  new Item("Sourdough", 3.69, "/Assets/Publix Bakery Sourdough Bread.avif"),
  new Item("Chicken Breast", 7.99, "/Assets/Publix Chicken Tenderloins.avif"),
  new Item("Reese Cookies", 4.99, "/Assets/Publix Chocolate Chip Cookies.avif"),
  new Item("Salmon", 9.99, "/Assets/Publix Fresh Salmon Fillets.avif"),
  new Item("Broccoli", 2.49, "/Assets/Publix Frozen Broccoli Florets.avif"),
  new Item("Organic Eggs", 3.79, "/Assets/Publix Grade A Cage Free Eggs.avif"),
  new Item("Milk", 3.49, "/Assets/Publix GreenWise Organic Milk.avif"),
  new Item("Penne Pasta", 2.99, "/Assets/Publix GreenWise Organic Pasta.avif"),
  new Item("Pretzel Chips", 3.29, "/Assets/Publix Pretzel Crisps.avif"),
  new Item("Lasagna", 6.99, "/Assets/Stouffer's Frozen Lasagna.avif"),
  new Item("Orange Juice", 4.29, "/Assets/Tropicana Light Orange Juice.avif"),
  new Item("Vitamin water", 1.89, "/Assets/Vitaminwater Zero Sugar.avif"),
];



  return (
    <div>

    </div>
  );
}

export default Items;