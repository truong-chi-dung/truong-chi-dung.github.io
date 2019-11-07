import React from 'react';
import axios from 'axios';
import '../../Search.css';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';
import backImg from '../../assets/back.svg';
import { strTruncate } from './strTruncate.js';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            message: '',
            loading: false,
        }
        this.cancel = '';
    }

    fetchSearchResult = (query) => {
        const searchUrl = `https://images-api.nasa.gov/search?q=${query}`;

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                const resultNotFoundMsg = !res.data.collection.items.length
                    ? 'There is no result.'
                    : '';

                this.setState({
                    results: res.data.collection.items,
                    message: resultNotFoundMsg,
                    loading: false,
                })
            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Fail to fetch data.'
                    })
                }
            })
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query: query, message: '', loading: true }, () => {
            if (query) {
                this.fetchSearchResult(query);
            } else {
                this.setState({ result: {} });
            }

        })
    }

    renderSearchResultsChild = () => {
        const { results } = this.state;
        return (
            <div className="row">
                {results.length && results.map(result => {
                    return (
                        <SearchItem result={result} key={result.data[0].nasa_id} addItem={this.props.addItem} />
                    )
                })}
            </div>
        );
    }

    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="row">
                    {results.map(result => {
                        const author = (result.data[0].photographer !== undefined) ? result.data[0].photographer : result.data[0].media_type
                        const isAudio = (result.data[0].media_type === 'audio') ? true : false;
                        return (
                            <div className="col" key={result.data[0].nasa_id}>
                                {!isAudio &&
                                    <img className="video"
                                        alt={`${result.data[0].nasa_id}`}
                                        src={`https://images-assets.nasa.gov/${result.data[0].media_type}/${result.data[0].nasa_id}/${result.data[0].nasa_id}~thumb.jpg`}
                                    />
                                }
                                <div className="author">
                                    {author}
                                    <p className="datecreated">
                                        {result.data[0].date_created}
                                    </p>
                                </div>

                                <div className="title">
                                    {result.data[0].title}
                                </div>
                                <div className="description">
                                    {strTruncate(result.data[0].description, 100)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )
        }
    }

    render() {
        const { query, message, loading } = this.state;
        return (
            <div className="container">
                <Link to="/">
                    <button className="back">
                        <img className="backimg" src={backImg} alt="back-img"/>
                        Back to Collection
                    </button>
                </Link>
                <h2 className="heading">Search from NASA</h2>
                <div className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={query}
                        id="search-input"
                        placeholder="Search ..."
                        onChange={this.handleOnInputChange}
                    />
                </div>

                {/*  Result */}
                {!loading && this.renderSearchResultsChild()}

                {/* Error Message */}
                <p className="message">{message}</p>
            </div>
        )
    }

}

export default Search;