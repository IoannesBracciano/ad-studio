import React from 'react';
import AdListing from '../../components/ad-listing';
import InlineList from '../../components/inline-list';

const mockAds = [
    {
        id: '1',
        headline: 'Ad Headline',
        imageUrl: '',
        productId: '1',
        textContent: 'Ad text content',
    },
]

function ReadView() {
    return (
        <div className="view-container">
            <InlineList items={mockAds} keyProp="id">
                {(ad) => <AdListing ad={ad} />}
            </InlineList>
        </div>
    );
}

export default ReadView;
