import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";

import React, { useEffect, useState } from "react";

function RecommendHome(props) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user_id, set_userId] = useState(sessionStorage.getItem("userId"));

    useEffect(() => {
        fetch(`https://api.themoviedb.org?i=${props.match.params.id}&apikey=${process.env.APIKEY}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="recommend-home">

            <div className="recommend-home-header">
                <Link to="/" className="recommend-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="recommend-content">
                <div className="recommend-container">
                    <h2 className="recommend-title">
                        추천
                    </h2>


                    <section className="movies">
                        <div className="movie">
                            <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true"
                                 alt="" className="poster"/>
                            <div className="title">Room</div>
                            <div className="info">
                                <span className="length">117 min</span>
                                <span className="year">2015</span>
                            </div>
                            <div className="desc">
                                Jack is a young boy of 5 years old who has lived all his life in one room. He believes
                                everything within it are the only real things in the world. But what will happen when
                                his Ma suddenly tells him that there are other things outside of Room?
                            </div>
                        </div>
                        <div className="movie">
                            <img
                                src="https://github.com/supahfunk/supah-codepen/blob/master/movie-whiplash.jpg?raw=true"
                                alt="" className="poster"/>
                            <div className="title">Whiplash</div>
                            <div className="info">
                                <span className="length">167 min</span>
                                <span className="year">2015</span>
                            </div>
                            <div className="desc">
                                Under the direction of a ruthless instructor, a talented young drummer begins to pursue
                                perfection at any cost, even his humanity.
                            </div>
                        </div>
                        <div className="movie">
                            <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true"
                                 alt="" className="poster"/>
                            <div className="title">Mad Max</div>
                            <div className="info">
                                <span className="length">120 min</span>
                                <span className="year">2015</span>
                            </div>
                            <div className="desc">
                                An apocalyptic story set in the furthest reaches of our planet, in a stark desert
                                landscape where humanity is broken, and most everyone is crazed fighting for the
                                necessities of life. Within this world exist two rebels on the run who just might be
                                able to restore order. There's Max, a man of action and a man of few words, who seeks
                                peace of mind following the loss of his wife and child in the aftermath of the chaos.
                            </div>
                        </div>
                        <div className="movie">
                            <img
                                src="https://github.com/supahfunk/supah-codepen/blob/master/movie-therevenant.jpg?raw=true"
                                alt="" className="poster"/>
                            <div className="title">The Revenant</div>
                            <div className="info">
                                <span className="length">156 min</span>
                                <span className="year">2015</span>
                            </div>
                            <div className="desc">
                                In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those
                                who left him for dead after a bear mauling.
                            </div>
                        </div>
                    </section>
                    <div className="detail">
                        {/*<svg className="close">*/}
                        {/*    <use xlink:href="#close"></use>*/}
                        {/*</svg>*/}
                        <div className="movie">

                            <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true"
                                 alt="" className="poster"/>
                            <div className="title">Room</div>
                            <div className="info">
                                <span className="length">117 min</span>
                                <span className="year">2015</span>
                            </div>
                            <div className="desc">
                                Jack is a young boy of 5 years old who has lived all his life in one room. He believes
                                everything within it are the only real things in the world. But what will happen when
                                his Ma suddenly tells him that there are other things outside of Room?
                            </div>

        {/*                    <button className="play">*/}
        {/*                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"*/}
        {/*                             version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 232.153 232.153"*/}
        {/*                             style="enable-background:new 0 0 232.153 232.153;" xml:space="preserve"*/}
        {/*                             width="10px" height="10px">*/}
        {/*  <g id="Play">*/}
        {/*    <path style="fill-rule:evenodd;clip-rule:evenodd;"*/}
        {/*          d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z"*/}
        {/*          fill="#FFFFFF"/>*/}
        {/*  </g>*/}
        {/*</svg>*/}
        {/*                        play movie*/}
        {/*                    </button>*/}


                        </div>
                    </div>


                </div>
            </div>
            <SideMenu></SideMenu>
        </div>
    );
}

export default withRouter(RecommendHome);