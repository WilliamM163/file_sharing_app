import DevicesList from '../components/DevicesList';
import FriendsList from '../components/FriendsList';
import RecentList from '../components/RecentList';

function Home() {
    
    return (
    <>
        <header>
            <h1>File Share</h1>
            <img src="/icons/settings.svg" alt="settings" width="35px" height="35px" />
        </header>

        <DevicesList></DevicesList>
        <FriendsList></FriendsList>
        <RecentList></RecentList>
    </>
    );
}

export default Home;