import React from 'react'
import "./About.css"
import about from "../../assets/Mask Group (1).png"


function About() {
  return (
    <main>
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={about} alt="" />
                    </div>
                    <div className="about__text">
                        <p className='about__title'>About US</p>
                        <p className='about__subtitle'>Food Stalls with Persons but  to  Product marketing plane
                        catlogues etc to. </p>
                        <p className='about__desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                        equipment  make your marketing plane Effective.</p>
                        <button className='about__btn'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default About