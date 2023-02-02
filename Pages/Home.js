import React from 'react';
import Slider from '../Components/Slider';
import ProductCard from '../Components/Cards/ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function Home() {
  const { products = [] } = useSelector((state) => state.product);

  return (
    <section>
      {/* Navigation
      Slider
      Listings */}
      <Slider />
      <div id="product-listing-container" className="container mt-3">
        <Row>
          {products.length > 0 ? (
            products.map((d, i) => (
              <Col key={`product-card-pizza-${i}`} xs={6} sm={6} md={4} lg={3}>
                <ProductCard key={i} data={d} />
              </Col>
            ))
          ) : (
            <p>Pizza is not available today</p>
          )}
        </Row>
      </div>
    </section>
  );
}

export default Home;
