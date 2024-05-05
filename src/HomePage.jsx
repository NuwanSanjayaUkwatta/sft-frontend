import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    const [current, setCurrent] = useState(0);
    const images = [
        
        {
            "src": require('./images/img1.jpg'),
            "title": "Face Detection Attendance",
            "description": "Revolutionize employee attendance with our Face Detection System, ensuring swift, secure, and accurate employee identification."
        },
        {
            "src": require('./images/img2.jpg'),
            "title": "Interactive Learning Tools",
            "description": "Empower your workplace with Interactive Learning Tools designed to foster engaging and effective employee development."
        },
        {
            "src": require('./images/img3.jpg'),
            "title": "Content Management System",
            "description": "Streamline employee training with our intuitive Content Management System, optimized for employee excellence."
        }
    
    
];
    

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <div className="relative ">
            <div className="max-w-screen-xl mx-auto">
                {images.map((slide, index) => (
                    <div key={index} className={`${index === current ? 'block' : 'hidden'} relative w-full bg-black `}>
                        <img  src={slide.src} alt="Travel Image" className="w-full h-96 object-cover"/>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center flex-col text-white p-4">
                            <h1 className="text-4xl font-bold">{slide.title}</h1>
                            <p className="text-xl mt-2">{slide.description}</p>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full focus:outline-none ml-4">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full focus:outline-none mr-4">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
}

export default HomePage;