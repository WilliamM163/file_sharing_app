# File Sharing App
## A simple and secure file sharing application for your local network.
This project provides a web-based interface to easily transfer files between devices on your home network.  Designed with technical users in mind, it offers a reliable and customizable solution for sharing files without relying on cloud services.

## Design
App Design: [style.png](./style.png)  
DB Design: [db_diagram.png](./db_diagram.png)

## To dos
**Features**
- [ ] Setting up APIS for ...
  - [x] Getting & Registering Devices
    - [ ] Storing deviceID in localStorage
  - [ ] Getting & Adding Friends
  - [ ] Getting Recent Files
  - [ ] Uploading File `IN THE WORKS!`
    - [ ] Add file upload status bar (on client side)
    - [ ] Associating File's with Users
  - [ ] Notifying user when file is sent
    - [ ] Learn how to use Websockets + Service Workers to make Push Notifications

**Implementing JWT Authentication on the client side**
- [x] On app startup to validate the user JWT token
- [x] Redirecting to login page when JWT token is invalid
- [x] Validate JWT token when app logic api's are used
- [ ] Handle Refresh Tokens

## Features
- **Local Network File Transfer:** Share files directly between devices connected to the same local network.
- **Web-Based Interface:** A user-friendly web interface for easy file management and transfer.
<!-- - **Secure Connection:** [Mention any security measures implemented, e.g., HTTPS, authentication] -->

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
