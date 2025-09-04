import { produce } from "immer";

export default function hanldeAddProductToCart(id, amount, location) {
    const products = JSON.parse(localStorage.getItem("cart-products")) || [];
    let newProduct = { id, value: { amount: 1, location: null } };
    if (products.length < 1) products.push(newProduct);
    else {
        let product = products.find((data) => data.id == id);

        const index = products.findIndex((data) => {
            return data.id == id;
        });
        product = product
            ? inreaseProductAmount(product, amount, location)
            : newProduct;

        index > -1
            ? products.splice(index, 1, product)
            : products.push(product);
    }
    console.log(products);
    localStorage.setItem("cart-products", JSON.stringify(products));
}

function inreaseProductAmount(product, amount, location) {
    let updatedProduct = { ...product };
    if (amount)
        updatedProduct = produce(updatedProduct, (draft) => {
            draft.value.amount = amount;
        });
    if (location)
        updatedProduct = produce(updatedProduct, (draft) => {
            draft.location = location;
        });

    return updatedProduct;
}
