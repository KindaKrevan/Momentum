import { imageService } from '../Services/ImageService.js';

export class ImageController {
  constructor() {
    imageService.getImage();
  }
}
