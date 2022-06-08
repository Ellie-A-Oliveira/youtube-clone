import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-category',
  templateUrl: './video-category.component.html',
  styleUrls: ['./video-category.component.scss'],
})
export class VideoCategoryComponent implements OnInit {
  @Input() isSelected: boolean = false;
  @Input() category: string = 'Tudo';

  constructor() {}

  ngOnInit(): void {}
}
