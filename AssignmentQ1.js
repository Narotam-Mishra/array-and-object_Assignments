
/*

In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
1).     add 'Meat' in the beginning of your shopping cart if it has not been already added
2).     add Sugar at the end of your shopping cart if it has not been already added
3).     remove 'Honey' if you are allergic to honey
4).     modify Tea to 'Green Tea'

*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' in the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if it is allergic
const allergicToHoney = true; // Set allergicToHoney to true
if (allergicToHoney) {
    const indexToRemove = shoppingCart.indexOf('Honey');
    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
    }
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

// Display the updated shopping cart
console.log(shoppingCart);
