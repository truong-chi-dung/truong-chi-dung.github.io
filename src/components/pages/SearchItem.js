import React from 'react';
import axios from 'axios';
import '../../Search.css';
import addImg from '../../assets/add.svg';
import SearchModal from '../modal/SearchModal';
import { strTruncate } from './strTruncate.js';

class SearchItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            imgUrl: '',
            fileUrl: '',
        }
    }

    renderModal = () => {
        return (
            <SearchModal
                show={this.state.show}
                nasaId={this.props.result.data[0].nasa_id}
                title={this.props.result.data[0].title}
                photographer={(this.props.result.data[0].photographer !== undefined) ? this.props.result.data[0].photographer : this.props.result.data[0].media_type}
                dateCreated={this.props.result.data[0].date_created}
                description={this.props.result.data[0].description}
                mediaType={this.props.result.data[0].media_type}
                imgUrl={this.state.imgUrl[0]}
                fileUrl={this.state.fileUrl[0]}
                handleClose={this.hideModal}
                addItem={this.props.addItem}
            />
        );
    }

    showModal = () => {
        const searchUrl = `https://images-assets.nasa.gov/${this.props.result.data[0].media_type}/${this.props.result.data[0].nasa_id}/collection.json`;
        axios.get(searchUrl)
            .then(res => {
                this.setState({
                    show: true,
                    imgUrl: res.data.filter((url) => url.endsWith('~thumb.jpg')),
                    fileUrl: res.data.filter((url) => {
                        switch (this.props.result.data[0].media_type) {
                            case "video":
                                return (url.endsWith('.mp4'));
                            case "image":
                                return (url.endsWith('~orig.jpg'));
                            case "audio":
                                return (url.endsWith('~orig.mp3'));
                            default:
                                return "File url not found.";
                        }
                    }),
                })
            })
            .catch(() => {
                this.setState({
                    show: true,
                    imgUrl: 'Can not get data',
                    fileUrl: 'Can not get data',
                })
            });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        const author = (this.props.result.data[0].photographer !== undefined) ? this.props.result.data[0].photographer : this.props.result.data[0].media_type;
        const isAudio = (this.props.result.data[0].media_type === 'audio') ? true : false;
        return (
            <div className="col">
                {!isAudio &&
                    <img className="video"
                        alt={`${this.props.result.data[0].nasa_id}`}
                        src={`https://images-assets.nasa.gov/${this.props.result.data[0].media_type}/${this.props.result.data[0].nasa_id}/${this.props.result.data[0].nasa_id}~thumb.jpg`}
                    />
                }
                <div className="author">
                    {author}
                    <p className="datecreated">
                        {this.props.result.data[0].date_created}
                        {/* TODO: Formate date */}
                    </p>
                </div>
                <div className="title">
                    {this.props.result.data[0].title}
                </div>
                <div className="description">
                    {strTruncate(this.props.result.data[0].description, 100)}
                </div>
                <div>
                    <button className="add-collection" onClick={this.showModal}>
                        <img className="add-collection-img" src={addImg} alt="add_button"/>
                        Add to NASA Collection
                    </button>
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

export default SearchItem;