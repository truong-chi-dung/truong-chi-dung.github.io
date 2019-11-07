import React from "react";
import closeImg from '../../assets/close.svg';
import '../../Modal.css';
import { Redirect } from 'react-router';
import checkImg from '../../assets/check.svg';

class SearchModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nasaId: '',
            title: '',
            description: '',
            photographer: '',
            dateCreated: '',
            mediaType: '',
            imgUrl: '',
            fileUrl: '',
            redirect: false,
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.imgUrl !== prevProps.imgUrl) {
            this.setState({
                nasaId: this.props.nasaId,
                title: this.props.title,
                photographer: this.props.photographer,
                dateCreated: this.props.dateCreated,
                description: this.props.description,
                mediaType: this.props.mediaType,
                imgUrl: this.props.imgUrl,
                fileUrl: this.props.fileUrl,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({ redirect: true })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />;
        }
        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";
        const { title, description, mediaType, imgUrl, fileUrl } = this.state;
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
                                value={title}
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
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formbox">
                            <label className="media-label" htmlFor="media-input">
                                Type
                            </label>
                            <select
                                name="mediaType"
                                id="media-input"
                                onChange={this.handleChange}
                            >
                                <option value={mediaType}>
                                    {mediaType}
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
                                value={imgUrl}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="formbox">
                            <label className="file-label" htmlFor="file-input">
                                Link file url:
                            </label>
                            <input
                                name="fileUrl"
                                id="file-input"
                                type="text"
                                value={fileUrl}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="add-btn"
                                style={{ flex: '1' }}
                            >
                                <img className="checkimg" src={checkImg} alt="check-img"/>
                                Add to Collection
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default SearchModal;