export default function getFilterPriceRange(data, min, max) {
    if (max === 0 || max < min) return data.filter((d) => d.price > min);
    return data.filter((d) => d.price > min && d.price < max);
}
