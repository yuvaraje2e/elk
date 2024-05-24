// logger.js

function sendLogToLogstash(logData) {
    fetch('http://217.18.52.61:5044', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logData)
    })
    .then(response => {
        console.log('Log sent successfully');
    })
    .catch(error => {
        console.error('Error sending log', error);
    });
}

// Example usage: log an event
function logEvent(message) {
    sendLogToLogstash({ message: message });
}

// Example usage: log an error
function logError(error) {
    sendLogToLogstash({ error: error });
}

