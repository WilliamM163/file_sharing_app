import { useEffect, useState } from "react"
import getRecents from "../functions/getRecents";

function RecentList() {
    const [recentFiles, setRecentFiles] = useState([]);

    const tile = (files) => {
        const fileType = {
            'PHOTO': '/icons/filetypes/photo.svg',
            'VIDEO': '/icons/filetypes/video.svg',
            'AUDIO': '/icons/filetypes/audio.svg',
            'PDF': '/icons/filetype/pdf.svg',

            getIcon(fileType) {
                return this[fileType] || '/icons/filetypes/document.svg';
            }
        };

        return files.map(file => {
            return (
                <div>
                    {file.type ? <img src={fileType.getIcon(file.type)} alt={file.type} /> : <></>}
                    {file.name}
                </div>
            )
        });
    }

    useEffect(() => {
        getRecents().then(data => {
            setRecentFiles(data.files);
        });
    }, []);

    return (
        <div>
            <h2>Recent Files</h2>
            {tile(recentFiles)}
        </div>
    )
}

export default RecentList;