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

export async function getProduct(productId) {
    const response = await fetch(API_URL + "/" + productId)
    const data = await response.json()

    return data
}

export async function addProduct(productData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(productData)
    });
    const data = await response.json();

    return data;
}

export async function updateProduct(productId, productData) {
    const response = await fetch(API_URL + "/" + productId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(productData)
    });
    const data = await response.json();

    return data;
}

export async function deleteProduct(productId) {
    const response = await fetch(
        API_URL + "/" + productId,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        }
    )
    const data = await response.json()

    return data
}