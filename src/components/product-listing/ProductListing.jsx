import './ProductListing.css';
import React from 'react';

function ProductListing({ product }) {
    return (
        <div className="product-listing">
            <div className="product-image">
                <img
                    alt="Product listing"
                    src={product.productImage}
                />
            </div>
            <h2 className="product-name">
                {product.productName}
            </h2>
        </div>
    );
}

export default ProductListing;
