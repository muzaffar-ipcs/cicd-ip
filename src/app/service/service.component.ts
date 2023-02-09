import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('nav').removeClass("d-none");
    $('footer').removeClass("d-none");
  }

}
