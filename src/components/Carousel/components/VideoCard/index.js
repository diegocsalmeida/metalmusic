import React from 'react';
import { VideoCardContainer } from './styles';
import CardFlipper from './flipper';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor,imagemBanda }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    /*
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
    */
    <CardFlipper
        front={image}
        back={imagemBanda}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
    />

    
  );
}

export default VideoCard;
