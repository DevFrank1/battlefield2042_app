import React from 'react'
import '../header/header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-background'>
                <video autoPlay muted loop>
                    <source src='\images\battlefield2042_video.webm' />
                </video>
            </div>

            <div className='header-content'>
                <img src='\images\bf2042-logo.png' />
                <h4>The next generation of all-out war is here - play Battlefield 2042 today. Adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.</h4>
                <div className='header-content-btn'>
                    <button className='header-content-btn-1' type='button'>Buy Now</button>
                    <button className='header-content-btn-2' type='button'>
                        <p>Watch the Trailer</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
