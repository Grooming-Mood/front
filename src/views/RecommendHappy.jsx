import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/recommendation-happy.css';

function RecommendHappy(props) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user_id, set_userId] = useState(sessionStorage.getItem("userId"));
    const [user_name, set_userName] = useState();

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/${user_id}/info`)
            .then((res) => {
                set_userName(res.data.name);
            })
    });

    useEffect(() => {
        fetch(`https://api.themoviedb.org?i=${props.match.params.id}&apikey=${process.env.APIKEY}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="recommend-happy">
            <div className="recommend-happy-header">
                <Link to="/" className="recommend-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="recommend-happy-content">
                <div className="recommend-happy-container">
                    <div className="recommend-header-container">
                        <h2 className="recommend-header-title">
                            {user_name}님! 행복한 날에 영화 어때요?
                        </h2>
                    </div>


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

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>
    );
}

export default withRouter(RecommendHappy);