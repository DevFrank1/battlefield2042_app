import React from 'react'
import '../discover/discover.css'

const Discover = () => {
    return (
        <div className='discover'>
            <div className='discover-background'>
                <img src='\images\discover.jpg'/>
            </div>
            <div className='discover-items'>
                <h1>WORLD OF 2042</h1>
                <h2>Learn about the history, people, and world that make up Battlefield 2042.</h2>
                <div className='discover-items-btn'>
                    <button type='button'>Discover More</button>
                </div>
            </div>
        </div>
    )
}

export default Discover
