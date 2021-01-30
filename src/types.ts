export interface CoverPhoto {
  camera: string;
  capturedDate: number;
  content: string;
  exposure: string;
  focalLength: string;
  file_url: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  md5: string;
  mimetype: string;
  ownerFullName: string;
  thumbnail_url: string;
  timestamp: string;
  username: string;
  width: number;
  encoded_content_ref: string;
}

export interface Photo {
  camera: string;
  capturedDate: number;
  content: string;
  commentsItemId: string;
  exposure: string;
  focalLength: string;
  file_url: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  md5: string;
  mimetype: string;
  ownerFullName: string;
  thumbnail_url: string;
  timestamp: string;
  username: string;
  width: number;
  encoded_content_ref: string;
}

export interface Album {
  collectionType: number;
  commentsGroupId: string;
  coverPhoto: CoverPhoto;
  createdDate: number;
  id: string;
  lastModified: number;
  maxCapturedDate: number;
  minCapturedDate: number;
  photos: Photo[];
  shareInfo: {
    admin: false,
    authorization: string;
    owner: string;
    ownerFullName: string;
    shareDate: number;
    subscribers: [],
    subscriptionDate: number;
    uri: string;
  },
  title: string;
  total: number;
}
