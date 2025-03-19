import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#00668c] text-white py-10 min-h-[200px]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Contact Section */}
                    <div className="text-left">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-sm">123 Example Street</p>
                        <p className="text-sm">12345 City, Country</p>
                        <p className="text-sm">Email: info@example.com</p>
                        <p className="text-sm">Phone: +1 234 567 890</p>
                    </div>

                    {/* Bottom Copyright Section */}
                    <div className="text-center mt-4 md:mt-0">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;