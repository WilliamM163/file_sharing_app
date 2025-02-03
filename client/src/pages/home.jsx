function Home() {
    const onSubmit = (e) => {
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
    
    return (
    <>
        <h1>Home</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="FileUpload">Select a file:</label>
            <input type="file" id="form" multiple />
            <br />
            <button type='Submit'>Send</button>
        </form>
    </>
    );
}

export default Home;