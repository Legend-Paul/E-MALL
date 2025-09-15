import { produce } from "immer";

export default function hanldeAddProductToCart(data, amount, location) {
    console.log(data.id);
    const products = JSON.parse(localStorage.getItem("cart-products")) || [];
    let newProduct = {
        id: data.id,
        value: {
            amount: amount ? amount : 1,
            image: data.image,
            title: data.title,
            price: data.price,
            location: null,
        },
    };
    if (products.length < 1) products.push(newProduct);
    else {
        let product = products.find((d) => d.id == data.id);
        console.log(product);

        const index = products.findIndex((d) => {
            return d.id == data.id;
        });
        product = product
            ? inreaseProductAmount(product, amount, location)
            : newProduct;

        index > -1
            ? products.splice(index, 1, product)
            : products.push(product);
    }
    localStorage.setItem("cart-products", JSON.stringify(products));
}

function inreaseProductAmount(product, amount, location) {
    let updatedProduct = { ...product };
    console.log(updatedProduct);

    if (amount)
        updatedProduct = produce(updatedProduct, (draft) => {
            draft.value.amount = amount;
        });
    if (location)
        updatedProduct = produce(updatedProduct, (draft) => {
            draft.value.location = location;
        });

    return updatedProduct;
}

export function handleDeleteProductFromCart(data) {
    const products = JSON.parse(localStorage.getItem("cart-products")) || [];
    const index = products.findIndex((d) => {
        return d.id == data.id;
    });

    products.splice(index, 1);
    products.length > 0
        ? localStorage.setItem("cart-products", JSON.stringify(products))
        : localStorage.removeItem("cart-products");
}
