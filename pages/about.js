import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <BaseLayout title="Mehul Mandviya - Learn More About Me" {...this.props.auth}>
                <BasePage className="about-page">
                    <Row className="mt-5">
                        <Col md="6">
                            <div className="left-side">
                                <h1 className="title fadein">Hello, Welcome</h1>
                                <h4 className="subtitle fadein">To About Page</h4>
                                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="fadein">
                                <p>My name is Mehul Mandviya and I am a Software Developer, currently living in San Francisco. </p>
                                <p>
                                    I have a Master's degree in Computer Engineering from California State University, Chico.
                                    Full Stack Developer/Engineer with a background in Elecronics. I bring a unique perspective to engineering, as I am constantly thinking about fiscal impact of every line of code I write!
                                    I am passionate about building excellent software that improves the lives of those around me.
                                    I approach coding in the same way I approach training--with efficiency, effectiveness and purpose.
	                            </p>
                                <p>
                                    I specialize in building applications using Javascript, React,Redux, Node.js/Express, MongoDB, Heroku and AWS.I'm looking to join a close team that embodies the startup hustle and is all about creating a positive impact through innovative products.
                                </p>
                                <p>
                                    When I'm not coding you can find me playing ping pong or listening to music.Check out some of my recent projects @
                                    https://github.com/Mehul2001
                                </p>
                            </div>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default About;