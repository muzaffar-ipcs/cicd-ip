import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { PageService } from '../providers/page/page.service';
import { BusinesscardService } from '../providers/businesscard/businesscard.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.scss']
})
export class BusinesscardComponent implements OnInit {
  imagepath: any;
  businesscards:any= [];
  baseURl :any;
  constructor(
    private businesscardService: BusinesscardService,
    private pageservice: PageService,
    private metaTagService: Meta,
    private titleService: Title) {
    this.imagepath = environment.backendUrl + '/public/';
    this.get_PageMeta();
    this.get_all_projects();
  }

  ngOnInit(): void {
    $('nav').removeClass("d-none");
    $('footer').removeClass("d-none");
  }

  get_PageMeta() {
    let obj = { pageName: 'home' };
    this.pageservice.getpageWithName(obj).subscribe(
        (response) => {
            if (response.body.code == 200) {
                this.titleService.setTitle(response?.body.result.meta_title);
                this.metaTagService.addTags([
                    { name: 'description', content: response?.body.result.meta_description },
                    { name: 'keywords', content: response?.body.result.meta_keywords },
                ]);
            } else if (response.body.code == 400) {
            }
            else {

            }

        },
    );
  }


  get_all_projects() {
    let obj = {  };
    this.businesscardService.getBusinesscardDetails(obj).subscribe(
        (response) => {
            if (response.code == 200) {
               this.businesscards = response.result;
            } else if (response.body.code == 400) {
            }
            else {

            }

        },
    );
  }
}
