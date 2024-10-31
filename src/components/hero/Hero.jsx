import React from 'react'
import "./Hero.css"
import food from "../../assets/food.jpg"

function Hero() {
  return (
    <main>
        <section className='hero'>
        <div className="container">
          <div className="hero__wrapper">

                <div className="hero__text">
                    <h1 className="hero__title">Making time a good time by making food the good food.</h1>
                    <p className='hero__subtitle'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                    <div className="hero__btns">
                    <button className='hero__btn'>Order Now</button>
                    <button className='hero__btn'>Food Details</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={food} alt="" />
                </div>
          </div>
        </div>
        </section>
    </main>
  )
}

export default Hero