export class Quote {
  constructor(data) {
    this.content = data.content;
    this.author = data.author;
  }

  get Template() {
    return `
    <div>
      <h6>${this.content}</h6>
      <p>${this.author}</p>
    </div>
    `;
  }
}
