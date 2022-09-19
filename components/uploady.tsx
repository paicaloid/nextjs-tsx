import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const FileUploady = () => (
    <Uploady destination={{ url: "http://192.168.1.33:8001/upload/images/" }}>
        <UploadButton/>
    </Uploady>
);

export default FileUploady;