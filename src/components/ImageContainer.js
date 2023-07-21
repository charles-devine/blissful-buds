import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import Button from 'react-bootstrap/Button'; 
import edibles from '../templates/edibles.PNG';

import { Link } from 'react-router-dom'; // Import the Link component

export default function ImageContainer() {

    const ParentComponent = () => {
        return (
          <div className="container" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
            <h3>SHOP LOCAL</h3>
            <p>Prep for the long weekend with our top-selling products</p>
            <div className="row">
              <ExploreProductsCard
                imageUrl="https://images.unsplash.com/photo-1612995923001-27d03779d023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                link="shop-flower"
              />
              <ExploreProductsCard
                imageUrl={edibles}
                link="shop-edibles"
              />
              <ExploreProductsCard
                imageUrl="https://cdn.shopify.com/s/files/1/2636/1928/files/What-Are-Topicals.jpg?v=1601490633"
                link="shop-topicals"
              />
            </div>
          </div>
        );
      };
     
      const ExploreProductsCard = ({ title, imageUrl, link }) => {
        return (
          <div className="col-md-4">
            <div className="card border-0">
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={title}
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                />
              </div>
              <div className="card-body">
                {/* Replace the <a> tags with Link components */}
                {link === "shop-flower" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Flower
                  </Link>
                )}
                {link === "shop-edibles" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Edibles
                  </Link>
                )}
                {link === "shop-topicals" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Topicals
                  </Link>
                )}
                {link === "shop-indica" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Indica
                  </Link>
                )}
                {link === "shop-sativa" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Sativa
                  </Link>
                )}
                {link === "shop-hybrid" && (
                  <Link to="/products" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Hybrid
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      };
      
  
      const ImageTextContainer = () => {
        return (
          <div>
            <div
              className="container-fluid"
              style={{
                backgroundColor: '#add1cf',
                padding: '20px',
                marginBottom: '50px',
              }}
            >
              <div className="row">
                <div className="col-md-12">
                  <div
                    style={{
                      backgroundColor: '#add1cf',
                      width: '100%',
                      height: '500px'
                    }}
                  >
                    <div
                      className="container"
                      style={{
                        backgroundColor: '#add1cf',
                        marginBottom: '50px',
                        height: '500px',
                        overflow: 'hidden'
      
                      }}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="https://lightshade.com/wp-content/uploads/2020/10/cannabis-vapes.jpg"
                            alt="Image"
                            style={{
                              width: '100%',
                              objectFit: 'cover',
                              height: '100%',
                              marginTop: '0px',
                              position: 'relative',
                              top: '-5%',
                            }}
                          />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '100px', color: '#fff', height: '550px' }}>
                          <h3>Attention vape enthusiasts!</h3>
                          <p>Discover the ultimate vaping experience with Evolab Vape Products! We're thrilled to present you with a line of top-notch vape products that will take your vaping game to a whole new level. Here's why you need to get your hands on our Evolab vapes.</p>
                          <Link to='/products'>
                            <Button variant="primary" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', fontSize: '16px' }}>SHOP NOW</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };

    return (
      <>
        <ParentComponent />
        <ImageTextContainer />
      </>
    );
  }