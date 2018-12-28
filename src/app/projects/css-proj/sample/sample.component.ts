import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  public body0 = "body1";
  public body1 = "body2";
  public body2 = "body3";
  public body3 = "body4";
  public body4 = '';
  public body: string;

  constructor() { 
    this.body = this.body0;
  }

  ngOnInit() {
  }

  reStyle(n) {
    switch (n) {
      case 0:
        this.body = this.body0;
        break;
      case 1:
        this.body = this.body1;
        break;
      case 2:
        this.body = this.body2;
        break;
      case 3:
        this.body = this.body3;
        break;
    
      default:
      this.body = this.body4;
        break;
    }
  }

}
