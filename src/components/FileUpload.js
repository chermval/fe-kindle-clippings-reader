import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class FileUpload extends React.Component {
    constructor(prop){
        super(prop);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="form-label">
                    Selecciona tu archivo My Clippings
                </label>
                <input type="file" className="form-control-file" ref={this.fileInput} />
                <br/>
                <button type="submit" className="btn btn-primary">Cargar</button>
            </form>
        );
    }
}

export default FileUpload;