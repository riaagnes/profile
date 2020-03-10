import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
console.log(props);
    return(

        <div>
            
            <Hero title={props.title}  />

            <Content>
            <img className="g-card-image  profile-main-logo" src={props.img} alt={props.img} />
                <p>Hello! I am Ria Agnes Jose</p>

<p class="my-intro">A motivated  <i>engineer</i>, a  <i>coding enthusiast </i> and a  <i>developer</i> constantly looking for opportunities to learn</p>
            
<p>I am currently pursuing my Graduate studies in Information Systems at the Northeastern University in Seattle. I am a diligent self-starter. I stay committed to any task that I take up. I love challenging myself every now and then with the unknowns just so I never stop learning. For this reason, I work on a number of projects that help me learn new technologies as a Developer. I have an interest in Full Stack Software Development across both the Web and Mobile platforms. I love the daily challenges of being a web developer: writing quality code, learning new technologies, and solving complex problems. I learn quickly and test my knowledge by creating projects, pushing to GitHub</p>
 Now, I am eager to be part of a team and build amazing things that will change people's lives!
 <p>
If you have any opportunities for me or would just like to get in touch you may reach me on LinkedIn or you may drop an email!</p>


            </Content>
        </div>
    );

}

export default AboutPage;