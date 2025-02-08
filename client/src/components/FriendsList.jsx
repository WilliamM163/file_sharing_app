import { useState, useEffect } from 'react';
import getFriends from '../functions/getFriends';

function FriendsList() {
    const [friends, setFriends] = useState([]);

    const tile = (sendList) => {
        return sendList.map(item => {
            return (
                <div>
                    {item.profile_pic ? <img src={item.profile_pic} alt="Profile Pic" /> : <></>}
                    {item.name}
                </div>
            )
        });
    }

    useEffect(() => {
        getFriends().then(data => {
            setFriends(data.friends);
        });
    }, []);

    return (
        <div>
            <h2>Friends</h2>
            {tile(friends)}
        </div>
    )
}

export default FriendsList;