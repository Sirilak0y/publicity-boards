import React, { useContext, useState, useEffect, Component } from "react";
import { AuthContext } from "./Auth";
import app from '../config'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const db = app.firestore();

const ImageSlider = (props) => {

  useEffect(() => {
      getLinks();

  }, []);
  const [users, setUsers] = useState([]);

  const [links, setLinks] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
      setOpen(true);
      db.collection("users").orderBy("table").onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
          });
          setUsers(docs);
      });
  };

  const handleToClose = () => {
      setOpen(false);
  };

  const getLinks = async () => {
      db.collection("users").orderBy("table").onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
          });
          setUsers(docs);
      });
  };

  return (
      <>

<center>
          <div class="content2">
              {/* <div className="col-md-10 p-2 "> */}
              <br /><br /><br />
              
              <div class="grid3">
                  <Slide autoPlay={true} infiniteLoop={true}>
                      {users.map(imagen => {
                          return <div>
                              <img src={imagen.avatar} alt={imagen.name} class="imgSlider" />
                          </div>
                      })}
                  </Slide>

              </div>
           

          </div>
          </center>   
      </>
  );
}

export default ImageSlider;