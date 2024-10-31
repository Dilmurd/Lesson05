import React from 'react'
import "./Take.css"
import iphone from "../../assets/Mask Group (2).png"
import apple from "../../assets/Group 73.png"
import p from "../../assets/Group 75.png"

function Take() {
  return (
    <main>
        <section className="take">
            <div className="container">
                <div className="take__wrapper">
                    <div className="take__text">
                        <p className='take__title'>Take away</p>
                        <p className='take__subtitle'>Food Stalls with Persons but  to  Product marketing plane. </p>
                        <p className='take__desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
                        <div className='icons'>
                            <img src={apple} alt="" />
                            <img src={p} alt="" />
                        </div>
                    </div>
                    <div className="take__img">
                        <img src={iphone} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Take