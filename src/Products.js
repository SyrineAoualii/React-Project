import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Products() {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const searchTerm = query.get('search');

  useEffect(() => {
    const url = searchTerm
      ? `http://localhost:3000/products?q=${encodeURIComponent(searchTerm)}`
      : `http://localhost:3000/products`;

    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [searchTerm]);

  return (
    <div className="single-product-area">
      <div className="container">
        <h2>Products {searchTerm && ` - Search results for '${searchTerm}'`}</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src={`${process.env.PUBLIC_URL}/images/${product.imageName}`} alt={product.name} />
                </div>
                <h2><a href={`/product/${product.id}`}>{product.name}</a></h2>
                <div className="product-carousel-price">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
