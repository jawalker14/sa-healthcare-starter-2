import React from 'react';

const ConsentNotice: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg">
            <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            </p>
            <div className="mt-2">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    I consent to the use of my data.
                </label>
            </div>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Accept
            </button>
        </div>
    );
};

export default ConsentNotice;