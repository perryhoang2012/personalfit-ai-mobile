import {Notifications} from 'react-native-notifications';

// Lắng nghe thông báo đến khi app đang chạy foreground
Notifications.events().registerNotificationReceivedForeground(
  (notification, completion) => {
    console.log('Notification received in foreground:', notification);

    // Hiển thị thông báo ngay lập tức
    Notifications.postLocalNotification({
      title: notification.title || 'New Notification',
      body: notification.body || 'You have a new message!',
      sound: 'default',
      category: 'DEFAULT',
      link: 'app://home',
    });

    completion({alert: true, sound: true, badge: false});
  },
);

// Lắng nghe sự kiện khi người dùng nhấn vào thông báo
Notifications.events().registerNotificationOpened(
  (notification, completion) => {
    console.log('Notification opened:', notification);
    completion();
  },
);
