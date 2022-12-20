import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';

import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factory/notifications-factory';

describe('Unread Notification', () => {
  it('shoud be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unReadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });
  it('shoud be able to unread a notification a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unReadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
