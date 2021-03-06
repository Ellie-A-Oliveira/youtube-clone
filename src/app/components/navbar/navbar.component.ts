import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userProfilePic: string = '';

  constructor(private userHandler: UserService) {}

  ngOnInit(): void {
    this.userProfilePic = this.userHandler.getProfilePic();
  }
}
