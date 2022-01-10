export class Quote {
  constructor(data) {
    this.content = data.content;
    this.author = data.author;
  }

  get Template() {
    return `
    <div>
      <div class='quote'>"${this.content}"</div>
      <div class='author'>${this.author}</div>
    </div>
    `;
  }
}
