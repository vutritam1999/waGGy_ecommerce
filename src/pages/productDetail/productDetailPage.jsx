import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../../helpers/addToCart";
import Woocommerce from "../../services/axiosConfig";
import useLoading from "../../utils/loadingUtil";

function ProductDetailPage() {
  const id = useParams()
  const [productById, setProductById] = useState({})
  const [quantity, setQuantity] = useState(1); // State lưu số lượng sản phẩm
  const [price, setPrice] = useState(0); // State lưu giá sản phẩm
  const priceRef = useRef(null); // Ref để tham chiếu đến phần tử HTML có class là "product__details__price"


  // Hàm để cập nhật tổng tiền dựa trên số lượng sản phẩm
  const updateTotalPrice = (productId) => {
    console.log(quantity,'123');
      addToCart({...productId, total: price, quantity:quantity});
    // Lưu lại danh sách sản phẩm đã được cập nhật vào Local Storage
   
  };

  // Hàm xử lý khi người dùng thay đổi số lượng sản phẩm
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10); // Chuyển đổi giá trị thành số nguyên
    const totalPrice = price * newQuantity;
    console.log(totalPrice,'totalPrice');
    setPrice(totalPrice);
    setQuantity(newQuantity);
  };

  useEffect(()=>{
    const fetchProduct = async(id)=>{
      let a = await Woocommerce.getProductByID(id?.productId)
      if(a.status === 200) {
        setProductById(a.data) 
      }       
    }
    fetchProduct(id)
  },[id?.productId])
  const { setLoadingState, isLoading } = useLoading();
  useEffect(()=>{
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  },[])
  console.log(isLoading(),'  isLoading()');
  return (
    <>
    {
      !isLoading() ?  <div>
      {" "}
      <Header />{" "}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={ !!productById && productById?.images ? productById?.images[0]?.src: ''}
                    alt
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <img
                    data-imgbigurl="img/product/details/product-details-2.jpg"
                    src="img/product/details/thumb-1.jpg"
                    alt
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-3.jpg"
                    src="img/product/details/thumb-2.jpg"
                    alt
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-5.jpg"
                    src="img/product/details/thumb-3.jpg"
                    alt
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-4.jpg"
                    src="img/product/details/thumb-4.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text" style={{textAlign:'left'}}>
                <h3>{productById?.name}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price"  ref={priceRef}>{price|| productById?.price}đ</div>
                <p>
                  {productById?.uagb_excerpt}
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="number"  value={quantity} onChange={handleQuantityChange}  defaultValue={1} />
                    </div>
                  </div>
                </div>
                <button style={{border:'none'}} className="primary-btn" onClick={()=>updateTotalPrice(productById)}>
                  ADD TO CARD
                </button>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt" />
                </a>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>0.5 kg</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {
                        <div dangerouslySetInnerHTML={{ __html: productById?.excerpt?.rendered }}>

                        </div>
                      }
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {
                        <div dangerouslySetInnerHTML={{ __html: productById?.excerpt?.rendered }}>

                        </div>
                      }
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      {
                        <div dangerouslySetInnerHTML={{ __html: productById?.excerpt?.rendered }}>

                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
      {/* Related Product Section Begin */}
      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"

                >
                  <img src={productById?.uagb_featured_image_src?.full[0]} />
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-2.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-3.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-7.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>: <p>Loading...</p>
    }

    </>
    
  );
}

export default ProductDetailPage;
