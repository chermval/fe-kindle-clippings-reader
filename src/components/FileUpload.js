import React from "react";
import {uploadClippingFile,  getClippingFiles} from "../services/FileUploadService"


class FileUpload extends React.Component {
    constructor(prop){
        super(prop);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event){
        event.preventDefault();
        uploadClippingFile(this.fileInput.current.files[0]).then((response) => {
            console.log(response.data);
          });
        console.log(`${this.fileInput.current.files[0].name}`);

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="form-label">
                    Upload My Clippings file
                </label>
                <input type="file" className="form-control-file" ref={this.fileInput} />
                <br/>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        );
    }
}

export default FileUpload;