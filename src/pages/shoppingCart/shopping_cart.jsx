import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Header_normal from "../../components/header_normal";

function Shopping_Cart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart,'ádasdas');
  return (
    <div>
      <Header />
      <Header_normal/>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                  {cart.map((product, index) => (
                    <tr key={index}>
                      <td className="shoping__cart__item">
                        <img src={product?.images ?product?.images[0]?.src: ''} alt />
                        <h5>{product?.title?.rendered}</h5>
                      </td>
                      <td className="shoping__cart__price">$55.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" defaultValue={1} value={product?.quantity} />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">${product?.total}</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close" />
                      </td>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading" />
                  Upadate Cart
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <a href="/check-out" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shopping_Cart;
