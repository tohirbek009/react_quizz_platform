import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'


const Index = () => {
    return (
        <div className='header'>
            <Link to='/' className='title' style={{textDecoration:'none', color:'green'}}>
                Interesting Quiz Platform
            </Link>
            <hr />
            <hr className='divider'/>
        </div>
    )
}

export default Index
