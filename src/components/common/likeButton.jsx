import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const LikeButton = ({onLike, id, like}) => {
    return <i onClick={() => onLike(id,like)} className={like ? "fa fa-heart" : "fa fa-heart-o"}/>
};
export default LikeButton;

