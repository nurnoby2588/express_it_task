export async function fetchProducts() {
    const response = await fetch("/api/proxy");
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
}