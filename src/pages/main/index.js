import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects'

import './styles.css';

export default class Main extends Component {
    state = {
        userinfo: [],
    }


    render() {
        return(
            <React.Fragment>
                <Introduction />
                <Projects />
                <About />
                <Footer /> 
            </React.Fragment>
        );
    }
}