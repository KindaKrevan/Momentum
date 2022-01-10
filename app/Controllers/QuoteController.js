import { ProxyState } from '../AppState.js';
import { quoteService } from '../Services/QuoteService.js';

function _drawQuote() {
  const quotes = ProxyState.quotes;
  let template = '';
  quotes.forEach(q => (template += q.template));
  document.getElementById('quotes').innerHTML = template;
}

export class QuoteController {
  constructor() {
    quoteService.getQuotes();
    ProxyState.on('quotes', _drawQuote);
  }
}
