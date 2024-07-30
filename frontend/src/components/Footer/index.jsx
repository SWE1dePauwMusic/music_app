import React from "react";
import { Row, Col, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="letter-container">
          <Col>
            <h3>Join our newsletter</h3>
            <p>We'll send you a nice instruction of using Melify.</p>
          </Col>
          <Col></Col>
          <Col className="subscribe-container">
            <Form className='d-flex'>
              <FormControl
                type="text"
                id="email"
                placeholder="Enter your email"
                className="email-input"
                aria-label="subcribe"
              />
              <Button className='sub-btn'>Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row className="infor-container">
          <Col className="product-container" sm={4}>
            <h1>Melify</h1>
            <p>
              Enjoy seamless streaming and personalized playlists with Melify.
              Join our vibrant music community today!
            </p>
          </Col>
          <Col className="infor-section">
            <ul>
            <li><h4>Product</h4></li>
              <li>Overview</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </Col>
          <Col className="infor-section">
            <ul>
            <li><h4>Company</h4></li>
              <li>About us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col className="infor-section">
            <ul>
            <li><h4>Legal</h4></li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Licenses</li>
            </ul>
          </Col>
          <Col className="infor-section">
            <ul>
            <li><h4>Resources</h4></li>
              <li>Support</li>
              <li>Q&A</li>
            </ul>
          </Col>
        </Row>
        <hr className="divider"></hr>
        <Row>
          <Col>&copy; 2024 Melify. All rights reserved</Col>
          <Col></Col>
          <Col className="media-container">
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
            <FaFacebookF className="icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
