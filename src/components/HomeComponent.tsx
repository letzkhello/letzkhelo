"use client"

import React from 'react'
import { useState } from 'react'
import Carousel from './Carousel'
import Card from './Card'

export const HomeComponent = () => {

  return (
    <div>
      <Carousel/>
      {/* <section className="background firstsection">
        <div className="box-main">
            <div className="fhalf flex flex-col p-20" id="home">
                <p className="textbig ">The Future is here</p>
                <p className="textsmall ">Come out of the <b>virtual world</b></p>

            </div>
            <div className="shalf">
                <img src='/icon.jpeg' alt="kk"/>
              

            </div>
            
        </div>
    </section> */}
      <Card/> 
    </div>
  )
}
