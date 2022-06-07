import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor() {}

  // For now, just get the URL of a static img
  getVideoPreview() {
    return './assets/video/video-preview1.webp';
  }

  getChannelPic() {
    return './assets/video/channel-pic1.jpg';
  }
}
