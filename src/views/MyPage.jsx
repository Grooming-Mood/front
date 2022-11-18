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

function MyPage(props) {
    const [page, set_page] = useState(1);
    const [feed, set_feed] = useState([]);
    const [myfeed, set_myfeed] = useState([]);
    const [userId, set_userId] = useState(1);
    const [cursor, set_cursor] = useState(1);

    const handlePageChange = (page) => {
        set_page(page);
    };

    // https://chanhuiseok.github.io/posts/react-13/
    useState(() => {
        axios.get(`http://ec2-52-196-145-123.ap-northeast-1.compute.amazonaws.com:8080/my-diary/${userId}?cursor=${cursor}&size=3`)
            .then((res) => {
                const data = res.data;
                set_feed(data.diaryList);
                console.log(data);

                if(data.hasNext) {
                    set_cursor(res.data.diaryList.nextCursor);
                }
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
                            나의 감정 일기
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

export default withRouter(MyPage);