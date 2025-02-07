# File Sharing App
## A simple and secure file sharing application for your local network.
This project provides a web-based interface to easily transfer files between devices on your home network.  Designed with technical users in mind, it offers a reliable and customizable solution for sharing files without relying on cloud services.

## Currently working on
### High Priority
**Implementing JWT Authentication on the client side**
- [x] On app startup to validate the user JWT token
- [x] Redirecting to login page when JWT token is invalid
- [x] Validate JWT token when app logic api's are used

### Client Design
[Link to design](#client-design)
- [ ] Implementing App Design in App
- [ ] Setting up dummy API's for different features. Such as ...
  - [ ] Getting Friends
  - [ ] Getting Your Devices
  - [ ] Recent Files

**File upload**
- [x] Research best practices for secure file uploads (e.g., size limitations, type restrictions).
- [x] Implement client-side form handling for file selection using the `<input type='file'>` element.
- [x] Develop server-side logic to receive, validate, and store uploaded files securely.
- [x] Associate file upload with user
- [ ] Associate file sent to device or other user `IN THE WORKS!`

### Lower Priority  
**Registering multiple devices on the same account**
- [ ] Explore options for linking devices to an account (e.g., HTTP headers, unique device identifiers).

**Recieving files**
- [ ] Research notification methods for specific devices (e.g., WebSockets, push notifications).  
    Explore libraries or services that can handle device-specific notifications.   

**Sending files to a different user**
- [ ] Design and implement a contact list feature to allow users to send files to other registered accounts.

## Features
- **Local Network File Transfer:** Share files directly between devices connected to the same local network.
- **Web-Based Interface:** A user-friendly web interface for easy file management and transfer.
<!-- - **Secure Connection:** [Mention any security measures implemented, e.g., HTTPS, authentication] -->

## Client Design <a name="#client-design"></a>
![Design File](./File%20Share.png)

## Installation
1. **Dependencies:** Ensure you have the following installed on your system:
    - Node.js with npm  
    - PostgreSQL

2. **Clone Repository:**  
    ```
    git clone https://github.com/WilliamM163/file_sharing_app.git
    ```

3. **Navigate to Project Directory:**  
    ```
    cd file_sharing_app
    ```

4. **Database Setup:** Create a PostgreSQL database and run the setup script:  
    ```
    psql -U [your_postgresql_username] -d [your_postgresql_database_name] -f setup.sql
    ```
5. **Edit Environment Variables:**
In the server folder, adjust varaibles in `.env.template` and rename the file to `.env`.

6. **Start Client:** Start the client app using the following command:
    ```
    cd client
    npm start
    ```

7. **Start Server:** Start the API server using the following command:  
    ```
    cd server
    npm start
    ```

## Usage
Once the server is running, you can access the file sharing application through your web browser at http://localhost:5173. 

<!-- ## Contributing
Contributions are welcome! Please refer to the CONTRIBUTING.md file for guidelines on how to contribute to this project. -->

## Remember to:
Replace [your_postgresql_username] and [your_postgresql_database_name] with your database credentials.
