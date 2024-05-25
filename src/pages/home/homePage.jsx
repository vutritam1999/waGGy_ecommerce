import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
// import images from '../../helpers/imageHelper'
import logo from '../../assets/images/logo.png';
import banner1 from '../../assets/images/banner/banner-1.jpg';
import Footer from '../../components/footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToCart } from '../../helpers/addToCart';
import Woocommerce from '../../services/axiosConfig';

function HomePage() {
    const [product, setProduct] = useState([])
    const [categories, setCategories] = useState([])
    const fetchProduct =async()=>{
        let a = await Woocommerce.getItems('/wc/v3/products')
        let b = await Woocommerce.getItems('/wc/v3/products/categories')
        console.log(b,'aaaaaa');
        if(a.status === 200 && b.status ===200) {
            setProduct(a.data) 
            setCategories(b.data)
        }     
     
  }
    useEffect(()=>{
        fetchProduct()
    },[])

    const handleAddToCart = (ele) => {
        // Gọi hàm addToCart để thêm sản phẩm vào giỏ hàng và lưu vào Local Storage
        addToCart(ele);
    
        // Thông báo cho người dùng biết rằng sản phẩm đã được thêm vào giỏ hàng thành công
        alert('Product added to cart!');
      };
   
  return (
    <div>
            <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart" /> <span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-bag" /> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>$150.00</span>
            </div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li>
                  <a href="#">Spanis</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="/login">
                <i className="fa fa-user" /> Login
              </a>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./shop-grid.html">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li>
                    <a href="./shop-details.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="./shoping-cart.html">Shoping Cart</a>
                  </li>
                  <li>
                    <a href="./checkout.html">Check Out</a>
                  </li>
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#">
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope" /> hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        <Header/>
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="hero__categories">
            <div className="hero__categories__all">
              <i className="fa fa-bars" />
              <span>All departments</span>
            </div>
            <ul>
              <li><a href="#">Fresh Meat</a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">Fruit &amp; Nut Gifts</a></li>
              <li><a href="#">Fresh Berries</a></li>
              <li><a href="#">Ocean Foods</a></li>
              <li><a href="#">Butter &amp; Eggs</a></li>
              <li><a href="#">Fastfood</a></li>
              <li><a href="#">Fresh Onion</a></li>
              <li><a href="#">Papayaya &amp; Crisps</a></li>
              <li><a href="#">Oatmeal</a></li>
              <li><a href="#">Fresh Bananas</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="hero__search">
            <div className="hero__search__form">
              <form action="#">
                <div className="hero__search__categories">
                  All Categories
                  <span className="arrow_carrot-down" />
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" className="site-btn">SEARCH</button>
              </form>
            </div>
            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
          <div className="hero__item set-bg" data-setbg={banner1}>
            <img src={banner1} />
            <div className="hero__text">
              <span>FRUIT FRESH</span>
              <h2>Vegetable <br />100% Organic</h2>
              <p>Free Pickup and Delivery Available</p>
              <a href="#" className="primary-btn">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="categories">
    <div className="container">
      <div className="row">
        <div className="categories__slider owl-carousel">
          <div className="col-lg-3">
            <div className="categories__item set-bg">
                <img src='img/categories/cat-1.jpg' />
              <h5><a href="#">Fresh Fruit</a></h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
              <h5><a href="#">Dried Fruit</a></h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
              <h5><a href="#">Vegetables</a></h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
              <h5><a href="#">drink fruits</a></h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
              <h5><a href="#">drink fruits</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="featured spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Featured Product</h2>
          </div>
          <div className="featured__controls">
            <ul>
              <li className="active" data-filter="*">All</li>
                {
                    categories?.map((ele)=>{
                     return  <li data-filter={`.${ele?.slug}`}>{ele?.name}</li>
                    })
                }
            </ul>
          </div>
        </div>
      </div>
      <div className="row featured__filter">
        {
            product?.map((ele,index)=>{
                return   <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                
                  <div className="featured__item__pic set-bg" data-setbg={banner1}>
                  <Link to={`/products/${ele?.id}`}>
                    <img src={ele?.images[0]?.src} />
                  </Link>

                    <ul className="featured__item__pic__hover">
                      <li><a href="#"><i className="fa fa-heart" /></a></li>
                      <li><a href="#"><i className="fa fa-retweet" /></a></li>
                      <li onClick={()=>handleAddToCart(ele)}><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="#">{ele?.images[0]?.name}</a></h6>
                    <h5>{ele?.price}đ</h5>
                  </div>
                </div>
              </div>
            })
        }
      
      
      </div>
    </div>
  </section>
  <div className="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="banner__pic">
            <img src={banner1} alt />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="banner__pic">
            <img src={banner1} alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="latest-product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Latest Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Top Rated Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Review Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-1.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-2.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="img/latest-product/lp-3.jpg" alt />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="from-blog spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title from-blog__title">
            <h2>From The Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-1.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                <li><i className="fa fa-comment-o" /> 5</li>
              </ul>
              <h5><a href="#">Cooking tips make cooking simple</a></h5>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-2.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                <li><i className="fa fa-comment-o" /> 5</li>
              </ul>
              <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-3.jpg" alt />
            </div>
            <div className="blog__item__text">
              <ul>
                <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                <li><i className="fa fa-comment-o" /> 5</li>
              </ul>
              <h5><a href="#">Visit the clean farm in the US</a></h5>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  )
}

export default HomePage