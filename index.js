const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    '30570084324-gq9n9off4afu37or2nv38nmjo3k5vj4t.apps.googleusercontent.com',
    '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',
    //REDIRECT_URI
);

const scopes = [
    'https://www.googleapis.com/auth/calendar'
];

// Generate the URL that the user will need to visit to authorize the application
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
});

console.log('Authorize this app by visiting this url:', authUrl);

// After the user authorizes the application, the API will redirect to the specified URI with an authorization code
// You can use this code to obtain an access token and refresh token for the user
oauth2Client.getToken(authorizationCode, (err, token) => {
    if (err) {
        console.error('Error retrieving access token', err);
        return;
    }

    // Set the access token on the OAuth2 client for future API calls
    oauth2Client.setCredentials(token);
});

oauth2Client.setCredentials({
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    token_type: 'Bearer',
    expiry_date: new Date(tokens.expiry_date),
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
let calendarId = "https://calendar.google.com/calendar/embed?src=nabeel.sohail2630%40outlook.com&ctz=Asia%2FKarachi"

// Define the parameters to create an event
const createEventParams = {
    calendarId: calendarId,
    resource: {
        summary: 'Test Event',
        description: 'This is a test event.',
        start: {
            dateTime: '2023-03-28T09:00:00-07:00',
            timeZone: 'America/Los_Angeles'
        },
        end: {
            dateTime: '2023-03-28T17:00:00-07:00',
            timeZone: 'America/Los_Angeles'
        },
        reminders: {
            useDefault: true
        }
    }
};

// Create a new event
calendar.events.insert(createEventParams, (err, res) => {
    if (err) {
        console.error('Error creating event:', err);
    } else {
        console.log('Event created:', res.data.htmlLink);
    }
});

/* // Retrieve an event
const getEventParams = {
    calendarId: calendarId,
    eventId: '<YOUR_EVENT_ID>'
};
calendar.events.get(getEventParams, (err, res) => {
    if (err) {
        console.error('Error retrieving event:', err);
    } else {
        console.log('Event retrieved:', res.data);
    }
});

// Update an event
const updateEventParams = {
    calendarId: calendarId,
    eventId: '<YOUR_EVENT_ID>',
    resource: {
        summary: 'Test Event (Updated)',
        description: 'This is an updated test event.',
        start: {
            dateTime: '<YYYY-MM-DDTHH:mm:ss.sssZ>',
            timeZone: 'America/Los_Angeles'
        },
        end: {
            dateTime: '<YYYY-MM-DDTHH:mm:ss.sssZ>',
            timeZone: 'America/Los_Angeles'
        },
        attendees: [
            { email: '<ATTENDEE_EMAIL_1>' },
            { email: '<ATTENDEE_EMAIL_2>' }
        ],
        reminders: {
            useDefault: true
        }
    }
};
calendar.events.update(updateEventParams, (err, res) => {
    if (err) {
        console.error('Error updating event:', err);
    } else {
        console.log('Event updated:', res.data.htmlLink);
    }
});

// Delete an event
const deleteEventParams = {
    calendarId: calendarId,
    eventId: '<YOUR_EVENT_ID>'
};
calendar.events.delete(deleteEventParams, (err, res) => {
    if (err
    ) {
        console.error('Error deleting event:', err);
    } else {
        console.log('Event deleted.');
    }
}); */