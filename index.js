// Import the required modules
const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
    keyFile: '/ServiceAccountKey/credentials.json',
    scopes: ['https://www.googleapis.com/auth/calendar']
});
const calendar = google.calendar({ version: 'v3' });
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