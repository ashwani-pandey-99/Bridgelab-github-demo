// product.js
function handleProduct(req, res, query) {

    const name = query.name;
    const price = Number(query.price);
    const discount = Number(query.discount);

    const finalPrice = price - (price * discount / 100);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h2>Product: ${name}</h2>
        <p>Price: ₹${price}</p>
        <p>Discount: ${discount}%</p>
        <p>Final Price: ₹${finalPrice}</p>
    `);
}

module.exports = handleProduct;
