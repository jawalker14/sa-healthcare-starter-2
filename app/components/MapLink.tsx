import React from 'react';

const MapLink: React.FC<{ address: string }> = ({ address }) => {
    const handleClick = () => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center justify-center p-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            View on Map
        </button>
    );
};

export default MapLink;