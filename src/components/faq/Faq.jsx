import React from 'react'
import '../faq/faq.css'

const Faq = () => {
    return (
        <div className='faq'>
            <div className='faq-background'>
                <img src='\images\faq.jpg'/>
            </div>
            <div className='faq-items'>
                <h1>WORLD OF 2042</h1>
                <h2>Learn about the history, people, and world that make up Battlefield 2042.</h2>
                <div className='faq-items-btn'>
                    <button type='button'>Read Now</button>
                </div>
            </div>
        </div>
    )
}

export default Faq
