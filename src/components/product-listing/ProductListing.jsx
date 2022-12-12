import './ProductListing.css';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductListing({ product }) {
    const navigate = useNavigate();

    const handleClick = useCallback((mouseEvent) => {
        navigate(`products/${product.id}`);
    }, [navigate, product.id]);

    return (
        <div className="product-listing" onClick={handleClick}>
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
