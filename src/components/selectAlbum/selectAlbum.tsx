import React from 'react';
import { Album } from '../../types';
import { makeStyles } from "@material-ui/core/styles";
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface Props {
  albumData: Album | undefined;
  albumIds: string[];
  selectedAlbumId: string | null;
  onChange: (event: any) => void;
}

const useStyles = makeStyles(() => ({
 formControlWrapper: {
  backgroundColor: '#fff',
  borderRadius: '1rem',
  marginTop: '1rem',
  marginLeft: '1rem',
  padding: '1rem',
  position: 'absolute',
  top: '0',
  },
}));

const SelectAlbum: React.FC<Props> = ({
  albumIds,
  selectedAlbumId,
  onChange,
}) => {

  const classes = useStyles();

  return (
<Box className={classes.formControlWrapper}>
 <FormControl>
        <InputLabel id="select-album-label">
          Select album
        </InputLabel>

        <Select
          labelId="select-album-label"
          id="select-album"
          value={selectedAlbumId}
          onChange={onChange}
        >
          {albumIds.map((albumId) => (<MenuItem value={albumId}>{albumId}</MenuItem>))}
        </Select>
      </FormControl>
  </Box>
  )
}

export default SelectAlbum;
