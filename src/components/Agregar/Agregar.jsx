import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { db, firebase, storage } from "../../firebase/firebaseConfig";
import { useForm } from "../../hooks/useForm";

export const Agregar = () => {

    const allInputs = { imgUrl: '' };
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [image, setImage] = useState('');
    const [values, handleInputChange, reset] = useForm({
        product: '',
        price: '',
        stock: '',
        description: '',
        image: '',
        ofert: false,
        satus: true
    })

    // console.log(image);
    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setImage( image );
        setImageAsFile( imageFile => ( image ));
        
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        values.image = imageAsUrl.imgUrl;
        db.collection('/productos').add( values );
    }
    const handleUploadImage = () => {
    console.log('start of upload')
    // async magic goes here...
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
       })
    })
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2 className="page-tittle">Registre su producto</h2>
                <form 
                    className = "product-form"
                    onSubmit = { handleFormSubmit }
                >
                    <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        accept=".jpg, .jpeg, .png"
                        onChange={ handleImageAsFile } 
                    />
                     <button className="btn btn-primary" onClick={ handleUploadImage } >Subir imagen</button>
                    <div className="form-group">
                        <label htmlFor="product">Nombre del producto</label>
                        <input 
                            type="text" 
                            name="product" 
                            id="product"
                            onChange={ (e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input 
                            type="number" 
                            min="1" 
                            max="9999" 
                            name="price" 
                            id="price"
                            onChange={ (e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock Inicial</label>
                        <input 
                            type="text" 
                            name="stock" 
                            id="stock"
                            onChange={ (e) => {handleInputChange(e)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea 
                        name="description" 
                        id="" cols="30" 
                        rows="10"
                        className="product-desc"
                        onChange={ (e) => {handleInputChange(e)}}
                        ></textarea>
                    </div>
                    <input 
                        type="submit" 
                        value="Agregar Producto" 
                        className="btn btn-block btn-primary"
                    />
                </form>

                {/*  */}
            </div>
        </div>
    )
}
