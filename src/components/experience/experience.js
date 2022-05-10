import React from 'react';
import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs"



const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container  exprience_container">
        <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
              {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                  
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>React js</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
        </div>
        {/* End of frontend */}
        <div className="experience_backend">
              <h3>Backend Development</h3>
              <div className="experience_content">
              {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>Node js</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                {/* item skill */}
                <article className="experience_details">
                  <BsFillPatchCheckFill className='experience_details_icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Experience