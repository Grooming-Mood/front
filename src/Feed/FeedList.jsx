import React, { useState } from "react";
import {
    convertIcon,
    convertImage
} from "../utils/function";
import dateFormat from "dateformat";


export const FeedList = ({ dataList }) => {
    return (
        <div>
            <div>
                {dataList.map((it) => {
                    return (

                        <div className="data-container"
                             key = {it.diaryId}>

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

                            <div className="data-date">
                                <span>{ dateFormat(it.createdDate, "yyyy-mm-dd HH:mm") }</span>
                            </div>

                            <div className="data-likes">
                                {
                                    (convertIcon(it.feeling))
                                }
                                <span>( { it.likes } )</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
