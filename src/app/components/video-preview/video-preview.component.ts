import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent implements OnInit {
  @Input() videoPreviewUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
