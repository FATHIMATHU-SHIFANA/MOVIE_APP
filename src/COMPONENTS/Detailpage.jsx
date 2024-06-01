import React, { useContext, useEffect } from 'react';
import { context } from '../App';
import { imageUrl } from './Url';

const Detailpage = () => {
  const { sample, test, sethide, setshow } = useContext(context);
  const fil = test.filter((item) => item.id === sample);
  const filtermovie = fil[0];

  useEffect(() => {
    sethide(false);
    setshow(false);
  }, [sethide, setshow]);

  return (
    <div className="detail-modal">
      <div className="detail-container">
        <img
          src={imageUrl + filtermovie?.backdrop_path}
          alt={filtermovie?.title || filtermovie.name}
          className="movie-background"
        />
        <div className="title-container">
          <h1 className="movie-titles">{filtermovie?.title || filtermovie.name}</h1>
        </div>
      </div>
      <div className="content-container">
        <p className="overview">{filtermovie?.overview}</p>
        <p className="release-date">Release Date: {filtermovie?.release_date || filtermovie.first_air_date}</p>
      </div>
    </div>
  );

}

export default Detailpage;
