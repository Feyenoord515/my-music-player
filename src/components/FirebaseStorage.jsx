import React, { useState } from 'react';
import { storage } from '../config/firebase';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

const FirebaseStorage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Validar el tipo de archivo (opcional)
    if (selectedFile && selectedFile.type.includes('audio/')) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Selecciona un archivo de audio válido (mp3, wav, etc.)');
    }
  };

  const handleUpload = () => {
    if (file) {
      // Crear una referencia al archivo en Firebase Storage
      const fileRef = ref(storage, `files/${file.name}`);
      // Subir el archivo a Firebase Storage
      uploadBytes(fileRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      
        // Obtener la URL de descarga del archivo
        getDownloadURL(fileRef).then((url) => {
          setUrl(url);
        });
      }).catch((error) => {
        console.log('Error al subir el archivo', error);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {error && <div>{error}</div>}
      <button onClick={handleUpload}>Subir archivo</button>
      {url && <a href={url}>Descargar archivo</a>}
    </div>
  );
};

export default FirebaseStorage;
