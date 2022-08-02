import React, { useEffect, useRef, useState, useContext } from 'react';
import { VarContext } from '../Context/VarContext';

import '../Components/ImgUploader.css'
// Specify camera icon to replace button text 
import camera from '../img/camera.svg'; // replace it with your path

// Specify your default image
import defaultUser from '../img/defaultUser.png'; // replace it with your path


const ImgUploader = () => {

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

  // Clean up the selection to avoid memory leak
  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);

      ImagenContext.addImg(objectURL)
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
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ImgUploader