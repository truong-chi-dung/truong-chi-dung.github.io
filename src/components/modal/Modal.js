import React from "react";
import closeImg from '../../assets/close.svg';
import '../../Modal.css';
import checkImg from '../../assets/check.svg';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nasaId: '',
            title: '',
            description: '',
            mediaType: '',
            imgUrl: '',
            fileUrl: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            nasaId: this.props.item._id,
            title: this.props.item.title,
            description: this.props.item.description,
            mediaType: this.props.item.mediaType,
            imgUrl: this.props.item.imgUrl,
            fileUrl: this.props.item.fileUrl,
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editItem(this.state);
        this.props.handleClose();
    }

    render() {
        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassname}>
                <div className="modal-main">
                    <h2 className="modal-header">Edit</h2>
                    <img
                        onClick={this.props.handleClose}
                        className="close"
                        src={closeImg}
                        alt="close" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="formbox">
                            <label className="title-label" htmlFor="title-input">
                                Title
                            </label>
                            <input
                                className="input"
                                name="title"
                                id="title-input"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formbox">
                            <label className="description-label" htmlFor="description-input">
                                Description
                            </label>
                            <input
                                name="description"
                                id="description-input"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formbox">
                            <label className="media-label" htmlFor="media-input">
                                Type
                            </label>
                            <select
                                name="mediaType"
                                id="media-input">
                                <option
                                    value={this.state.mediaType}
                                    onChange={this.handleChange}>
                                    {this.state.mediaType}
                                </option>
                            </select>
                        </div>
                        <div className="formbox">
                            <label className="img-label" htmlFor="img-input">
                                Link preview image url:
                            </label>
                            <input
                                name="imgUrl"
                                id="img-input"
                                type="text"
                                value={this.state.imgUrl}
                                onChange={this.handleChange} />
                        </div>
                        <div className="formbox">
                            <label className="file-label" htmlFor="file-input">
                                Link file url:
                            </label>
                            <input
                                name="fileUrl"
                                id="file-input"
                                type="text"
                                value={this.state.fileUrl}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="button-box">
                            <button
                                type="submit"
                                className="save-btn"
                                style={{ flex: '1' }}
                            >
                                <img className="checkimg" src={checkImg} alt="check-img"/> 
                                Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Modal;