import './About.css'
import { Title } from '../components'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <p>
                    Introducing a web app that internally calls a Serverless Endpoint hosted on the RunPod platform.
                    The serverless endpoint used `Stability AI` model to generate images, based on text input.
                </p>
                <p>
                    Give it a try and watch as your words come to life in the most unique and visually appealing way possible!
                </p>
            </div>
        </div>
    )
};

export default About;
