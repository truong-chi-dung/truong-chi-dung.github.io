import React from 'react';
import Modal from './modal/Modal';
import heart from '../assets/heart.svg';
import heartFilled from '../assets/heart-filled.svg';
import editimg from '../assets/pen.svg';
import deleteimg from '../assets/trash-bin.svg';
import playimg from '../assets/play.svg';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="col">
                <a href={this.props.item.fileUrl}>
                    <div className="play-btn">
                        <img className="playimg" src={playimg} alt="play_button" />
                    </div>
                    <img className="video"
                        alt={this.props.item._id}
                        src={this.props.item.imgUrl}
                    />
                </a>
                <div className="author">
                    {this.props.item.photographer}
                    <p className="datecreated">
                        {this.props.item.dateCreated}
                    </p>
                </div>
                <div className="title">
                    {this.props.item.title}
                </div>
                <div className="description">
                    {strTruncate(this.props.item.description, 100)}
                </div>
                <div>
                    <button className="favorite" onClick={this.props.markFavorite.bind(this, this.props.item._id)}>
                        {!this.props.item.favorite && <img src={heart} alt="favorite_button" />}
                        {this.props.item.favorite && <img src={heartFilled} alt="favorite_button" />}
                    </button>
                    <button className="edit" onClick={this.showModal}><img src={editimg} alt="edit_button" /></button>
                    <button className="delete" onClick={this.props.deleteItem.bind(this, this.props.item._id)}><img src={deleteimg} alt="delete_button" /></button>
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal} item={this.props.item} editItem={this.props.editItem} />
            </div>
        )
    }
}

function strTruncate(str, num) {
    try {
        // return full str length if str length smaller/equal than num.
        if (str.length <= num) {
            return str;
        }

        // return truncated str
        return str.slice(0, num) + "...";
    } catch (error) {
        console.error(`Failed to truncate string: ${error}`)
    }
}

export default Item;