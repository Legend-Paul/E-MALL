export default function getSortProductOption(data, sortName, order) {
    return sortName
        ? sortName === "name"
            ? sortOrder(data, order, "title", "string")
            : sortOrder(data, order, "price", "number")
        : data;
}

function sortOrder(data, order, orderOption, type) {
    const sorted = [...data];
    if (!order) return sorted;

    if (type === "string") {
        sorted.sort((a, b) =>
            order === "ascending"
                ? a[orderOption].localeCompare(b[orderOption])
                : b[orderOption].localeCompare(a[orderOption])
        );
    } else {
        sorted.sort((a, b) =>
            order === "ascending"
                ? a[orderOption] - b[orderOption]
                : b[orderOption] - a[orderOption]
        );
    }
    return sorted;
}
