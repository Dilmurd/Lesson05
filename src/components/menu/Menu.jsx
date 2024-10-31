import React, { useEffect, useState } from 'react'
import "./Menu.css"
import axios from 'axios'
import star from "../../assets/Group 85.png"
import Loading from '../loading/Loading'


const BASE_URL = "https://dummyjson.com"


function Menu() {
    const [products,setProducts] = useState(null)

    useEffect(()=>{
        axios
          .get(`${BASE_URL}/products`)
          .then(res => {
            setProducts(res.data.products)
          })
          .catch(err => console.log(err))
          .finally()
    },[])
    const productItems = products?.map((pro)=>(
        <div className='menu__card' key={pro.id}>
            <img src={pro.images[0]} className='image' alt="" />
            <div className='all'>
                <p className='title'>{pro.title}</p>
                <strong className='price'>{pro.price}$</strong>
            </div>
            <p className='desc'>{pro.description}</p>
            <div className="stars">
                <button className='btn'>+</button>
                <img src={star} alt="" />
            </div>
        </div>
    ))
  return (
    <main>
        <section className="menu">
            <div className="container">
                <div className="menu__top">
                    <p className='menu__title'>Menu</p>
                    <p className='menu__subtitle'>Food Full of treaty Love</p>
                    <p className='menu__desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                </div>
                <div className="menu__wrapper">{productItems}</div>
            </div>
        </section>
        <Loading/>
    </main>
  )
}

export default Menu