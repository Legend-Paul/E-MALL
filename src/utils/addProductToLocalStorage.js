import { produce } from "immer";
import generateDate from "./generteDate";

export default function hanldeAddProductToCart(
    data,
    amount,
    location = "Nairobi"
) {
    const products = JSON.parse(localStorage.getItem("cart-products")) || [];
    let newProduct = {
        id: data.id,
        value: {
            amount: amount ? amount : 1,
            image: data.image,
            title: data.title,
            price: data.price,
            location: location,
            deliveryDate: generateDate(4),
        },
    };
    if (products.length < 1) products.push(newProduct);
    else {
        let product = products.find((d) => d.id == data.id);

        const index = products.findIndex((d) => {
            return d.id == data.id;
        });
        product = product
            ? inreaseProductAmount(product, amount, location)
            : newProduct;

        index > -1
            ? products.splice(index, 1, product)
            : products.push(product);
        console.log(product);
    }

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

export function calculateTotalPrice(products) {
    if (!products || !Array.isArray(products)) return 0;
    const total = products.reduce(
        (acc, curr) =>
            acc + (curr?.value?.price || 0) * (curr?.value?.amount || 1),
        0
    );
    return Number(total.toFixed(2));
}
