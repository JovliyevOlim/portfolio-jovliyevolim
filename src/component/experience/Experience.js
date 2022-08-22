import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

function Experience(props) {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                        <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>HTML</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>CSS</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Typescript</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Sass</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Bootstrap</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Material UI</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Reactstrap</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Redux</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>REST API</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>Webpack</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Gulp</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>

                                <h4>React JS</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Angular</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>
                    </div>
            </div>
        </section>
    );
}

export default Experience;