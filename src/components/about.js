import React from "React"
import Page from "./page"
import TimeLine from "./timeline"
import AboutMeCard from "./aboutMeCard"


const About = (props) => (
    <Page class="about aboutMeCardStyles " page_name="about" article={props.article}  articleTimeout={props.articleTimeout} onCloseArticle={props.onCloseArticle}>
    <div class="about">
    <h2 className="major">About Me!</h2>

    <h3 style={{"font-size":"1.3rem"}}> Hello there! I am Moayed Haji Ali, </h3> 
    <p style={{"justify-content": "cneter", "text-align":"justify",  'margin-bottom':'1rem'}}>
        A first-year PhD student at Rice University, working on multimodal generative modeling under the supervision of Prof. <a href='https://vislang.ai/'>Vicente Roman</a>. I recently graduated from Koc University, ranking third in the computer science departmen. I was also
         an undergraduate research assistant at <a href="https://ai.ku.edu.tr/">KUIS AI lab.</a> I am a proficient programmer with +6 years of programming experience and two year of industrial experience in machine learning. I strive to become a successful researcher and gain futher hands-on experience within the field of my interest in machine learning pretaining to computer vision, generative models and autonomous driving.
    </p>

    <p style={{"text-align":"justify", 'margin-bottom':'4rem'}}>
    I thrive in diverse teams and competitive environments that polish my skill set and ensure constant growth. I am currently seeking research internship opportunities. </p>
    </div>

    <AboutMeCard/>

    <TimeLine/>
    </Page>
    
)


export default About