import Header from '../components/Header';
import Settings from '../components/Settings';
import DevicesList from '../components/DevicesList';
import FriendsList from '../components/FriendsList';
import RecentList from '../components/RecentList';

import sendFile from '../functions/sendFile';

function Home({ setIsAuth }) {
    return (
        <>
            <Header></Header>
            <Settings setIsAuth={setIsAuth} ></Settings>
            <DevicesList></DevicesList>
            <FriendsList></FriendsList>
            <RecentList></RecentList>
            <input type="file" className="input_file" id="" onChange={sendFile} multiple />
        </>
    );
}

export default Home;