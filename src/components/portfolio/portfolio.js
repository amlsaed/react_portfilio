import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/1.webp';
import IMG2 from '../../assets/2.webp';
import IMG3 from '../../assets/3.webp';
import IMG4 from '../../assets/4.webp';
// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {id: 1,
  image: IMG1,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: "https://github.com",
  demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {id: 2,
  image: IMG2,
  title: "Charts templates & infographics in Figma",
  github: 'https://github.com',
  demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {id: 3,
    image: IMG3,
    title: "Charts templates & infographics in Figma",
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {id:4,
    image: IMG4,
    title: "Charts templates & infographics in Figma",
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {id: 5,
    image: IMG4,
    title: "Charts templates & infographics in Figma",
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {id: 6,
    image: IMG4,
    title: "Charts templates & infographics in Figma",
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'}
  ]
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
        {
           data.map((data) => {
                    return (
                    <article key={data.id} className='portfolio_item'>
                          <div className="portfolio_item-image">
                               <img src={data.image} alt={data.title} />
                          </div>
                          <h3>{data.title}</h3>
                          <div className="portfolio_item-cta">
                                <a href={data.github} className="btn" target='_blank'>Github</a>
                                <a href={data.demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                          </div>
                          
                    </article>
                    )})
            }
           
        </div>
    </section>
  )
}

export default Portfolio;