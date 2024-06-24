/** @format */

import { useNavigate } from "react-router-dom";
import avatar from "../../assets/val.jpeg";
import { Button } from "../../components";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className='about-us'>
      <div className='about'>
        <img src={avatar} className='pic' title='Valentine Michael' />
        <div className='text'>
          <h2>About Us</h2>
          <h5>
            Front-end Developer & <span>Designer</span>
          </h5>
          <p>
            A full-stack software developer with 7 years of experience and a
            track record of successfully developing, managing, and maintaining
            software applications across various industries, managing
            operational activities, and mentoring over 200 budding developers.
            Experienced in creating and maintaining enterprise-standard
            applications.
          </p>
          <div className='data'>
            <Button handleClick={() => navigate(-1)} label='Go back' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
