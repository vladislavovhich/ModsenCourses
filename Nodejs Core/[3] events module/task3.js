const EventEmitter = require('events');

class NotificationService extends EventEmitter {
  constructor() {
    super()
  }

  sendEmail(to, subject, body) {
    console.log(`Отправлен email на ${to}:`);
    console.log(`Тема: ${subject}`);
    console.log(`Сообщение: ${body}`);
    this.emit('emailSent', { to, subject, body });
  }

  sendSMS(phoneNumber, message) {
    console.log(`Отправлен SMS на ${phoneNumber}: ${message}`);
    this.emit('smsSent', { phoneNumber, message });
  }

  sendPushNotification(deviceToken, title, body) {
    console.log(`Отправлено push-уведомление на устройство с токеном ${deviceToken}:`);
    console.log(`Заголовок: ${title}`);
    console.log(`Сообщение: ${body}`);
    this.emit('pushNotificationSent', { deviceToken, title, body });
  }
}

const notificationService = new NotificationService();

notificationService.on('emailSent', (data) => {
  console.log('Получено подтверждение о отправке email:');
  console.log(data);
});


notificationService.on('smsSent', (data) => {
  console.log('Получено подтверждение о отправке SMS:');
  console.log(data);
});


notificationService.on('pushNotificationSent', (data) => {
  console.log('Получено подтверждение о отправке push-уведомления:');
  console.log(data);
});

notificationService.sendEmail('modsen@example.com', 'Важное сообщение', 'Привет! Это важное сообщение.');
notificationService.sendSMS('+3754444444444', 'Это SMS уведомление.');
notificationService.sendPushNotification('push', 'Новое обновление', 'Проверьте новые функции приложения.');
