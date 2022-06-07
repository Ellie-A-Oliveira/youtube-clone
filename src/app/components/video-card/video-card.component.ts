import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  videoPreviewUrl: string = '';
  channelPicUrl: string = '';

  constructor(private videoServiceHandler: VideosService) {}

  ngOnInit(): void {
    this.videoPreviewUrl = this.videoServiceHandler.getVideoPreview();
    this.channelPicUrl = this.videoServiceHandler.getChannelPic();
  }
}
