import { createItem } from "./service/item.js";
import * as cartService from "./service/cart.js";

const myCart = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Ferrari HotWheels", 29.99, 1);
const item2 = await createItem("Lamborghini HotWheels", 39.99, 2);
const item3 = await createItem("Porsche HotWheels", 49.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item2.name)
await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);

console.log(`Shopee total cart value is: R$${await cartService.calculateTotal(myCart)}`);
