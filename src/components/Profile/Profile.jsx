import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
    return (<div className={s.content}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="#"></img>
        <div>
            ava+description
   </div>
  <MyPosts/>
    </div>

    )
}

export default Profile;
