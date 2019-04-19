import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-setup',
  templateUrl: './angular-setup.component.html',
  styleUrls: ['./angular-setup.component.css']
})
export class AngularSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nodeInstall(){
    window.open("https://nodejs.org/en/download/", "_blank");
  }
  visualStudio(){
    window.open("https://visualstudio.microsoft.com/downloads/", "_blank");
  }
}
