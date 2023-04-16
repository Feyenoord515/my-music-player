import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import FirebaseStorage from "./FirebaseStorage";
import { firestore } from "../config/firebase";
import { storage } from "../config/firebase";
import { uploadBytes, getDownloadURL } from 'firebase/storage';

const SongForm = ({ handleSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [archivoUrl, setArchivoUrl] = useState("");

  const handleFileChange = (file) => {
    if (file) {
      const isMp3 = file.type === "audio/mpeg";
      if (!isMp3) {
        message.error("Solo se pueden subir archivos en formato mp3");
        return false;
      }
      return true;
    }
  };

  const onFinish = async (values) => {
    try {
      handleSubmit(archivoUrl);
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleUpload = (file) => {
    if (!file) {
      return Promise.reject(new Error('No se ha seleccionado ningún archivo'));
    }
    // Crear una referencia al archivo en Firebase Storage
    const fileRef = storage.ref(`files/${file.name}`);
    // Subir el archivo a Firebase Storage
    return uploadBytes(fileRef, file).then(() => {
      // Obtener la URL de descarga del archivo
      return getDownloadURL(fileRef).then((url) => {
        return url;
      });
    });
  };

  const handleArchivoChange = (file) => {
    if (handleFileChange(file)) {
      handleUpload(file).then((url) => {
        setArchivoUrl(url);
      }).catch((error) => {
        message.error(error.message);
      });
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Título"
        name="titulo"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el título de la canción",
          },
        ]}
      >
        <Input
          placeholder="Título"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Artista"
        name="artista"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el nombre del artista",
          },
        ]}
      >
        <Input
          placeholder="Artista"
          value={artista}
          onChange={(event) => setArtista(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Archivo"
        name="archivo"
        rules={[
          {
            required: true,
            message: "Por favor selecciona un archivo de audio",
          },
        ]}
      >
        <FirebaseStorage
          
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!titulo || !artista || !archivoUrl}
        >
          Agregar canción
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SongForm;

