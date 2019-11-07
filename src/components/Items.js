import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import addImg from '../assets/add.svg';

class Items extends React.Component {

    renderItems = () => {
        return (
            this.props.items.map((item) => {
                return (
                    <Item
                        key={item._id}
                        item={item}
                        editItem={this.props.editItem}
                        markFavorite={this.props.markFavorite}
                        deleteItem={this.props.deleteItem}
                    />
                )
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1 className="nasa-collection">NASA Collection</h1>
                    <Link to="/search">
                        <button className="add">
                            <img className="addimg" src={addImg} alt="add-img"/> 
                            Add new item
                        </button>
                    </Link>
                </div>
                <div className="row">
                    {this.renderItems()}
                </div>
            </React.Fragment>
        )
    }
}

export default Items;