require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhoneNumber) {
    console.error('Environment variables not set correctly');
    process.exit(1);
}

const client = new twilio(accountSid, authToken);

app.get('/call', async (req, res) => {
    try {
        const verifiedCallerIds = await client.outgoingCallerIds.list();

        const callPromises = verifiedCallerIds.map(async (callerId) => {
            return client.calls.create({
                url: 'http://demo.twilio.com/docs/voice.xml', // Replace with your desired XML or TwiML Bin URL
                to: callerId.phoneNumber,
                from: twilioPhoneNumber,
            });
        });

        const calls = await Promise.all(callPromises);

        res.status(200).json({
            message: 'Calls initiated',
            callSids: calls.map((call) => call.sid),
        });
    } catch (error) {
        console.error('Error initiating calls:', error);
        res.status(500).json({ message: 'Failed to initiate calls' });
    }
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Application is healthy' });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`);
});
