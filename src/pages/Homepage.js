import React from 'react';
import Footer from '../molecules/Footer';
import Form from '../molecules/Form';
import Header from '../molecules/Header';
import Portfolio from '../molecules/Portfolio';
import Portfolio1 from '../molecules/Portfolio1';
import Skill from '../molecules/Skill';

const Homepage = ()=>{
    return (
<div>
    <Header/>
    <Skill/>
    <Portfolio/>
    <Portfolio1/>
    <Form/>
    <Footer/>
</div>

    )
}

export default Homepage;