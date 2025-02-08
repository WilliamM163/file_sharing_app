const uploadFile = (e) => {
    e.preventDefault();
    const files = e.target.form.files;

    if (files.length === 0) {
        alert('Please Select A File To Send!');
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
    }

    fetch(`${import.meta.env.VITE_API_URL}/send/file`, {
        method: 'POST',
        headers: { 'Authorization': accessToken },
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('SUCCESS');
        }
    });
    
}

export default uploadFile;