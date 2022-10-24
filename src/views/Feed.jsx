import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React from "react";


const dummyList = [
    {
        id: 1,
        feeling: "ANGRY",
        content: "하이",
        date: "2021-08-01",
    },
    {
        id: 2,
        feeling: "ANGRY",
        content: "하이",
        date: "2021-08-01",
    },
    {
        id: 3,
        feeling: "ANGRY",
        content: "하이",
        date: "2021-08-01",
    },
];

const FeedList = ({ dataList }) => {
    return (
        <div>
            <div>
                {dataList.map((it) => {
                    return (
                      <div key = {it.id}>
                          <div>
                              <span>감정: { it.feeling }</span>
                          </div>
                          <div>
                              <span>내용 : { it.content }</span>
                          </div>
                          <div>
                              <span>보고 : { it.datetime }</span>
                          </div>
                      </div>
                    );
                })}
            </div>
        </div>
    );
};

function Feed(props) {
    return (
        <div className="home">

            <div className="home-header">
                <Link to="/" className="header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="feed-content">
                <div className="feed-container">
                    <div className="diary-container">
                        <h2 className="diary-title">
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

export default withRouter(Feed);