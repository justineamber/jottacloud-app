import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GalleryPage from './components/galleryPage/galleryPage';
import AlbumPage from './components/albumPage/albumPage'
import SelectAlbum from './components/selectAlbum/selectAlbum'
import { Album } from './types'
import { Box } from '@material-ui/core';

const albumIds = [
  "mtr3fv2h",
  "9qvhmckg",
  "stc5pps7"
]

const App: React.FC = () => {
const [albumData, setAlbumData] = useState<Album>();
const [selectedAlbumId, setSelectedAlbumId] = useState<string>(albumIds[0]);

 const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAlbumId(event.target.value);
  };

useEffect(() => {
fetch(`https://api.jottacloud.com/photos/v1/public/${selectedAlbumId}`)
.then(response => response.json())
.then(response => {
  setAlbumData(response);
})
 }, [selectedAlbumId]);

  return albumData ? (
    <Router>
    <Box className="App">
      <Switch>
        <Route path="/gallery">
    <GalleryPage albumData={albumData}/>
     </Route>

      <Route path="/">
    <AlbumPage albumData={albumData}/>

    <SelectAlbum
      albumData={albumData}
      albumIds={albumIds}
      selectedAlbumId={selectedAlbumId}
      onChange={onChange}
    />

   </Route>
    </Switch>
    </Box>
    </Router>
  ) : null
}

export default App;
