import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './imageList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    async onSearchSubmit(entry) {
        console.log(entry)
        const reponse = await axios.get(`https://pixabay.com/api/?key=22419156-8199ae201668b8d5dd2526c0a&q=${entry}&image_type=photo`)
        console.log(reponse.data.hits);
        this.setState({ images: reponse.data.hits })
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                We have {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
