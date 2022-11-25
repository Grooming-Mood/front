

import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'

function Movie({id, year, title, summary, poster}){
    return (

        <div className ="movie card">

            <div className="wrapper" style={{backgroundImage:
                    `url(https://image.tmdb.org/t/p/original/${poster})`}}>
                <div className="header">
                    <ul className="menu-content">
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                        <h1 className="movie__title">{title}</h1>
                        <h4 className="movie__year">{year}</h4>
                        <br/>
                        <p className="movie__summary">{summary.slice(0, 180)}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    // genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;