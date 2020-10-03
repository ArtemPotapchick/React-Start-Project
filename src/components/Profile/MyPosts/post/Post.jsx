import React from 'react';
import s from './Post.module.css'


const  Post = (props) => {
    return (<div>
       
        <div className={s.item}>
            <img src="https://1.bp.blogspot.com/-e7yfsMSXlag/VtNZ5rJVKDI/AAAAAAABhfs/GpTVlgKEVak/s1600/AVA%2BALLAN%2B%252871%2529.jpg"></img>
            {props.message}
            <div>
            <span>{props.like}</span>
            </div>
   </div>
       
    </div>
    )
    
}

export default Post;
