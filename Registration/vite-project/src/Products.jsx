import React from 'react'
import one from "./assets/Image/one.jpg";
import two from "./assets/Image/two.jpg";
import three from "./assets/Image/three.jpg";
import four from "./assets/Image/four.jpg";
import five from "./assets/Image/five.jpg";
import six from "./assets/Image/six.jpg";


const Products = () => {
  return (
    <div>
         <section class = "trending-product" id = "trending">
        <div class = "center-text">
            <h2>Our Trending<span>Products</span></h2>
        </div>

        <div className="products">
            <div className="row">
                <img src = {one} alt = ""/>
                <div class ="product-text">
                    <h5>Sale</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
            </div>
        <div className="rating">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
        </div>
        </div>

        <div className="row">
                <img src = {two} alt = ""/>
                <div class ="product-text">
                    <h5>New</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
            </div>
        <div className="rating">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
        </div>
        </div>

        <div className="row">
                <img src = {three} alt = ""/>
                <div class ="product-text">
                    <h5>Sale</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
        </div>
        <div className="rating">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4></h4>
            <p>$99 - $129</p>
        </div>
        </div>

        <div className="row">
                <img src = {four} alt = ""/>
                <div class ="product-text">
                    <h5>Sale</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
        </div>
        <div className="rating">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
        </div>
        </div>

        <div className="row">
                <img src = {five} alt = ""/>
                <div class ="product-text">
                    <h5>Sale</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
        </div>
        <div className="ratting">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
        </div>
        </div>

        <div className="row">
                <img src = {six} alt = ""/>
                <div class ="product-text">
                    <h5>Sale</h5>
                </div>
            <div class = "heart-icon">
               <i className='bx bxs-heart'></i>
        </div>
        <div className="rating">
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star'></i>
            <i className='bx bx-star-half'></i>
        </div>

        <div class = "price">
            <h4>Half Running Set</h4>
            <p>$99 - $129</p>
        </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Products