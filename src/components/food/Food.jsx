import React from 'react'
import "./Food.css"
import g from "../../assets/Group 114.png"
import s from "../../assets/Group 85.png"

function Food() {
  return (
    <main>
        <section className='food'>
            <div className="container">
                <div className="food__wrapper">
                    <div className='first'>
                        <p className='food__title'>Testimonial</p>
                        <p className='food__subtitle'>Making Food great again and again</p>
                        <p className='food__desc'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
                    </div>
                   <div className='second'>
                    <img src={g} alt="" />
                    <p className='food__inf'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                    <img src={s} alt="" />
                    <p className='name'>Augusta W. Reynoso</p>
                    <p>UI&UX DeSIGNER</p>
                    </div> 
                </div>
            </div>
        </section>
    </main>
  )
}

export default Food