import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('shoud be able create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipientId',
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
