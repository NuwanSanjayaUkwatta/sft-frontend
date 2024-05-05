import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faSignInAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: '#8BC34A', color: 'white' }}>  
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                   
                    <div>
                        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>SanjayaFace TrackMaster</Link>
                    </div>

                    {/* Desktop Menu - Updated with new items */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {/* Removed Blogs link */}
                        <Link to="/attendance" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>
                        <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '8px', color: '#333' }} /> Attendance
                        </Link>
                        <Link to="/contact" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: '#333' }} />Contact
                        </Link>
                        <Link to="/login" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>
                            <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '8px', color: '#333' }} />Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} style={{ padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent' }}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Updated with new items */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                {/* Removed Blogs link */}
                <Link to="/attendance" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'block', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>Attendance</Link>
                <Link to="/contact" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'block', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>Contact</Link>
                <Link to="/login" style={{ padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: '500', display: 'block', color: '#333' }} onMouseOver={(e) => e.target.style.background = '#3E8E41'} onMouseOut={(e) => e.target.style.background = ''}>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;