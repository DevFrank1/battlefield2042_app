import React from 'react'
import '../news/news.css'

const News = () => {
    return (
        <div className='news'>
            <div className='news-grid'>
                <div className='news-grid-item'>
                    <img src='\images\news1.jpg'/>
                    <div className='news-grid-item-content'>
                        <h1>BATTLEFIELD 2042</h1>
                        <h2>BATTLEFIELD 2042 UPDATE</h2>
                        <p>Vehicle and weapon balance changes, further bug fixes</p>
                    </div>
                </div>
                <div className='news-grid-item'>
                    <img src='\images\news2.jpg'/>
                    <div className='news-grid-item-content'>
                        <h1>BATTLEFIELD 2042</h1>
                        <h2>BATTLEFIELD 2042 UPDATE</h2>
                        <p>Addressing further bug fixes, balance changes and quality of life improvements</p>
                    </div>
                </div>
                <div className='news-grid-item'>
                    <img src='\images\news3.jpg'/>
                    <div className='news-grid-item-content'>
                        <h1>BATTLEFIELD 2042</h1>
                        <h2>BATTLEFIELD 2042 UPDATE</h2>
                        <p>Addressing further critical issues and balance following our worldwide launch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
