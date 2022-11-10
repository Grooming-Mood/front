import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React, {
    useEffect,
    useState,
} from "react";
import { FeedList } from "../Feed/FeedList";
import Pagination from "react-js-pagination";
import "../styles/normal-pagination.css";
import axios from "axios";

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
];

function NormalHome(props) {
    const [page, setPage] = useState(1);
    const [feed, set_feed] = useState([]);
    const handlePageChange = (page) => {
        setPage(page);
    };

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feed-diary/normal`)
            .then((res) => {
                set_feed(res.data.diaryList);
            })
    }, []);

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

                    <FeedList dataList={feed}  />

                </div>
                <SideMenu></SideMenu>
            </div>
            <div className="normal-pagination">
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />
            </div>
        </div>

    );

}

export default withRouter(NormalHome);