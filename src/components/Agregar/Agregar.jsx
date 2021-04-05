import React, { useState } from "react";
import { db, storage, firebase } from "../../firebase/firebaseConfig";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export const Agregar = () => {
  const allInputs = { imgUrl: "" };

  const { uid, name } = useSelector((state) => state.auth);

  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [values, handleInputChange, reset] = useForm({
    product: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    ofert: false,
    satus: true,
    seller: {
      _id: uid,
      name: name,
    },
  });

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleFormSubmit = (e) => {
    let timerInterval;
    Swal.fire({
      title: "Guardando",
      text: "el producto se está guardando",
      allowOutsideClick: false,
      showCloseButton: false,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    e.preventDefault();
    var url = "";
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        values.image = await storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL();

        db.collection("/productos").add(values);

        setUploadingImage(false);
        Swal.fire({
          title: "¡Listo!",
          text: "el producto se registró correctamente",
          icon: "success",
          timer: 2500,
          timerProgressBar: true,
        });
      }
    );
  };

  if (uploadingImage) {
  }

  return (
    <div>
      <div className="container">
        <h2 className="page-tittle text-center">Registre su producto</h2>
        <form className="product-form" onSubmit={handleFormSubmit}>
          <input
            type="file"
            name="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageAsFile}
          />

          <div className="form-group">
            <label htmlFor="product">Nombre del producto</label>
            <input
              type="text"
              name="product"
              id="product"
              onChange={(e) => {
                handleInputChange(e);
              }}
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
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Stock Inicial</label>
            <input
              type="text"
              name="stock"
              id="stock"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="product-desc"
              onChange={(e) => {
                handleInputChange(e);
              }}
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
  );
};
