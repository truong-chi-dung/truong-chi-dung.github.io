import React from 'react';
import Items from './components/Items';
import Search from './components/pages/Search';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from 'mongodb-stitch-browser-sdk';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Initialize the App Client
    this.client = Stitch.initializeDefaultAppClient("nasa-ohcab");
    // Get a MongoDB Service Client
    // This is used for logging in and communicating with Stitch
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    // Get a reference to the todo database
    this.db = mongodb.db("nasa");
    this.displayItemsOnLoad();
  }

  displayItemsOnLoad() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayItems())
      .catch(console.error);
  }

  displayItems() {
    // query the remote DB and update the component state
    this.db
      .collection("items")
      .find({}, { limit: 1000 })
      .asArray()
      .then(items => {
        this.setState({ items: items });
      });
  }

  editItem = (item) => {
    this.db
      .collection("items")
      .updateOne({
        _id: item.nasaId
      }, {"$set": {
        title: item.title,
        description: item.description,
        mediaType: item.mediaType,
        imgUrl: item.imgUrl,
        fileUrl: item.fileUrl
      }})
      .then(this.displayItems())
      .catch(err => console.error(`Failed to find and update document: ${err}`));
  }

  addItem = (item) => {
    // insert the todo into the remote Stitch DB
    // then re-query the DB and display the new todos
    this.db
      .collection("items")
      .insertOne({
        _id: item.nasaId,
        title: item.title,
        photographer: item.photographer,
        dateCreated: item.dateCreated,
        description: item.description,
        mediaType: item.mediaType,
        imgUrl: item.imgUrl,
        fileUrl: item.fileUrl,
        favorite: false
      })
      .then(this.displayItems())
      .catch(err => console.error(`Failed to create document: ${err}`));
  }

  markFavorite = (id) => {
    this.state.items.map(item => {
      if (item._id === id) {
        this.db
          .collection("items")
          .updateOne({
            _id: id
          }, {
            $set: {favorite: !item.favorite},
          })
          .then(this.displayItems())
          .catch(err => console.error(`Failed to find and update document: ${err}`));
      }
      return (this.displayItems());
    })
  }

  deleteItem = (id) => {
    this.state.items.map(item => {
      if (item._id === id) {
        this.db
          .collection("items")
          .deleteOne({
            _id: id
          })
          .then(this.displayItems())
          .catch(err => console.error(`Failed to remove: ${err}`));
      }
      return (this.displayItems());
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => (
            <Items {...props}
              items={this.state.items}
              editItem={this.editItem}
              markFavorite={this.markFavorite}
              deleteItem={this.deleteItem}
            />
          )}
          />
          <Route path="/search" render={(props) => <Search {...props} db={this.db} addItem={this.addItem} />} />
        </div>
      </Router>
    );
  }
}

export default App;
