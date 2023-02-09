import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-godly',
  templateUrl: './godly.component.html',
  styleUrls: ['./godly.component.scss']
})
export class GodlyComponent implements OnInit {
  baseURl :any;
  constructor() { 
    this.baseURl = environment.baseUrl + '/assets/';
  }

  ngOnInit(): void {
  }

}
