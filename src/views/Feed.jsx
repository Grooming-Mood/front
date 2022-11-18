import { Link, withRouter } from "react-router-dom";
import SideMenu from "./SideMenu";
import React, {
    useEffect,
    useState,
} from "react";
import { FeedList } from "../Feed/FeedList";
import Pagination from "react-js-pagination";
import "../styles/pagination.css";
import axios from "axios";

function Feed(props) {
    const [page, set_page] = useState(1);
    const [feed, set_feed] = useState([]);
    const [myfeed, set_myfeed] = useState([]);
    const [userId, set_userId] = useState(0);
    const [button, set_button] = useState(false);

    const handlePageChange = (page) => {
        set_page(page);
    };

    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feed-diary/all-paging?cursor=1&size=3`)
            .then((res) => {
                console.log(res.data);
                set_feed(res.data.diaryList);
            });
    }, []);

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
                            전체 감정 일기
                        </h2>
                    </div>

                    <FeedList dataList={feed}  />

                </div>
                <SideMenu></SideMenu>
            </div>
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

    );

}

export default withRouter(Feed);