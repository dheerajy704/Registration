import React from "react";
import logo from "./assets/Image/logo.png";

const Footer = () => {
  return (
    <div>
      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <img src={logo} alt="" />
            <p>
              7 block Koramangla ,<br /> Bengaluru{" "}
            </p>
            <p>Dheerajkumar@techis.io</p>

            <div className="social-icon">
              <a href="#">
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="#">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="second-info">
            <h4>Support</h4>
            <p>Contact us</p>
            <p>About page</p>
            <p>Size guide</p>
            <p>Shopping & Returns</p>
            <p>Privacy</p>
          </div>

          <div className="third-info">
            <h4>Shop</h4>
            <p>Men's Shopping</p>
            <p>Women's Shopping</p>
            <p>Kid's Shopping</p>
            <p>Furniture</p>
            <p>Discount</p>
          </div>

          <div className="fourth-info">
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Affiliate</p>
            <p>Login</p>
          </div>

          <div className="five">
            <h4>Subscribe</h4>
            <p>
              Receive Updates, Hot Deals , Discounts Sent Straight In Your Inbox
              Daily.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              alias!
            </p>
            <p />
            <p>
              Receive Updates, Hot Deals , Discounts Sent Straight In Your Inbox
              Daily.
            </p>
          </div>
        </div>
      </section>
      <div className="end-text">
        <p>Copyright @ 2022. All Rights Reserved , Designed By Dheeraj.</p>
      </div>
    </div>
  );
};

export default Footer;
