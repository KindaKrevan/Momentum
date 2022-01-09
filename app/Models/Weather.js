export class Weather {
  constructor(data) {
    this.location = data.name;
    this.temp = data.main.temp;
  }

  get Template() {
    return `
    
    `;
  }
}
