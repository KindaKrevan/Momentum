import { ProxyState } from '../AppState.js';
import { quoteService } from '../Services/QuoteService.js';

function _drawQuote() {
  let template = '';
  ProxyState.quotes.forEach(q => (template += q.template));
  document.getElementById('quote').innerHTML = template;
}

export class QuoteController {
  constructor() {
    quoteService.getQuotes();
    ProxyState.on('quotes', _drawQuote);
  }
}
