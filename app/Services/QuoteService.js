import { ProxyState } from '../AppState.js';
import { Quote } from '../Models/Quote.js';
import { quoteApi } from './AxiosService.js';

class QuoteService {
  async getQuotes() {
    const res = await quoteApi.get();
    console.log(res);
    // ProxyState.quotes = res.data.map(q => new Quote(q));
  }
}

export const quoteService = new QuoteService();
