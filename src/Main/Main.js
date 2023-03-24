import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import './Main.css'
import colimg from '../assets/dummy/img.jpg'


const Main = () => {
  return (
    <div>
        <Header />
        <div className='Main-sec'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='left-sec'>
                  <h1>EUM IPSAM LABORUM DELENITI VELITENA</h1>
                  <p>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</p>
                </div>
                
              </div>
              <div className='col-lg-6'>
                <div className='right-sec'>
                  <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  <ul>
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                    
                  </ul>
                  <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='section-2'>
          <div className='container'>
            <div className='row coloum-reverse row-reverse-lg coloum-reverse-md coloum-reverse-lg'>
              <div className='col-lg-6'>
                <div className='left-col'>
                  <h1>Est labore ad</h1>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  <h1>Harum esse qui</h1>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  <h1>Aut occaecati</h1>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  <h1>Beatae veritatis</h1>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>

                </div>
              </div>
              <div className='col-lg-6'>
                <div className='right-col'>
                  <img src={colimg} />
                  {/* <img src={require("../assets/img.png")} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='service'>
          <div className='container'>
            <div className='row'>
              <div className='service-title'>
                <span>SERVICES</span>
                <h2>SERVICES</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='itembox'>
                  <h4>Lorem Ipsum</h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
              <div className='itembox'>
                  <h4>Dolor Sitema</h4>
                  <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
              <div className='itembox'>
                  <h4>Sed ut perspiciatis</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  commodo consequat tarad limino dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
              <div className='itembox'>
                  <h4>Nemo Enim</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
              <div className='itembox'>
                  <h4>Magni Dolore</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
              <div className='itembox'>
                  <h4>Eiusmod Tempor</h4>
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <Footer />
        </div>
  )
}

export default Main