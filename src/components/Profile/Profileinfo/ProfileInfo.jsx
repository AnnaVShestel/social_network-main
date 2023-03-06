import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJQq_-DhuwRXiRIHcypaS8QpphdlR_4nJW-mlHakPX5JiJLqLQI18ypV-8vxLkfqS4D8&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;