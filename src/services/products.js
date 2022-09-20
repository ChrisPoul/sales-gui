const API_URL = "http://localhost:5000/sales/products"

export async function getAllProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}