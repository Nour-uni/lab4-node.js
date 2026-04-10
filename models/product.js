// In-memory data store for products
let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', stock: 15 },
    { id: 2, name: 'Smartphone', price: 699.00, category: 'Electronics', stock: 50 },
    { id: 3, name: 'Desk Chair', price: 150.00, category: 'Furniture', stock: 20 },
    { id: 4, name: 'Coffee Maker', price: 45.00, category: 'Appliances', stock: 100 },
    { id: 5, name: 'Bluetooth Speakers', price: 85.50, category: 'Electronics', stock: 35 },
    { id: 6, name: 'Running Shoes', price: 120.00, category: 'Apparel', stock: 60 },
    { id: 7, name: 'Water Bottle', price: 15.00, category: 'Accessories', stock: 200 },
    { id: 8, name: 'Backpack', price: 55.00, category: 'Accessories', stock: 75 },
    { id: 9, name: 'Wireless Mouse', price: 25.00, category: 'Electronics', stock: 120 },
    { id: 10, name: 'Monitor', price: 299.99, category: 'Electronics', stock: 40 },
    { id: 11, name: 'Keyboard', price: 49.99, category: 'Electronics', stock: 80 },
    { id: 12, name: 'Standing Desk', price: 350.00, category: 'Furniture', stock: 10 },
];

let nextId = 13;

module.exports = {
    getAll: () => products,
    getById: (id) => products.find(p => p.id === parseInt(id)),
    create: (product) => {
        const newProduct = { id: nextId++, ...product };
        products.push(newProduct);
        return newProduct;
    },
    update: (id, updatedData) => {
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index === -1) return null;
        
        products[index] = { ...products[index], ...updatedData, id: parseInt(id) };
        return products[index];
    },
    delete: (id) => {
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index === -1) return null;
        
        const deleted = products[index];
        products = products.filter(p => p.id !== parseInt(id));
        return deleted;
    }
};
