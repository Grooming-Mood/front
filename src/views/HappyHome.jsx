import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React from "react";
import { FeedList } from "../Feed/FeedList";

const dummyList = [
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이1",
        "diaryId": 1,
        "feeling": "HAPPY",
        "profileImg": "",
        "userName": "doha1",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이2",
        "diaryId": 2,
        "feeling": "HAPPY",
        "profileImg": "",
        "userName": "doha2",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이3",
        "diaryId": 3,
        "feeling": "HAPPY",
        "profileImg": "",
        "userName": "doha3",
        "likes" : 5,
    },
];

function HappyHome(props) {
    return (
        <div className="happy-home">

            <div className="happy-home-header">
                <Link to="/" className="happy-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="happy-content">
                <div className="happy-container">
                    <div className="happy-diary-container">
                        <h2 className="happy-diary-title">
                            나의 감정일기
                        </h2>
                    </div>

                    <FeedList dataList={dummyList}  />

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(HappyHome);