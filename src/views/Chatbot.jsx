import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { FeedList } from "../Feed/FeedList";

const dummyList = [
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이1",
        "diaryId": 1,
        "feeling": "ANGRY",
        "profileImg": "",
        "userName": "doha1",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이2",
        "diaryId": 2,
        "feeling": "ANGRY",
        "profileImg": "",
        "userName": "doha2",
        "likes" : 5,
    },
    {
        "createdDate": "2022-10-31T07:29:57.732Z",
        "diaryContent": "하이3",
        "diaryId": 3,
        "feeling": "ANGRY",
        "profileImg": "",
        "userName": "doha3",
        "likes" : 5,
    },
];

function Chatbot(props) {
    const [ items, setItems ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)

    const [ ref, inView ] = useInView()

    useEffect(() => {
        if(inView && !loading) {
            setPage(prevState => prevState + 1)
        }
    }, [inView, loading])

    return (
        <div ref={ref} className="chatbot-home">

            <div className="chatbot-home-header">
                <Link to="/" className="chatbot-header-link">GroomingMood</Link>
                <p>당신의 감정을<br/>어루만지는 AI 일기</p>
            </div>

            <div className="chatbot-content">
                <div className="chatbot-container">

                    {/*<FeedList dataList={dummyList}  />*/}

                </div>
                <SideMenu></SideMenu>
            </div>
        </div>

    );

}

export default withRouter(Chatbot);