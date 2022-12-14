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
    const [user_id, set_userId] = useState(sessionStorage.getItem("userId"));
    const [cursor, set_cursor] = useState('');
    const [loading, set_loading] = useState(false);

    const handlePageChange = (page) => {
        set_page(page);
        set_loading(true);

        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feed-diary/all-paging?cursor=${cursor}&size=3`)
            .then((res) => {
                const data = res.data;
                set_feed(data.diaryList);

                if(data.hasNext) {
                    set_cursor(data.nextCursor);
                }

                set_loading(false);
            });
    };

    useState(() => {
        set_loading(true);
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/feed-diary/all-paging?size=3`)
            .then((res) => {
                const data = res.data;
                set_feed(data.diaryList);

                if(data.hasNext) {
                    set_cursor(data.nextCursor);
                }

                set_loading(false);
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

                    <FeedList dataList={feed} loading={loading}  />

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