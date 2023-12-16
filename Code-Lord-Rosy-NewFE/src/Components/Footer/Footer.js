import React from 'react';
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bs">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-brand animated fadeInLeft">
            <h2>
              <span className="code-part">Code</span>
              <span className="lord-part">Learn</span>
            </h2>
            <p>CodeLearn - Code your dreams.</p>
            <p>© 2023 - All Rights Reserved</p>
          </div>
          <div className="col-md-3 footer-social animated fadeInDown">
            <h4>Truy cập nhanh</h4>
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/categories">Danh mục</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-social animated fadeInDown">
            <h4>Về chúng tôi</h4>
            <ul>
              <li>
              <a href="https://www.facebook.com/huy.hoangvo03/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
              </li>
              <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-ns animated fadeInRight">
            <h4>Liên hệ</h4>
            <p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your email..."
                />
                <Button className="Send">
                  <div className='buttontext'>Send</div>
                </Button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
