

const cart = [2, 3, 4, 5];

function doubleCart_Size(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }
    return cart;
}
const correctedCart = doubleCart_Size(cart);
console.log(correctedCart); 
