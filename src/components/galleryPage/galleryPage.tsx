import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Album, Photo } from '../../types';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';

interface Props {
  albumData: Album;
}

const useStyles = makeStyles(() => ({
 galleryContainer: {
   backgroundColor: '#2b2e4a'
  },
}));

const GalleryPage: React.FC<Props> = ({albumData}) => {
  const classes = useStyles();

  const items = albumData?.photos
  .sort((a: Photo, b: Photo) => a.capturedDate - b.capturedDate)
  .map(photo => ({
  original: photo.file_url,
  thumbnail: `${photo.thumbnail_url}.s`,
  }))

  return (
  <Box className={classes.galleryContainer}>
  <ImageGallery items={items}/>
  </Box>
  );
}

export default GalleryPage;
