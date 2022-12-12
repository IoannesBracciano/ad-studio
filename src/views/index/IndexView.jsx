import './IndexView.css';
import React from 'react';
import InlineList from '../../components/inline-list';
import ProductListing from '../../components/product-listing';

const mockProducts = [
    {  
      "id": 1,
      "productName": "Good ol' Dumbbells",
      "productDescription": "This equipment helps you perform joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility",
      "productImage": "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
      "price": 14.50
    },
    {
      "id": 2,
      "productName": "Evergrip Jump Rope",
      "productDescription": "Did you know that for an average-sized person, jumping rope might even burn more than 10 calories a minute. In just 30 minute jump rope sessions a day, you can build the figure you want. Jumping rope also helps with:\n- tone your calves.\n- tighten your core.\n- improve your lung capacity.\n- build stamina.",
      "productImage": "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
      "price": 3
    },
    {
      "id": 3,
      "productName": "Durable Resistance band",
      "productDescription": "Rubbery, elastic bands that you can use to strengthen your muscles at home. Resistance training is any type of exercise that uses resistance or weight to build strength in your muscles. Working out with resistance bands is one option for resistance training that allows you to work out at home using just one piece of equipment.",
      "productImage": "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
      "price": 25.30
    },
]

function IndexView() {
    return (
        <div className="view-container">
            <InlineList items={mockProducts} keyProp='id'>
                {(product) => <ProductListing product={product} />}
            </InlineList>
        </div>
    );
}

export default IndexView;
