import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#00668c] text-white py-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
                
                {/* Contact Info */}
                <div className="text-left space-y-3">
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>
                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-lg" /> 123 Example Street, 12345 City
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-lg" /> info@example.com
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhoneAlt className="text-lg" /> +1 234 567 890
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Kinsman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;