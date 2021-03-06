import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipping: false
        }

        this.roles = ['Developer', 'Tech Lover', 'Team Player', 'Ambitious', 'Imaginative', 'React.js', 'Vue.js', 'Node.js'];
    }
    componentDidMount() {
        this.animateCard();
    }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }

    animateCard() {
        this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping: !this.state.isFlipping
            });
        }, 60000);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const { isFlipping } = this.state;

        return (
            <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                headerType="index"
                title="Mehul Mandviya - Portfolio">
                <div className="main-section">
                    <div className="background-image">
                        <img alt="Guy programming welcome picture" src="/static/images/background-index.png" />
                    </div>
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                                        <div className="front">
                                            <div className="hero-section-content">
                                                <h2> Software Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                        </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.jpg" />
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2>Front End Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    I Love Debbuging.
	                        </div>
                                            </div>
                                            <img alt="Guy programming welcome picture" className="image" alt="Guy programming welcome picture" src="/static/images/section-2.jpg" />
                                            <div className="shadow-custom shadow-custom-2">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        {isAuthenticated && <span> <strong>{user.name}</strong> </span>}
                                        Welcome to the portfolio website of Mehul Mandviya.
                                       I am a full-stack software engineer whose primary tech stack includes JavaScript, Node and React. I'm extremely passionate about building things, producing high-quality,clean , extensible and testable code and solving challenging technical problems.
                  </h1>
                                </div>
                                <Typed
                                    loop
                                    typeSpeed={60}
                                    backSpeed={60}
                                    strings={this.roles}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />


                                <div className="hero-welcome-bio">
                                    <h2>
                                        Let's take a look on my work.
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>
        )
    }
}
export default Index;