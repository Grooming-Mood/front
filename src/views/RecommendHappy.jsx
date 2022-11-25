import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/recommendation-happy.css';
import Movie from "../Movie/Movie";

function RecommendHappy(props) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user_id, set_userId] = useState(sessionStorage.getItem("userId"));
    const [user_name, set_userName] = useState();

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/user/${user_id}/info`)
            .then((res) => {
                set_userName(res.data.name);
            })
    });

    useState(async() => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1&&language=ko-KR`
        );

        const data = await response.json();
        const results = data.results;
        const filteredResults = results.filter(movie => movie.genre_ids.includes(16 | 12));
        const startIndex = Math.random() * 16;
        const splitResults = filteredResults.slice(startIndex, startIndex + 4);
        await setResults(splitResults);
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

                    <div className="movies">
                        { results.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.release_date}
                                title={movie.title}
                                summary={movie.overview}
                                poster= {movie.poster_path}
                            />
                        ))}
                    </div>

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>
    );
}

export default withRouter(RecommendHappy);