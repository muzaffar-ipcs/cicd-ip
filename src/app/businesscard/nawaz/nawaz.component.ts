import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nawaz',
  templateUrl: './nawaz.component.html',
  styleUrls: ['./nawaz.component.scss']
})
export class NawazComponent implements OnInit {
  baseURl :any;
  constructor() {
    this.baseURl = environment.baseUrl + '/assets/';
   }

  ngOnInit(): void {
  }

}
