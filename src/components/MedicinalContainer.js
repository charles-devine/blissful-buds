import '../styles/App.css';
import '../styles/fonts.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import Button from 'react-bootstrap/Button'; 
import medicinal from '../templates/medicinal.png';

import { Link } from 'react-router-dom'; // Import the Link component

export default function ImageContainer() {
    
    const Text = () => { 
        return ( 
            <div className="container" style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', maxWidth: '750px' }}>
                <p>At our store, we firmly believe in the healing properties of cannabis and its profound impact on overall health. Our curated selection of premium strains, edibles, concentrates, and more is carefully chosen to cater to diverse needs and preferences. Whether you're seeking relief from chronic pain, anxiety, or insomnia, or simply aiming to improve your overall quality of life, our passionate team is dedicated to providing you with a seamless and enjoyable shopping experience.</p>
            </div>
        )
    }

    const ParentComponent = () => {
        return (
          <div className="container" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
            <div className="row">
              <ExploreProductsCard
                imageUrl="https://images.unsplash.com/photo-1546030001-775bbae16502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                link="shop-flower"
              />
              <ExploreProductsCard
                imageUrl= "https://images.unsplash.com/photo-1556928045-16f7f50be0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
                link="shop-edibles"
              />
              <ExploreProductsCard
                imageUrl="https://images.unsplash.com/photo-1589844428386-06bba62381a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
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
                    View our Medicinal Products
                  </Link>
                )}
                {link === "shop-edibles" && (
                  <Link to="#" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Read our Reviews below
                  </Link>
                )}
                {link === "shop-topicals" && (
                  <Link to="/ressources" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: '#000000', border: '1px solid #000000', fontSize: '12px' }}>
                    Get Additional Ressources
                  </Link>
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
                backgroundColor: '#78C0E0',
                padding: '20px',
                marginBottom: '50px',
              }}
            >
              <div className="row">
                <div className="col-md-12">
                  <div
                    style={{
                      backgroundColor: '#78C0E0',
                      width: '100%',
                      height: '500px'
                    }}
                  >
                    <div
                      className="container"
                      style={{
                        backgroundColor: '#78C0E0',
                        padding: '20px',
                        marginBottom: '50px',
                        height: '500px'
    
                      }}
                    >
    
                      <div className="row">
                        
                            <div className="" style={{ color: '#fff', marginBottom: '20px', marginTop: '75px' }}>
                                <h3>Don't listen to us..</h3>
                            </div>
                          <div className="col-md-6" style={{ marginTop: '10px', color: '#fff', height: '550px'}}>
                            <p>"Finally I found the perfect medicinal product for my insomnia! Thanks to Blissful Buds, I now enjoy peaceful and restful nights of sleep. Their CannaMed strain has been a life-changer, and I wake up refreshed and energized every day. Highly recommended!"</p>
                            <p>Nicole, Ottawa</p>
                          </div>

                          <div className="col-md-6" style={{ marginTop: '10px', color: '#fff', height: '550px'}}>
                            <p>"As someone who has battled anxiety for years, finding the right solution seemed impossible. But their knowledgeable team guided me to the perfect cannabis product, and it has made all the difference. My anxiety has significantly decreased, and I feel calmer and more in control."</p>
                            <p>James, Toronto</p>
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
        <Text />
        <ParentComponent />
        <ImageTextContainer2 />
      </>
    );
  }