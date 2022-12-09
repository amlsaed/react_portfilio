import React from 'react';
import './testimonials.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





import AVTR1 from '../../assets/1.webp'
import AVTR2 from '../../assets/2.webp'
import AVTR3 from '../../assets/3.webp'
SwiperCore.use([Pagination]);
const data = [
  {
    avatar:AVTR1,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
          <Swiper 
          className="container testimonials_container"
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
         
          >
                {
                  data.map((data,index)=>{
                    
                      return(
                        <SwiperSlide className="testimonial" key={index}>
                        <div className="client_avatar">
                              <img src={data.avatar} alt="Avatar One" />
                        </div>
                        <h5 className="client_name">{data.name}</h5>
                        <small className="client_review">
                                  {data.review}
                        </small> 
                    </SwiperSlide>
                      )
                  
                  })}
                 

                  

                  
          </Swiper>
      </section>
  )
}

export default Testimonials