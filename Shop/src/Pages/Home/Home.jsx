import React from 'react'
import  { useState } from 'react';
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import { products } from '../../components/Card/Data.js';

const Home = () => {

  
  return (
    <>
     <Navbar/>
     <Hero/>
     <Card/>

    </>
  )
}

export default Home
