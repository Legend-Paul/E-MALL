export default function getFilterPriceRange(data, min, max) {
    let filtered = data;
    if (max) filtered = data.filter((d) => d.price < Number(max) + 0.001);
    return min ? filtered.filter((d) => d.price > min - 0.001) : filtered;
}
