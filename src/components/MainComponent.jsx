import React from 'react'

import Header from './HeaderComponent'
import AboutMe from './AboutMeComponent'
import Services from './ServicesComponent'
import Gallery from './GalleryComponent'
import Form from './FormComponent'
import Footer from './FooterComponent'

const MainComponent = () => {
    return (
        <>
            <Header />
            <main>
                <AboutMe />
                <Services />
                <Gallery />
                <Form />
                <Footer />
            </main>
            
        </>
    )
}

export default MainComponent
