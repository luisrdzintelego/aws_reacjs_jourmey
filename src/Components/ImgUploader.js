import React, { useEffect, useRef, useState, useContext } from 'react';
import { VarContext } from '../Context/VarContext';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Components/ImgUploader.css'
// Specify camera icon to replace button text 
import camera from '../img/camera.svg'; // replace it with your path

// Specify your default image
import defaultUser from '../img/defaultUser.png'; // replace it with your path


const ImgUploader = () => {

//const notify_error = () => toast("Error!");
//const notify_good = () => toast("Imagen agregada correctamente");

const ImagenContext = useContext(VarContext);

// Profile upload helper
const HandleImageUpload = () => {

  //console.log("🚀 ~ ImagenContext", ImagenContext)

  // we are referencing the file input
  const imageRef = useRef();

  // Specify the default image
  const [defaultUserImage, setDefaultUserImage] = useState(defaultUser);
  
  // On each file selection update the default image
  const [selectedFile, setSelectedFile] = useState();

  // On click on camera icon open the dialog
  const showOpenFileDialog = () => {
    imageRef.current.click();
  };

  // On each change let user have access to a selected file
  const handleChange = (event) => {


    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const resetFile = () => {
    // Reset file input control
    document.getElementsByName("file")[0].value = null;
  }

  
  // Clean up the selection to avoid memory leak
  useEffect(() => {
    if (selectedFile) {
      
      const data = new FormData();

      /*
      for (let i = 0; i < selectedFile.length; i++) {
        data.append("file[]", selectedFile[i]);
      }
      */
      //data.append("file[image]", selectedFile);
      data.append('file', selectedFile)
      console.log("🚀 ~ data", data)
      console.log("🚀 ~ selectedFile", selectedFile)
      
      //let url = "http://localhost:8888/femsa/backend/server.php";
      let url = "https://www.intelego.com.mx/cursos_elearning/femsa/valores_femsa/backend/server.php";
  
      axios.post(url, data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          // then print response status
          //this.setState({ responseArray: res.data });
          //this.resetFile();
          console.log("RES:: " , res)
          //toast('-'+ res.data.url +'--');
          //toast('-'+ res.data.status +'--');
          //toast('-'+ res.data.error +'--');
          //toast('-'+ res.data.message +'--');

          ImagenContext.addImg(res.data.url)

          resetFile()
        },error=>{
          ImagenContext.addImg("error")
          toast('-'+ error +'--');
          //alert(error);
        });


      const objectURL = URL.createObjectURL(selectedFile);
      //ImagenContext.addImg(objectURL)
      setDefaultUserImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  return {
    imageRef,
    defaultUserImage,
    showOpenFileDialog,
    handleChange,
  };
};

// Image component
 const ItemImage = (props) => {
  const {itemImage, itemImageAlt} = props;
  return (
    <>
      <img
        src={itemImage}
        alt={itemImageAlt}
        className="item-image"
      />
    </>
  );
};

// Button with icon component
const CommonClickButtonIcon = (props) => {
  const {
    onHandleSubmitForm, iconImageValue, altImg,
  } = props;
  return (
    <div className="common-button">
      <button
        type="button"
        onClick={onHandleSubmitForm}
        className="button-image"
      >
        <img
          src={iconImageValue}
          alt={altImg}
          className="image-button-img"
        />
      </button>
    </div>
  );
};


  const {
    defaultUserImage,
    handleChange,
    imageRef,
    showOpenFileDialog,
  } = HandleImageUpload();

  return (


    
    <div className="edit-profile-container ">

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

      <div className="edit-profile-image white-grad">
        <ItemImage
          itemImage={defaultUserImage}
          itemImageAlt="user profile picture"
        />
        <CommonClickButtonIcon // Notice I omitted the text instead used icon
          onHandleSubmitForm={showOpenFileDialog}
          iconImageValue={camera}
          altImg="Upload image icon"
        />
        <input
          ref={imageRef}
          type="file"
          name="file"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ImgUploader