import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';

import Button from 'react-bootstrap/Button'; 
import gummies from '../templates/gummies.PNG';

export default function ImageContainer2() {
    const ParentComponent2 = () => {
      return (
        <div className="container" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
          <h3>TYPES OF CANNABIS</h3>
          <p>Unleash Your Essence, Choose Your Strain</p>
          <div className="row">
            <ExploreProductsCard
              imageUrl="https://images.unsplash.com/photo-1687211980289-ba127aa649e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80"
              link="shop-indica"
            />
            <ExploreProductsCard
              imageUrl="https://images.unsplash.com/photo-1687515621095-0ac5d2695672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
              link="shop-sativa"
            />
            <ExploreProductsCard
              imageUrl="https://images.unsplash.com/photo-1686975284549-5c079539687e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80"
              link="shop-hybrid"
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
                {link === "shop-flower" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Flower
                  </a>
                )}
                {link === "shop-edibles" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Edibles
                  </a>
                )}
                {link === "shop-topicals" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Topicals
                  </a>
                )}
                {link === "shop-indica" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Indica
                  </a>
                )}
                {link === "shop-sativa" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Sativa
                  </a>
                )}
                {link === "shop-hybrid" && (
                  <a href={link} className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Shop Hybrid
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      };
  
    const ImageTextContainer2 = () => {
      return (
        <div>
          <div
            className="container-fluid"
            style={{
              backgroundColor: '#ed989c',
              padding: '20px',
              marginBottom: '50px',
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <div
                  style={{
                    backgroundColor: '#ed989c',
                    width: '100%',
                    height: '500px'
                  }}
                >
                  <div
                    className="container"
                    style={{
                      backgroundColor: '#ed989c',
                      padding: '20px',
                      marginBottom: '50px',
                      height: '500px'
  
                    }}
                  >
  
                    <div className="row">
                      <div className="col-md-6" style={{ marginTop: '100px', color: '#fff', height: '550px' }}>
                        <h3>Gummies Galore</h3>
                        <p>Experience a journey of pure indulgence as each gummy delivers a precise dose of THC, ensuring a consistent and enjoyable experience every time. Whether you're seeking a relaxing evening unwind or an uplifting social adventure, our THC-infused gummies offer the perfect solution.</p>
                        <Button variant="primary" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', fontSize: '16px' }}>SHOP NOW</Button>
                      </div>
                      <div className="col-md-6">
                        <img
                          src={gummies}
                          alt="Image"
                          style={{
                            width: '100%',
                            objectFit: 'cover',
                            paddingRight: '20px',
                            height: '500px'
  
                          }}
                        />
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
        <ParentComponent2 />
        <ImageTextContainer2 />
      </>
    );
  }