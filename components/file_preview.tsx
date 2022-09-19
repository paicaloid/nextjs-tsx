import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

const DropZone = () => {
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);

  const handleUploadFiles = (files : any) => {
    const uploaded = [...uploadFiles]

    files.some((file: File) => {
      uploaded.push(file);
    });
    setUploadFiles(uploaded);
  }

  const handleFileEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles)
  }
  
  return (
    <div>
      <h3>GeeksforGeeks - File Dropper</h3>
      <FileUploader 
        handleChange={handleFileEvent} 
        name="file" 
        types={fileTypes} 
      />
    </div>
  )
}

export default DropZone;