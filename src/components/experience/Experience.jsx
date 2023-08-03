import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <HiBadgeCheck/>
              <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
              </div>
              
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Java Script</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>React</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <HiBadgeCheck/>
              <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Java Script</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>React</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience