import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BusinesscardService } from '../../providers/businesscard/businesscard.service';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  businesscard:any;
  id:any;
  imagepath:any;
  vCardpath:any;
  baseURl :any;
  constructor(
    private businesscardService: BusinesscardService,
    public router: Router,
    private route: ActivatedRoute,
    private element : ElementRef,
    public location: Location
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.imagepath = environment.backendUrl + '/public/';
    this.vCardpath = environment.backendUrl + '/public/vcards/';
    this.baseURl = environment.baseUrl + '/assets/';
    if(this.id){
      this.getBusinesscard(this.id);
    }
  }

  ngOnInit(): void {
    var _location = this.location.path();
                _location = _location.split('/')[2];
    if (_location == 'view') {
      $('nav').addClass("d-none");
      $('footer').addClass("d-none");
    }
    
  }

  getBusinesscard(id) {
    let obj = {id:id};
    this.businesscardService.getBusinesscardDetailsByID(obj).subscribe(
        (response) => {
            if (response.code == 200) {
               this.businesscard = response.result;
            } else if (response.body.code == 400) {
            }
            else {

            }
        },
    );
  }

}
