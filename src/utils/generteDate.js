export default function generateDate(days = 0) {
    const today = new Date();
    today.setDate(today.getDate() + days);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
