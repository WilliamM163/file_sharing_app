import { useState, useEffect } from 'react';
import getFriends from '../functions/getFriends';

function FriendsList() {
    const [friends, setFriends] = useState([]);

    const onClick = (email) => {
        const selectFile = document.querySelector("input[type=file]")
        selectFile.setAttribute('id', `FRIEND:${email}`)
        selectFile.click();
    }

    const tile = (sendList) => {
        return sendList.map(item => {
            return (
                <li className='tile' onClick={() => {onClick(item.email)}}>
                    {item.profile_pic
                        ? <img src={item.profile_pic} alt="Profile Pic" width="75px" height="75px"/>
                        : <img src="/icons/account.svg" alt="Account Icon" width="75px" height="75px"/>
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