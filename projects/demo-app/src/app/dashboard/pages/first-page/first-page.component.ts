import { Component, OnInit } from '@angular/core';
import { User } from '../../modal/user';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  user: User;
  constructor() { 
    this.user = new User();
  }

  ngOnInit(): void {
    //this.user.firstName = 'Dhanesh';
  }

}
