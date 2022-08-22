import React from 'react';
import './services.css'
import {BiCheck} from "react-icons/bi";

function Services(props) {
    return (
        <section id='services'>
            <h5>What is Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Design</h3>
                    </div>
                    <ul className={'service__list'}>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>

                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Application</h3>
                    </div>
                    <ul className={'service__list'}>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>

                </article>


                <article className="service">
                    <div className="service__head">
                        <h3>Coding</h3>
                    </div>
                    <ul className={'service__list'}>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>

                </article>

            </div>
        </section>
    );
}

export default Services;