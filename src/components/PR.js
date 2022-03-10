import React, { useEffect, useContext } from "react";
import { Navigate } from 'react-router-dom'
import app from '../config'
import { toast } from "react-toastify"
import { AuthContext } from './Auth'
import '../App.css';
import { Link } from "react-router-dom";



const db = app.firestore();

function PublicRelations(props) {

  useEffect(() => {
    getLinks();
    if (props.currentId === "")  {
      setUsers({
        avatar: null,
        // description: "",
        name: "",
      });
    } else {
      fetchUsers(props.currentId);
    }
  }, [props.currentId]);

  const fetchUsers = async (id) => {
    const usersCollection = await db.collection("publicrelations").doc(id).get();
    setUsers(
      usersCollection.docs.map((doc) => {
        return doc.data();
      })
    )
  }
  fetchUsers();


  const [fileUrl, setFileUrl] = React.useState(null)
  const [users, setUsers] = React.useState([])
  const [currentId, setCurrentId] = React.useState("");

  

  const onFileChange = async (e) => {
    const publicrelations = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(publicrelations.name);
    await fileRef.put(publicrelations)
    setFileUrl(await fileRef.getDownloadURL());
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    // const description = e.target.description.value;
    

    if (currentId === "") { 
      await db.collection("publicrelations").doc().set({
        avatar: fileUrl,
        // description: description,
        name: firstname,
      });
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await db.collection("publicrelations").doc(currentId).update(
        {
          avatar: fileUrl,
        //   description: description,
          name: firstname,

        }
      );
      toast("Link Updated Successfully", {
        type: "info",
      });
      setCurrentId("");
    }
  }
  const getLinks = async () => {
    db.collection("publicrelations").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsers(docs);
    });
  };

  const onDeleteLink = async (id) => {
    

    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("publicrelations").doc(id).delete();
      toast("Link Removed Successfully", {
        type: "error",
        autoClose: 2000
      });
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
      return <Navigate to="/ " />;
  }


  return (
    <>

      <div className="container mt-5">
      <center>
      <h1 className="content">ผลงาน</h1>
        <div className="content2">
          {users.map((user) => {
            
            return (
              <div className="card mb-1 border-primary " key={user.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                      <div>
                        <p>ชื่อผลงาน : <b>{user.name} </b></p>
                        {/* <p>ข้อความ : <b>{user.description}</b></p> */}
                      </div>
                    <div>
                      <button className="btn btn-danger" onClick={() => onDeleteLink(user.id)}>
                        Delete
                      </button>
                      <span> </span>
                      <button className="btn btn-primary" onClick={() => setCurrentId(user.id)}>
                        edit
                      </button>
                    </div>
                  </div>
                  <img width="150" height="150" src={user.avatar} alt={user.name} />
                </div>
              </div>
            )
        })
     };

        <div class="content2">
            <h1>ผลงาน</h1>
            <form onSubmit={onSubmit} className="card card-body border-primary">
              <div className="form-group mb-3">
                <div className="form-controll center">
                  <input type="file" onChange={onFileChange} />
                </div>
              </div>
              <div className="form-controll center">
                <p>ชื่อผลงาน</p>
              </div>
              <div className="form-controll center">
                <input
                  type="text"
                  name="firstname"
                  placeholder="firstname"
                  value={users.firstname}
                />
              </div>
              {/* <div className="form-controll center">
                <p>ข้อความ</p>
              </div>
              <div className="form-controll center">
                <textarea
                  type="text"
                  name="description"
                  placeholder="description"
                />
              </div> */}
             
              <div className="container mt-5">
                <button className="btn btn-primary btn-block">
                  {currentId === "" ? "Save" : "Update"}
                </button>
                <span> </span>
               
              </div>
            </form>
          
        </div>

        </div>
        <div className="container mt-5">
            <button onClick={() => app.auth().signOut()} class="btn btn-danger">Sign Out</button>
            <Link to="/Portfolio" >
            <button type="button" className="btn btn-danger">
            Portfolio
            </button>
            </Link>
            <Link to="/Persons" >
            <button type="button" className="btn btn-danger">
            Persons
            </button>
            </Link>
            <Link to="/PublicRelations" >
            <button type="button" className="btn btn-danger">
            PublicRelations
            </button>
            </Link>

            <Link to="/PublicRelationscopy" >
            <button type="button" className="btn btn-danger">
            PublicRelationscopy
            </button>
            </Link>
        </div>
        
        </center>
      </div>
    </>
  );
}

export default PublicRelations;
