import React from 'react';
import './Build.css';

const Build = () => {
    return (
        <section className="build-section">
            <div className="container">
                <h1 className="title">Создайте свое здание</h1>
                <p className="subtitle">
                    Введите параметры вашего здания и увидите результат в реальном времени.
                </p>
                <form className="build-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="height">Высота (м)</label>
                            <input type="number" id="height" name="height" defaultValue="10" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">Ширина (м)</label>
                            <input type="number" id="width" name="width" defaultValue="20" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="floors">Этажи</label>
                            <input type="number" id="floors" name="floors" defaultValue="5" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="window-size">Размер окон (м)</label>
                            <input type="number" id="window-size" name="window-size" defaultValue="2" />
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">Сгенерировать</button>
                </form>
            </div>
        </section>
    );
};

export default Build;
