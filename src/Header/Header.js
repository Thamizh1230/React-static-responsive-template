import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-section'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-2'>
                <div className='logo'>
                    <h1><a href="#">My<span>Biz</span></a></h1>
                 </div>

                </div>
                <div className='col-lg-9 d-none d-lg-block d-md-none'>
                    <ul className='header'>
                        <li className='nav-list active'><a href='#'>HOME</a></li>
                        <li className='nav-list'><a href='#'>ABOUT</a></li>
                        <li className='nav-list'><a href='#'>SERVICE</a></li>
                        <li className='nav-list'><a href='#'>PORTFOLIO</a></li>
                        <li className='nav-list'><a href='#'>TEAM</a></li>
                        <li className='nav-list'><a href='#'>DROPDOWN</a></li>
                        <li className='nav-list'><a href='#'>CONTACT</a></li>

                    </ul> 
                </div>
        

            </div>
        </div>
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                <div className='content'>
                    <h1>Welcome to MyBiz</h1>
                    <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <button>Read More</button>
                    <div className='circle'>
                    <span className='active'></span>
                    <span></span>
                    <span></span>

                    </div>
                   
             </div>

             </div>
            </div>
       
            
        </div>

     
    </div>
  )
}

export default Header
