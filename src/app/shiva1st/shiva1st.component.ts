import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shiva1st',
  templateUrl: './shiva1st.component.html',
  styleUrls: ['./shiva1st.component.css']
})
export class Shiva1stComponent implements OnInit {
private sample = "hello";
  constructor() { 
    console.log(this.sample);
  }

  ngOnInit() {
  }

}
