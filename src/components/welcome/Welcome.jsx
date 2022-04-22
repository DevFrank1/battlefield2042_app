import React from 'react'
import '../welcome/welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome-background'>
                <img src='/images/welcome.jpg' />
            </div>
            <div className='welcome-content'>
                <h2>WELCOME TO 2042</h2>
                <p>Battlefields changing before your eyes. A cutting-edge arsenal at your disposal. The grand return of all-out warfare. Adapt and overcome in massive-scale 128 player battles* where dynamic storms, environmental hazards, total combat freedom, and Battlefield's signature destruction spark a new breed of Only in Battlefield moments.</p>
                <div className='welcome-content-btn'>
                    <button>Game Overview</button>
                </div>
                <div className='welcome-content-2'>
                    <h3>GAME EXPERIENCES</h3>
                    <div className='welcome-content-2-grid'>
                        <div className='welcome-content-2-grid-item'>
                            <img src='\images\welcome_grid_item1.jpg'/>
                            <h5>ALL-OUT WARFARE</h5>
                        </div>
                        <div className='welcome-content-2-grid-item'>
                            <img src='\images\welcome_grid_item2.jpg'/>
                            <h5>BATTLEFIELD PORTAL</h5>
                        </div>
                        <div className='welcome-content-2-grid-item'>
                            <img src='\images\welcome_grid_item3.jpg'/>
                            <h5>BATTLEFIELD HAZARD ZONE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
