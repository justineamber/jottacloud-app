import React from "react";
import ImageGallery from "react-image-gallery"
import { Album, Photo } from '../../types';
import './galleryPage.css'

interface Props {
  albumData: Album | undefined;
}

const GalleryPage: React.FC<Props> = ({albumData}) => {
  const items = albumData?.photos
    .sort((a: Photo, b: Photo) => a.capturedDate - b.capturedDate)
    .map(photo => ({
      original: photo.file_url,
      thumbnail: `${photo.thumbnail_url}.s`,
    }))

  return (
    <div className="gallery">
      <ImageGallery items={items} />
    </div>
  );
}

export default GalleryPage;
