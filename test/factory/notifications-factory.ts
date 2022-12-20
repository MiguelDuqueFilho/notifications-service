import { Content } from '@application/entidades/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entidades/notification/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-1',
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    ...override,
  });
}
