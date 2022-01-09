export class Quote {
  constructor(data) {
    this.content = data.content;
    this.author = data.author;
  }

  get Template() {
    return `
    <div>
      <div>${this.content}</div>
      <div>${this.author}</div>
    </div>
    `;
  }
}
