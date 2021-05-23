import './App.css';
import React, {useState} from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = () => {
    const [ images, setImages ] = useState([]);

    const onFormSubmit = async (value) => {
        await unsplash.get('/search/photos', {
            params: { query: value }
        })
            .then(r => setImages(r.data.results))
            .catch(e => console.error(e));
    }

    return (
        <div className='ui container borders'>
            <SearchBar onSubmit={onFormSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;
