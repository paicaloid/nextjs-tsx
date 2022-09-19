import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

const DropZone = () => {
  // const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [file, setFile] = useState<File>();

  const handleChange = () => {
    setFile(file);
  };
  
  return (
    <div>
      <h3>GeeksforGeeks - File Dropper</h3>
      <FileUploader 
        handleChange={setFile} 
        name="file" 
        types={fileTypes} 
      />
    </div>
  )
}

export default DropZone;