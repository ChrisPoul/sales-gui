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

export async function addProduct(productData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(productData)
    });
    const data = await response.json()
    return data;
}