import { useState, useEffect } from 'react';
import getFriends from '../functions/getFriends';

function FriendsList() {
    const [friends, setFriends] = useState([]);

    const tile = (sendList) => {
        return sendList.map(item => {
            return (
                <li className='tile'>
                    {item.profile_pic
                        ? <img src={item.profile_pic} alt="Profile Pic" width="75px" height="75px"/>
                        : <img src="/public/icons/account.svg" alt="Account Icon" width="75px" height="75px"/>
                    }
                    {item.name}
                </li>
            )
        });
    }

    useEffect(() => {
        getFriends().then(data => {
            setFriends(data.friends);
        });
    }, []);

    return (
        <div className='container'>
            <h2 className='title'>Friends</h2>
            <ul className='sendList'>
                {tile(friends)}
            </ul>
        </div>
    )
}

export default FriendsList;