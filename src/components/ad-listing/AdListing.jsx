import './AdListing.css';
import React from 'react';

function AdListing({ ad }) {
    return (
        <div className="ad-listing">
            <h2 className="ad-headline">
                {ad.headline}
            </h2>
            <div className="ad-image">
                <img alt="Ad Listing" src={ad.imageUrl} />
            </div>
        </div>
    );
}

export default AdListing;
