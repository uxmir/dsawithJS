function cartDiscount() {
  const cart = [
    { name: "Shirt", price: 300, quantity: 2 },
    { name: "Pants", price: 500, quantity: 1 },
    { name: "Socks", price: 50, quantity: 4 },
  ];

  const priceArr = [];
  cart.forEach((a) => {
    const b = a.price * a.quantity;
    priceArr.push(b);
  });
  const a = priceArr.reduce((a, b) => {
    return a + b;
  }, 0);

  const totalPrice = a;
  console.log(`Toatlprice is ${totalPrice}`);
  if (totalPrice >= 1000) {
    const discountPrice = (1300 * 10) / 100;
    const totalDiscount = totalPrice - discountPrice;
    console.log(`Discountprice is ${totalDiscount}`);
  }
}
cartDiscount();
