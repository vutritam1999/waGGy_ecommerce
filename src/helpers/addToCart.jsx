export const isProductInCart = (productId) => {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      return false; // Giỏ hàng rỗng
    }
  
    cart = JSON.parse(cart);
    // Lặp qua mỗi sản phẩm trong giỏ hàng
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        return i; // Trả về chỉ số của sản phẩm trong giỏ hàng nếu đã tồn tại
      }
    }
  
    return false; // Sản phẩm không tồn tại trong giỏ hàng
  };
  
  // Hàm để thêm sản phẩm vào giỏ hàng và cập nhật số lượng và tổng tiền nếu sản phẩm đã tồn tại
  export const addToCart = (product) => {
    const existingProductIndex = isProductInCart(product.id);
    if (existingProductIndex !== false) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart[existingProductIndex].quantity+= product.quantity; // Tăng số lượng sản phẩm lên 1
      // Tính toán và cập nhật tổng tiền của sản phẩm
      console.log(product,'product');
      cart[existingProductIndex].total += product.total;
      localStorage.setItem('cart', JSON.stringify(cart));
      return;
    }
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
  console.log(product,'asda');
    cart.push(product);
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert('Product added to cart!');
  };