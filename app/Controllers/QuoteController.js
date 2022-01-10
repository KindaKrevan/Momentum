import { ProxyState } from '../AppState.js';
import { quoteService } from '../Services/QuoteService.js';

function _drawQuote() {
  document.getElementById('quotes').innerHTML = ProxyState.quotes.Template;
}

export class QuoteController {
  constructor() {
    quoteService.getQuotes();
    ProxyState.on('quotes', _drawQuote);
  }
}
