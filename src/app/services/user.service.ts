import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // For now, returns a static URL
  getProfilePic(): string {
    return './assets/user/profile-pic.jpg';
  }
}
