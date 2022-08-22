import React from 'react';
import './testimonials.css'
import person from '../../images/person.jpg'
import person1 from '../../images/person1.jpg'
import person3 from '../../images/person3.jpg'
import person4 from '../../images/person4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    {
        avatar:person,
        name:'Shatta Wale',
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur eveniet\n' +
            '                        facilis fuga laborum, rem rerum sunt. Blanditiis dolor eos impedit perferendis sunt.\n' +
            '                        Adipisci assumenda blanditiis, expedita fuga officiis ratione.'
    },
    {
        avatar:person1,
        name:'Tina Snow',
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur eveniet\n' +
            '                        facilis fuga laborum, rem rerum sunt. Blanditiis dolor eos impedit perferendis sunt.\n' +
            '                        Adipisci assumenda blanditiis, expedita fuga officiis ratione.'
    },  {
        avatar:person3,
        name:'Kwame Despite',
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur eveniet\n' +
            '                        facilis fuga laborum, rem rerum sunt. Blanditiis dolor eos impedit perferendis sunt.\n' +
            '                        Adipisci assumenda blanditiis, expedita fuga officiis ratione.'
    },  {
        avatar:person4,
        name:'Conor Coady',
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur eveniet\n' +
            '                        facilis fuga laborum, rem rerum sunt. Blanditiis dolor eos impedit perferendis sunt.\n' +
            '                        Adipisci assumenda blanditiis, expedita fuga officiis ratione.'
    },
]

function Testimonials(props) {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
            >
                {
                    data.map(item=>
                        <SwiperSlide className='testimonials'>
                            <div className="client__avatar">
                                <img src={item.avatar} alt="Person one"/>
                            </div>
                            <h5 className={'client__name'}>{item.name}</h5>
                            <small className={'client__review'}>
                                {item.review}
                            </small>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </section>
    );
}

export default Testimonials;
