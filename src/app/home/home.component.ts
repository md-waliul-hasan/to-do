import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    arr: any = [];

  constructor() { }

  ngOnInit() {
      this.arr = JSON.parse( localStorage.getItem('todos'));
  }

    delete(i: number) {
        this.arr.splice(i, 1, );
        localStorage.setItem('todos', JSON.stringify(this.arr) );
    }
}
