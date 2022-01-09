import { ProxyState } from '../AppState.js';
import { imgApi } from './AxiosService.js';

class ImageService {
  async getImage() {
    const res = await imgApi.get();
    ProxyState.image = new Image(res.data);
    let image = res.data.largeImgUrl;
    let author = res.data.author;
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = `cover`;
    document.getElementById('imgAuthor').innerText = `Image Credit: ${author}`;
  }
}

export const imageService = new ImageService();
