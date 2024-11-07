export async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subTotal: () => price * quantity
    }
}