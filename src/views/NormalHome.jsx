import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React from "react";
import { FeedList } from "../Feed/FeedList";

const dummyList = [
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이1",
        "diaryId": 1,
        "feeling": "NORMAL",
        "profileImg": "",
        "userName": "doha1",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이2",
        "diaryId": 2,
        "feeling": "NORMAL",
        "profileImg": "",
        "userName": "doha2",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이3",
        "diaryId": 3,
        "feeling": "NORMAL",
        "profileImg": "",
        "userName": "doha3",
        "likes" : 5,
    },
];

function NormalHome(props) {
    return (
        <div className="normal-home">

            <div className="normal-home-header">
                <Link to="/" className="normal-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="normal-content">
                <div className="normal-container">
                    <div className="normal-diary-container">
                        <h2 className="normal-diary-title">
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

export default withRouter(NormalHome);