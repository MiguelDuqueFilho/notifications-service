export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLenghtValid = this.validateContentLength(content);
    if (!isContentLenghtValid) {
      throw new Error('Content Length error.');
    }

    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }
}
