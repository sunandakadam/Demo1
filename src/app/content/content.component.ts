import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  user:any;
  constructor() { }

  ngOnInit(): void {
    const userFromStorage=localStorage.getItem('user');
    this.user = userFromStorage ? JSON.parse(userFromStorage) : {};
  }

}
