export async function addItem(userCart, item) {
    userCart.push(item);
}

export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);    
    }
}

export async function removeItem(userCart, item) {
    const index = userCart.findIndex((cartItem) => cartItem.name === item.name);
    if (index === -1) {
        console.log("Item nao encontrado");
        return;
    }

    if (userCart[index].quantity  > 1) {
        userCart[index].quantity -= 1;
    } else if (userCart[index].quantity == 1) {
        userCart.splice(index, 1);
    }
}

export async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subTotal(), 0);
}

export async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} - R$${item.price} |
        ${item.quantity} unidade(s) - Subtotal: R$${item.subTotal()}`);  
    });   
}