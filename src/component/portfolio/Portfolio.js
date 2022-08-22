import React from 'react';
import './portfolio.css'
import evaset1 from '../../images/evaset1.png'
import evaset2 from '../../images/evaset2.png'
import evaset3 from '../../images/evaset3.png'
import island1 from '../../images/island1.png'
import island2 from '../../images/island2.png'
import island3 from '../../images/island3.png'
import portfolio1 from '../../images/portfolio1.png'
import portfolio2 from '../../images/portfolio2.png'
import portfolio3 from '../../images/portfolio3.png'
import chat1 from '../../images/chat1.png'
import chat2 from '../../images/chat2.png'
import chat3 from '../../images/chat3.png'
import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import test3 from '../../images/test3.png'
import Carousel from 'better-react-carousel'


const data = [
    {
        id:1,
        image:[evaset1,evaset2,evaset3],
        title:'Evaset Automation Service',
        github:'https://github.com/JovliyevOlim/zz',
        demo:""
    },
    {
        id:2,
        image:[island1,island2,island3],
        title:'Travel to Island',
        github:'https://github.com/JovliyevOlim/portfolia',
        demo:"http://travel-to-island.netlify.app"
    },
    {
        id:3,
        image:[portfolio1,portfolio2,portfolio3],
        title:'My first portfolio',
        github:'https://github.com/JovliyevOlim/portfolio2',
        demo:"https://portfolio-jovliyevolim.netlify.app/"
    },
    {
        id:4,
        image:[chat1,chat2,chat3],
        title:'Chat && Messages',
        github:'https://github.com/JovliyevOlim/maxsoft',
        demo:"https://exquisite-torrone-e7208e.netlify.app/"
    },
    {
        id:5,
        image:[test1,test2,test3],
        title:'Test application',
        github:'https://github.com/JovliyevOlim/TestApplication',
        demo:"https://testapplication.netlify.app/"
    }
]

function Portfolio(props) {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={'container portfolio__container'}>
                {
                    data.map(item=>
                        <article key={item.id} className={'portfolio__item'}>
                            <div className={'portfolio__item-image'}>
                                <Carousel cols={1} rows={1} gap={10} loop className={'portfolio-carousel'}>
                                    {
                                        item.image.map(imgs=>   <Carousel.Item className={'carousel'}>
                                            <img className={'carousel-image'}  src={imgs} />
                                        </Carousel.Item>)
                                    }


                                </Carousel>
                            </div>
                            <h3>{item.title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={item.github} className={'btn'}>Github</a>
                                <a href={item.demo} className={'btn btn-primary'}>Live Demo</a>
                            </div>
                        </article>

                    )
                }


            </div>
        </section>
    );
}

export default Portfolio;
