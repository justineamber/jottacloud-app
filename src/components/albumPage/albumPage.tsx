import React from "react";
import {
  Link
} from "react-router-dom";
import "./albumPage.css";
import Button from 'react-bootstrap/Button'
import { Album } from '../../types';
import { User, Image, Clock } from 'react-feather';

interface Props {
  albumData: Album | undefined;
}

const AlbumPage: React.FC<Props> = ({albumData}) => {
  const getFormattedTimeSpan = (maxCapturedDate: number, minCapturedDate: number): string => {
    const min = new Date(minCapturedDate).toLocaleDateString()
    const max = new Date(maxCapturedDate).toLocaleDateString()
    return `${min} to ${max}`
  }

  return (
    <>
      <div className="albumPageContainer">
        <img
          className="imageStyle"
          src={albumData?.coverPhoto.file_url}
          alt="Album cover"
        />

        <div className="cardWrapper">
          <h2 className="cardHeading">{albumData?.title}</h2>

          <ul className="ulStyle">
            <li className="liStyle">
              <span className="spanHeadingStyle"><User className="svgStyles"/>Album owner: <span className="spanTextStyle">{albumData?.shareInfo.owner}</span></span>
            </li>

            <li className="liStyle">
              <span className="spanHeadingStyle"><Image className="svgStyles"/>Photo count: <span className="spanTextStyle">{albumData?.photos.length}</span></span>
            </li>

              <li className="liStyle">
                <span className="spanHeadingStyle"><Clock className="svgStyles"/>Time span: <span className="spanTextStyle">{albumData &&
                getFormattedTimeSpan(albumData?.maxCapturedDate, albumData?.minCapturedDate)}</span></span>
            </li>
          </ul>

          <Link to="/gallery">
            <Button variant="info">
              View the album
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AlbumPage;
