import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
    const headerType = props.headerType || 'default';

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is Mehul Mandviya and I am a Software Developer. I have a Master's degree in Computer Engineering from California State University,Chico." />
                <meta name="keywords" content="Mehul Portfolio, mehul developer, mehul front end developer, mehul full stack developer, mehul programmer" />
                <meta property="og:title" content="Mehul Mandviya - Programmer, Software Developer,Front-End Developer, Full-Stack Developer" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={`${process.env.BASE_URL}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="My name is Mehul Mandviya and I am Software Developer." />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}
                <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            </Head>
            <div className="layout-container" >
                <Header className={`port-nav-${headerType}`}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    isSiteOwner={isSiteOwner} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default BaseLayout;