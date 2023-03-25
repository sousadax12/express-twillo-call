# Twilio Call SOS Application

This application was created to be used as a simple SOS button that can be triggered by a Shelly Button within a home
network. It is designed to help elderly people or anyone who might need assistance when they are alone. Developed using
Node.js, Express.js, and the Twilio SDK, the application exposes two endpoints: /call and /health. The /call endpoint
initiates calls to all Twilio Verified Caller IDs when accessed using a GET request. The /health endpoint checks the
health status of the application.

## Requirements:

- Node.js 14.x or higher
- Express.js
- Twilio SDK
- dotenv

## Setup:

### Clone the repository:

    git clone https://github.com/sousadax12/express-twillo-sos.git
    cd express-twillo-sos

### Install the required dependencies:

    npm install

### Create a .env file in the project directory with the following content:

    TWILIO_ACCOUNT_SID=your_account_sid
    TWILIO_AUTH_TOKEN=your_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    BASIC_AUTH_USERNAME=your_basic_auth_username
    BASIC_AUTH_PASSWORD=your_basic_auth_password
    PORT=3000

Replace "your_account_sid", "your_auth_token", "your_twilio_phone_number", "your_basic_auth_username", and "
your_basic_auth_password" with the appropriate values.

## Running the Application:

To run the application, use the following command:

    npm start

The application will start and listen on port 3000 or the port specified in the PORT environment variable. When you send
a GET request to the /call endpoint, it will initiate calls to all Twilio Verified Caller IDs.

## Endpoints:

/call

    Method: GET
    Description: Initiates calls to all Twilio Verified Caller IDs.

/health

    Method: GET
    Description: Returns the health status of the application.