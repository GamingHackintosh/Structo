import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>Создавайте здания по описанию с <span>Structo</span></h1>
                <p>Введите параметры и получите визуальную модель здания в 2D и 3D.
                    <br/>
                    Быстро, просто, интуитивно.
                </p>
                
                <a href="#FreeStart" className="cta-btn">Начать бесплатно</a>
            </div>
        </section>
    );
};

export default Hero;
