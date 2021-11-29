import React, {useState, useEffect} from 'react';
import {Avatar, Comment, Tooltip} from "antd";
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

export default function Article(props) {




      const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={props.likes}>
            {React.createElement(props.action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{props.likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={props.dislike}>
            {React.createElement(props.action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{props.dislike}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ];

    return (
        <>
            <Comment
              actions={actions}
              author={<a>{props.articles.title}</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
        </>
    );
}
 
