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
                <Link to="/" className="angry-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="recommend-content">
                <div className="recommend-container">
                    <h2 className="recommend-title">
                        추천
                    </h2>
                </div>
            </div>
            <SideMenu></SideMenu>
        </div>
    );
}

export default withRouter(RecommendHome);