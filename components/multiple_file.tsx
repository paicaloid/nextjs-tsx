import { useState } from "react";
import { useForm } from "react-hook-form";

const MultipleFile = () => {
  const { register, handleSubmit} = useForm();
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

  const onSubmit = async () => {
    const formData = new FormData();
    uploadFiles.forEach((file) => {
      formData.append("files", file);
    });
    const res = await fetch("http://192.168.1.33:8001/upload/images/", {
            method: "POST",
            body: formData,
            // headers: {
            //   "accept": "application/json",
            //   "Content-Type": "multipart/form-data"
            // },
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  }

  return (
    <div>
      <input 
        id='fileUpload'
        type='file'
        multiple
        accept="image/*"
        onChange={handleFileEvent}
      />
      <label htmlFor='fileUpload'>
        <a className='btn btn-primary border-2'>Upload</a>
      </label>
      <div>
        {uploadFiles.map((file, index) => {
          return (
            <div key={index}>
              <p>{file.name}</p>
            </div>
          )})}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="border-2">
        {/* <input type="file" {...register("file")} /> */}

        <input type="submit" />
      </form>
    </div>
  )
}

export default MultipleFile;