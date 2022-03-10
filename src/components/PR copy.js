import React, { useContext, useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
//import './Home.css'
// import Box from './Box'
import Grid from './Grid'
//import { app } from "../basecopy"
//import App3 from "./App copy 4"
// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";
// import ReactDOM from 'react-dom';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import app from '../config'
const db = app.firestore();



const PublicRelationscopy = (props) => {

    useEffect(() => {
        getLinks();

    }, []);

    const [links, setLinks] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
        db.collection("persons").orderBy("table").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setLinks(docs);
        });
    };

    const handleToClose = () => {
        setOpen(false);
    };

    const getLinks = async () => {
        db.collection("persons").orderBy("table").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setLinks(docs);
        });
    };

    return (
        <>

<center>
            <div class="content2">
                <marquee behavior="" direction="">
                    <h3>LISTING DIAGRAM INFORMATION TECHNOLOGY</h3>
                </marquee>
                {/* <div className="col-md-10 p-2 "> */}
                <br /><br /><br />
                
                <div class="grid3">
                    <Carousel autoPlay={true} infiniteLoop={true}>
                        {links.map(imagen => {
                            return <div>
                                <img src={imagen.avatar} alt={imagen.name} class="imgSlider" />
                            </div>
                        })}
                    </Carousel>

                </div>
             

            </div>
            </center>   
        </>
    );
}

export default PublicRelationscopy;
