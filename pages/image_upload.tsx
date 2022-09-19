import { NextPage } from "next";

import UploadFile from "../components/upload_file";
import MultipleFile from "../components/multiple_file";
import DropZone from "../components/drop_upload";
import FileUploady from "../components/uploady";


const SingIn: NextPage = () => {
  return (
    <div>
      {/* <h1>Upload Single File</h1> */}
      {/* <UploadFile /> */}
      {/* <div></div> */}
      {/* <h1>Upload Multiple Files</h1> */}
      {/* <MultipleFile /> */}
      {/* <DropZone /> */}
      <FileUploady />
    </div>
  )
}

export default SingIn;