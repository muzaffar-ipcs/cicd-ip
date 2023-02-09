import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dnour',
  templateUrl: './dnour.component.html',
  styleUrls: ['./dnour.component.scss']
})
export class DnourComponent implements OnInit {
  baseUrl:any;
  constructor() { 
    this.baseUrl=environment.baseUrl + '/assets';
  }

  ngOnInit(): void {
  }

}
