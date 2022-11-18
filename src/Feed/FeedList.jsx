import React, {useEffect, useState} from "react";
import {
    convertIcon,
    convertImage
} from "../utils/function";
import dateFormat from "dateformat";
import {Link} from "react-router-dom";


export const FeedList = ({ dataList }) => {

    const getPostByNo = no => {
        const array = FeedList.filter(x => x.it.diaryId == no);
        if (array.length == 1) {
            return array[0];
        }
        return null;
    }


    const [like, setLike] = useState(false);
    useEffect(async() => {
        const fetchData = async () => {
            // const res = await axios.get(...)
            // if (res.data.likes > 0) setLike(true)
            setLike(true);
        }
        await fetchData()
    }, []);

    const toggleLike = async (e) => {
        // const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름
        setLike(!like)
    }



    if(dataList.length > 0) {
        return (
            <div>
                <div>
                    {dataList.map((it) => {
                        return (

                            <div className="data-container" key={ it.diaryId }>

                                <div className="data-image">
                                    {
                                        (convertImage(it.feeling))
                                    }
                                </div>

                                <div className="data-content">
                                    <span className="data-content-user-name"> { it.userName }</span>
                                    <br/>
                                    <span>{ it.diaryContent }</span>
                                </div>
                                <Link to={{pathname: `/detail/${it.diaryId}`}}>
                                    <div className="data-button">
                                            <button className="custom-btn btn-16">상세 보기</button>
                                        
                                    </div>
                                </Link>

                                <div className="data-date">
                                    <span>{ it.createdDate[0] +"-" + it.createdDate[1] + "-" + it.createdDate[2] + " " + it.createdDate[3] + ":" + it.createdDate[4] }</span>
                                </div>

                                {/*<div className="data-likes">*/}
                                {/*    {*/}
                                {/*        (convertIcon(it.feeling, toggleLike))*/}
                                {/*    }*/}
                                {/*    <span>( { it.likes ? it.likes : 0 } )</span>*/}
                                {/*</div>*/}

                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

};
