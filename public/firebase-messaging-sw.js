importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

// importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

// if ('serviceWorker' in navigator) {
//    navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function (registration) {
//          console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function (err) {
//          console.log('Service worker registration failed, error:', err);
//       });
// }

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyAfGJaPYddvy0-bl25yJxzHT6PYTTBNhVc',
    authDomain: 'streamingweb-3409f.firebaseapp.com',
    projectId: 'streamingweb-3409f',
    storageBucket: 'streamingweb-3409f.appspot.com',
    messagingSenderId: '673438523518',
    appId: '1:673438523518:web:48bf27c43bea041397b82f',
    measurementId: 'G-FFG0Y85R1C',
  });

  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(
      `[Service Worker] Push had this data: `,
      JSON.parse(event.data.text())
    );
  });
  self.addEventListener('notificationclick', function (event) {
    const userRole = +localStorage.getItem('userRole');
    const subscriberUrl =
      'https://api.bittenmusic.com/subscriber/notifications';
    const artistUrl = 'https://api.bittenmusic.com/artist/notifications';
    const isSubscriber = () => {
      return userRole === 2 ? subscriberUrl : artistUrl;
    };
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((windowClients) => {
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          // If so, just focus it.
          if (client.url === isSubscriber() && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(isSubscriber());
        }
      })
    );
  });

  const initMessaging = firebase.messaging();
} catch (e) {
  console.log('ERROR FROM SERVICE WORKER');
}
