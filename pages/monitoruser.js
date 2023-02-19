import Script from "next/script"

export default function Monitor() {

    const CLIENT_ID = '692168921946-mdrvoee9gu6gla8r4rttqpnkgunqeevc.apps.googleusercontent.com'
    const API_KEY = 'AIzaSyCBLTByi29EN1oqOLoUP493OpY91vKGps8';
    let gapiInited = false;
    let gisInited = false;
    let tokenClient;
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
    // document.getElementById('authorize_button').style.visibility = 'hidden';
    // document.getElementById('signout_button').style.visibility = 'hidden';

    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

    function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
    }

    async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
    }

    function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }

      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
          document.getElementById('authorize_button').style.visibility = 'visible';
        }
      }

      function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
          document.getElementById('signout_button').style.visibility = 'visible';
          document.getElementById('authorize_button').innerText = 'Refresh';
          await listUpcomingEvents();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

      function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
          document.getElementById('content').innerText = '';
          document.getElementById('authorize_button').innerText = 'Authorize';
          document.getElementById('signout_button').style.visibility = 'hidden';
        }
      }

      async function listUpcomingEvents() {
        let response;
        try {
          const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
        } catch (err) {
          document.getElementById('content').innerText = err.message;
          return;
        }

        const events = response.result.items;
        if (!events || events.length == 0) {
          document.getElementById('content').innerText = 'No events found.';
          return;
        }
        // Flatten to string to display
        const output = events.reduce(
            (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
            'Events:\n');
        document.getElementById('content').innerText = output;
      }


    return (
        <>
            <Script async defer src="https://apis.google.com/js/api.js" onLoad={ gapiLoaded } />
            <Script async defer src="https://accounts.google.com/gsi/client" onLoad={ gisLoaded } />

            <p>Google Calendar API Quickstart</p>

            <button id="authorize_button" onClick={handleAuthClick }>Authorize</button>
            <button id="signout_button" onClick={ handleSignoutClick }>Sign Out</button>

            <pre id="content"></pre>
        </>
    )
}

