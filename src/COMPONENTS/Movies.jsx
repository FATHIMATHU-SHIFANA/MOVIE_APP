import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { imageUrl } from './Url';
import { useNavigate } from 'react-router-dom';
import { context } from '../App';


const Movies = ({ pop }) => {
  const { setsample, settest, sethide, searchinp, setshow, setsearchhide } = useContext(context);
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.get(pop).then((res) => setmovie(res.data.results));
    sethide(true);
    setshow(false);
    setsearchhide(false);
  }, [pop, sethide, setshow, setsearchhide]);

  const nav = useNavigate();
  const click = (arg) => {
    setsample(arg);
    settest(movie);
    nav("/detailpage")
  };

  const filteredMovie = movie.filter((item) => (item.title || item.name).toLowerCase().includes(searchinp));

  return (
    <div className="movie">
      {(searchinp.length > 0 ? filteredMovie : movie).map((arg) => {
        return (
          <Card key={arg.id} className="movie-card">
            <div className="image">
              <Card.Img variant="top" onClick={() => click(arg.id)} src={imageUrl + arg.backdrop_path} />
            </div>
            <Card.Body>
              <Card.Title className="movie-title">{arg.title || arg.name}</Card.Title>
              <Card.Text className="movie-info">
                Popularity: {arg.popularity}
              </Card.Text>
              <Card.Text className="movie-info">
                Release Date: {arg.release_date || arg.first_air_date}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Movies;
