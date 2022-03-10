import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import EmblaCarousel from "./EmblaCarousel";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../App.css';
import app from '../config'

const slideImages = [
    "../imag/1.jpg",
    "../image/2.jpg",
    "../image/3.jpg",
    "../image/4.jpg",
    "../image/5.jpg",
    "../image/6.jpg",
    "../image/7.jpg",
];


function carousel() {
    
    

        
        
    
        return (
            <>
                <div style={{
                    backgroundImage: `url("../image/head.png")`,
                    backgroundSize: "cover",
                    width: "auto",
                    height: 125
                }}>
    
                    <img src={"../image/logo.png"} alt="LOGO"
                        style={{
                            width: "8%",
                            hiegth: "8%"
                        }} />
                    <a style={{
                        fontSize: "40px",
                        paddingLeft: "8px",
                        fontFamily: "Mali",
                        color: "aliceblue",
                        paddingtop :"-20px"
                    }}>
                        Information Technology Ayutthaya Technical College
                    </a>
                </div>
              
                {/* <div>
                    <img src={"../image/Screenshot 2022-01-05 101924.jpg"} alt=""
                        style={{ width: "150px", hiegth: "200px" }} />
                </div> */}
                <div>
                     <br /><br />
    
                    <div>
                        <Slide easing="ease">
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/1.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน หอกรองอากาศ
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/2.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน ถังขยะ
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/3.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน ไฟ
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/4.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน กรองน้ำ
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/5.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน ขุด
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/6.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ผลงาน แสดงราคา
                                    </p>
                                </div>
                            </div>
    
    
                            <div className="each-slide">
                                <div >
                                    <img src={"./image/pha.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: "25px",
                                        fontFamily: "supermarket",
                                        color: "black"
                                    }}>
                                        ประชาสัมพันธ์
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </div> 
                     <center> 
    
                         <div class="w3-display-container mySlides">
                            <img src={"./image/1.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน หอกรองอากาศ</p>
                            </div>
                        </div>
                        <div class="w3-display-container mySlides">
                            <img src={"./image/2.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน ถังขยะ</p>
                            </div>
                        </div><div class="w3-display-container mySlides">
                            <img src={"./image/3.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน ไฟ</p>
                            </div>
                        </div><div class="w3-display-container mySlides">
                            <img src={"./image/4.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน กรองน้ำ</p>
                            </div>
                        </div><div class="w3-display-container mySlides">
                            <img src={"./image/5.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน ขุด</p>
                            </div>
                        </div><div class="w3-display-container mySlides">
                            <img src={"./image/6.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ผลงาน แสดงราคา</p>
                            </div>
                        </div>
                        <div class="w3-display-container mySlides">
                            <img src={"./image/7.jpg"} alt="" style={{ width: "600px", paddingTop: "30px" }} />
                            <div class="w3-display-bottomright w3-large w3-container w3-padding-hor-16 w3-black" class="center">
                                <p class="test1">ประชาสัมพันธ์</p>
                            </div>
                        </div>
                    </center>
                     ====================================================================================================================== 
     
    
                </div>
                <footer style={{
                    position: "fixed",
                    left: "0",
                    bottom: "0",
                    width: "100%",
                    textAlign: "center",
                    padding: "3px",
                    backgroundColor: "#FFE4AD",
                    fontFamily: "Mali",
                    fontSize: "20px"
                    /*color: white;*/
                }}>
                    <marquee direction="left">ยินดีต้อนรับสู้ แผนกเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคพระนครศรีอยุธยา</marquee>
                </footer>
                <div>
                <button onClick={() => app.auth().signOut()} class="btn btn-danger">Sign Out</button>
                </div>
            </>
        );
    
    };




export default carousel;