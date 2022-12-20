import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content.value).toBeTruthy();
  });

  it('shoud not be able create a notification content with less than 5 caracters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('shoud not be able create a notification content with more than 240 caracters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
