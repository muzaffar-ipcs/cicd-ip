import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-israel',
  templateUrl: './israel.component.html',
  styleUrls: ['./israel.component.scss']
})
export class IsraelComponent implements OnInit {

  baseURl :any;
  constructor() {
    this.baseURl = environment.baseUrl + '/assets/';
   }

  ngOnInit(): void {
  }

}
