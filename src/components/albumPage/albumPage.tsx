import React from 'react';
import {
 Link
} from "react-router-dom";
import { Album } from '../../types';
import { User, Image, Clock } from 'react-feather';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

interface Props {
albumData: Album | undefined;
}

const useStyles = makeStyles(() => ({
albumPageContainer: {
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
  },

buttonLinkStyle: {
  textDecoration: 'none',
},

cardHeading: {
  marginBottom: '0.5rem',
  marginTop: 0,
  lineHeight: 1
},

cardWrapper: {
  backgroundColor: '#2b2e4a',
  borderRadius: '1rem',
  left: '50%',
  padding: '1rem',
  position: 'absolute',
  textAlign: 'start',
  transform: 'translate(-50%, -50%)',
  top: '50%',
},

imageStyle: {
  height: '100vh',
  width: '100vw',
  objectFit: 'cover'
},

liStyle: {
  marginBottom: '1rem',
},

spanHeadingStyle: {
  display: 'block',
  fontWeight: 700
},

spanTextStyle: {
  fontWeight: 400
},

svgStyles: {
  marginRight: '0.5rem'
},

ulStyle: {
  listStyle: 'none',
  paddingInlineStart: 0,
  marginTop: '1rem'
},
}));

const AlbumPage: React.FC<Props> = ({albumData}) => {
  const getFormattedTimeSpan = (maxCapturedDate: number, minCapturedDate: number): string => {
    const min = new Date(minCapturedDate).toLocaleDateString()
    const max = new Date(maxCapturedDate).toLocaleDateString()
    return `${min} to ${max}`
  }

  const classes = useStyles();

  return (
 <Box className={classes.albumPageContainer}>
   <img className={classes.imageStyle}
   src={albumData?.coverPhoto.file_url}
   alt="album cover"
    />

<Box className={classes.cardWrapper}>
  <h2 className={classes.cardHeading}>{albumData?.title}</h2>
  <ul className={classes.ulStyle}>
    <li className={classes.liStyle}>
      <span className={classes.spanHeadingStyle}>
        <User className={classes.svgStyles}/> Album owner:
        <span className={classes.spanTextStyle}>
          {albumData?.shareInfo.ownerFullName}
      </span>
      </span>
    </li>

      <li className={classes.liStyle}>
        <span className={classes.spanHeadingStyle}>
          <Image className={classes.svgStyles}/> Photo count:
        <span className={classes.spanTextStyle}>
        {albumData?.photos.length}
        </span>
        </span>
    </li>

    <li className={classes.liStyle}>
    <span className={classes.spanHeadingStyle}>
      <Clock className={classes.svgStyles}/> Time span:
    <span className={classes.spanTextStyle}>
    {albumData && getFormattedTimeSpan(albumData?.maxCapturedDate, albumData?.minCapturedDate)}
    </span>
 </span>
    </li>
  </ul>
  <Link to="/gallery" className={classes.buttonLinkStyle}>
  <Button color="secondary" variant="contained" disableElevation>View album</Button>
  </Link>
</Box>
 </Box>
 );
}

export default AlbumPage;
