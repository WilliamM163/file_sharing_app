import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/settings');
    }

    return (
        <header>
            <h1>File Share</h1>
            <img
                src="/icons/settings.svg"
                alt="settings"
                width="35px"
                height="35px"
                onClick={onClick}
            />
        </header>
    );
}

export default Header;