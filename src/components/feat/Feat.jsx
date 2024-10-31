import React from 'react'
import "./Feat.css"
import feat from "../../assets/feat.svg"
import feat2 from "../../assets/Group 123.svg"
import feat3 from "../../assets/Group 93.svg"




function Feat() {
  return (
    <main>
        <section className="feat">
            <div className="container">
                <div className="feat__titles">
                    <p className='feat__title'>Features</p>
                    <p className='feat__subtitle'>Food with a New Passion</p>
                </div>
                <div className="feat__wrapper">
                <div className="feat__card">
                    <img src={feat} alt="" />
                    <div className="feat__descs">
                    <p className='feat__inf'>Quality Food</p>
                    <p className='feat__desc'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                </div>
                <div className="feat__card">
                    <img src={feat2} alt="" />
                    <div className="feat__descs">
                    <p className='feat__inf'>Food Delivery</p>
                    <p className='feat__desc'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                </div>
                <div className="feat__card">
                    <img src={feat3} alt="" />
                    <div className="feat__descs">
                    <p className='feat__inf'>Super Taste</p>
                    <p className='feat__desc'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Feat