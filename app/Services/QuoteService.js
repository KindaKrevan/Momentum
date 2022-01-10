import { ProxyState } from '../AppState.js';
import { Quote } from '../Models/Quote.js';
import { quoteApi } from './AxiosService.js';

class QuoteService {
  async getQuotes() {
    const res = await quoteApi.get();
    ProxyState.quotes = new Quote(res.data);
  }
}

export const quoteService = new QuoteService();
