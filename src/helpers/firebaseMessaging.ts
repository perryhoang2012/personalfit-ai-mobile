import messaging from '@react-native-firebase/messaging';

// Request permission for notifications (only for iOS)
async function requestPermission() {
  try {
    // Request permission for notifications
    const authStatus = await messaging().requestPermission();

    // Check the permission status
    if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has granted permission!');
    } else if (authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      console.log('User has granted provisional permission!');
    } else {
      console.log('User has NOT granted permission!');
    }
  } catch (error) {
    console.error('Error requesting permission:', error);
  }
}

// Get the device's FCM token
async function getToken() {
  try {
    await messaging().registerDeviceForRemoteMessages();

    // Get FCM token
    const token = await messaging().getToken();

    if (token) {
      console.log('FCM Token:', token);
      // Send the token to your server to manage subscriptions
    } else {
      console.log('No token yet');
    }
  } catch (error) {
    console.error('Error getting token:', error);
  }
}

// Handle received messages when the app is in the foreground
messaging().onMessage(async remoteMessage => {
  console.log('Message received:', remoteMessage);
  // Process message data here (show notifications, update UI, etc.)
});

// Handle when the app is opened from a notification
messaging().onNotificationOpenedApp(remoteMessage => {
  console.log(
    'Notification caused app to open from quit state:',
    remoteMessage.notification,
  );
});

// Handle notifications when the app is in the background or terminated
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Initialize Firebase Messaging
const initFirebase = async () => {
  try {
    // Request notification permission
    await requestPermission();

    // Get FCM token for the device
    await getToken();
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
};

// Export the initialization function
export default initFirebase;

// Call the initFirebase function when the app starts or component mounts
initFirebase();
