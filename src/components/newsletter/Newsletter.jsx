import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import '../newsletter/newsletter.css'

const Newsletter = () => {

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='newsletter'>
            <div className='newsletter-items'>
                <div className='newsletter-left'>
                    <h2>RETRIEVE THE LATEST INTEL ON BATTLEFIELD 2042</h2>
                    <p>Sign up today to receive the latest Battlefield news, tips and tricks, updates, behind-the-scenes content, exclusive offers, and more (including other EA news, products, events, and promotions) by email.</p>

                </div>
            </div>
        </div>
    )
}

export default Newsletter
