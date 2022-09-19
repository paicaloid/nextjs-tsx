import { useForm } from "react-hook-form";

const UploadFile = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    
    const res = await fetch("http://192.168.1.33:8001/upload", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </div>

  );
}

export default UploadFile;