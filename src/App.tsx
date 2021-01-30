import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AlbumPage from "./components/albumPage/albumPage";
import GalleryPage from "./components/galleryPage/galleryPage";
import { Album } from './types';

function App() {
  const [albumData, setAlbumData] = useState<Album>();

  useEffect(() => {
    fetch(`https://api.jottacloud.com/photos/v1/public/mtr3fv2h`)
    .then(response => response.json())
    .then(response => {
      if (!response) return
      setAlbumData(response)
    })
  },[]);

  return albumData ? (
    <Router>
        <Switch>
          <Route path="/gallery">
            <GalleryPage albumData={albumData}/>
          </Route>

          <Route path="/">
            <AlbumPage albumData={albumData}/>
          </Route>
        </Switch>
    </Router>
  ) : null
}

export default App;
