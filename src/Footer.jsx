import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#8BC34A', color: '#333' }}>  {/* Changed to green */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                   
                    
                    {/* Updated navigation items */}
                    <div className="flex items-center space-x-4">
                        <Link to="/attendance" className="px-3 py-2 rounded-md text-xs font-medium flex items-center hover:bg-green-500 hover:text-white">
                            Attendance
                        </Link>
                        <Link to="/contact" className="px-3 py-2 rounded-md text-xs font-medium flex items-center hover:bg-green-500 hover:text-white">Contact</Link>
                        <Link to="/login" className="px-3 py-2 rounded-md text-xs font-medium flex items-center hover:bg-green-500 hover:text-white">Login</Link>
                    </div>
                    {/* Social icons with updated hover color */}
                    <div className="flex items-center space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
                <div className="text-center text-xs font-medium py-4">
                    © {new Date().getFullYear()} Employee Attendance System. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;