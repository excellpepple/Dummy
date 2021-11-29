import React, {useState, useEffect} from 'react';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {notification, Result} from "antd";
import Empty from '../images/emptytag.svg';

export default function EmptyTags() {
    const greeting = 'Hello Function Component!';
    const openNotification = () => {
      notification['warning']({
        message: 'Empty tags',
        description:
          'Looks like you did not select any articles, so we cant generate any articles for you.',
        onClick: () => {
          console.log('Notification Clicked!');
        }
      })
    };
    useEffect(() => openNotification())
    return (
        <>

            <Result
            icon={<Image src={Empty} className="h-25 w-25 mt-5"/>}
            title="No article to show!"
            subTitle="Click the button below to choose your preferences. "
            extra={<Link to="/preference" className=" btn btn-lg  btn-outline-info" >Search</Link>}
          />
        </>
    );
}
 
