import Header from '../components/Header';
import SettingsModal from '../components/Settings';
import DevicesList from '../components/DevicesList';
import FriendsList from '../components/FriendsList';
import RecentList from '../components/RecentList';

import sendFile from '../functions/sendFile';

function Home({ setIsAuth }) {
    return (
        <>
            <Header></Header>
            <SettingsModal setIsAuth={setIsAuth} ></SettingsModal>
            <DevicesList></DevicesList>
            <FriendsList></FriendsList>
            <RecentList></RecentList>
            <input type="file" className="input_file" id="" onChange={sendFile} multiple />
        </>
    );
}

export default Home;