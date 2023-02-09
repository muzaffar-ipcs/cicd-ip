import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-junaid-shaikh',
  templateUrl: './junaid-shaikh.component.html',
  styleUrls: ['./junaid-shaikh.component.scss']
})
export class JunaidShaikhComponent implements OnInit {
  baseURl :any;
  constructor() {
    this.baseURl = environment.baseUrl + '/assets/';
   }

  ngOnInit(): void {
  }

}
