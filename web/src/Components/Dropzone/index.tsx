import React, { useCallback, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
    onFileUploaded: (file: File) => void,
};

const Dropzone:React.FC<Props> = ({ onFileUploaded }) => {

    
    const [selectedFileUrl, setSelectedFileUrl] = useState('');


  const onDrop = useCallback(acceptedFiles => {
    
    const file = acceptedFiles[0] ;

    const fileUlr = URL.createObjectURL(file);


    setSelectedFileUrl(fileUlr);
    onFileUploaded(file);

  }, [onFileUploaded]);

  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <Container  className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>
      
    {selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Point thumbmail" /> 
        : 
        <p>
            <FiUpload /> Imagem do esbelecimento
         </p>
    }
    </Container>

  )
}


export default Dropzone;