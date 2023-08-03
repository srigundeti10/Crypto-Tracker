import React from 'react'
import './Portfolio.css'
import Img1 from '../../images/a.jpg'
import Img2 from '../../images/b.jpg'
import Img3 from '../../images/e.jpeg'
import Img4 from '../../images/e.jpeg'
import Img5 from '../../images/e.jpeg'
import Img6 from '../../images/e.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="portfolio image 1" />
          </div>
          <h3>Lamborghini</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="portfolio image 1" />
          </div>
          <h3>Ferrari</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="portfolio image 1" />
          </div>
          <h3>stocks</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="portfolio image 1" />
          </div>
          <h3>stocks</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img5} alt="portfolio image 1" />
          </div>
          <h3>stocks</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img6} alt="portfolio image 1" />
          </div>
          <h3>stocks</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </artical>
      </div>
    </section>
  )
}

export default Portfolio