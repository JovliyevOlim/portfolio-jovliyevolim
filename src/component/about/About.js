import React from 'react';
import './about.css'
import Me from '../../images/me-About.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About(props) {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="about image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Client</h5>
                            <small>50+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        I am front-end engineer who has building web
                        applications mainly on React js and Angular. So far I
                        have participated in more projects and improved my
                        skills on building, deploying front-end applications.
                        I have successfully completed
                        several projects. I can easily master new
                        technologies, I can speak English well, I have a
                        intermediate level of English, as well as a level of
                        fluency in Russian
                    </p>


                    <a href="#contact" className={"btn btn-primary"}> Let's Talk</a>
                </div>

            </div>

        </section>
    );
}

export default About;