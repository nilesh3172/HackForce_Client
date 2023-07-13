import * as React from 'react';

import Container from '@mui/material/Container';
import MainFeaturedPost from '../../components/MainFeaturedPost/mainfeaturedpost';

import Homesidebar from "../../components/sidebar/homesidebar";
import "./aboutus.css"
import useBackButtonReload from '../../hooks/backbutton';
const mainFeaturedPost = {
    title: 'About Us',
    description:
        "In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The Government appointed an Ad Hoc Committee for conducting the college from May 1955, later replaced by the Administrative Council in 1956. The Ad Hoc Committee added two more degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955 with the intake of 20 each. Three Diploma programs also started in 1955 ? Civil (40 intake), Mechanical (20) and Electrical (20)..",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const AboutUs = () => {
    useBackButtonReload();
    return (
        <div>
            <div className="home">
                <Homesidebar  />
                <Container maxWidth="false" style={{ marginTop: '100px' }}>
                    <div className="newContainer">

                        <MainFeaturedPost post={mainFeaturedPost} />





                    </div>
                </Container>
            </div>



        </div>
    );
};

export default AboutUs;
