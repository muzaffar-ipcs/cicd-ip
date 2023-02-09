import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

// Services
import { TestimonialService } from '../providers/testimonial/testimonial.service';
import { PageService } from '../providers/page/page.service';
import { BlogService } from '../providers/blog/blog.service';
import 'lazysizes';

import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ProjectService } from '../providers/project/project.service';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    apiData: PhotosApi;
    limit: number = 10; // <==== Edit this number to limit API results
    baseUrl:any;
    slides:any=[];
    recentslider:any=[];
    customOptions: OwlOptions = {
      loop: true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin: 14,
      responsive: {
        0: {
          items: 3
        },
        400: {
          items: 4
        },
        740: {
          items: 8
        },
        940: {
          items: 10
        }
      },
      nav: false
    }
      
    // recent work slider 
    recentoptions: OwlOptions = {
      loop: true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin: 14,
      responsive: {
        0: {
          items: 2
        },
        480: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false
    }
        
    desktopslider: OwlOptions = {
      loop: false,
      rewind: true,
      autoplay: true,
      autoplayTimeout:1000,
      center: true,
      dots: false,
      autoHeight: true,
      autoWidth: true, 
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      smartSpeed: 1,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
      }
    } 
    // recent work slider 

  page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    testimonialData: any;
    matchData: any;
    homeData: any;
    inviteData: any;
    mobile: any;
    invalidNumber: boolean = false;

    imagepath: any;
    isBrowser: boolean;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    // inviteForm: FormGroup;
    submitted = false;
    imageData:any = [{
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    },{
        albumId: 1,
        id: 2,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/771796"
    }];
    currentPage: number = 1;
    allprojects: any = [];
    currentLimit: number = 4;
    constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private _platformId: Object,
        private testimonialService: TestimonialService,
        private pageservice: PageService,
        private metaTagService: Meta,
        private titleService: Title,
        private blogService: BlogService,
        private formBuilder: FormBuilder,
        private readonly http: HttpClient,
        private projectservice: ProjectService) {
        this.imagepath = environment.backendUrl + '/public/';
        this.baseUrl = environment.baseUrl + '/assets';
        this.get_PageMeta();
        this.get_AllProjects();
        this.slides.push(
        {id: 1, img: this.baseUrl+"/img/home/veritcal-images/1.jpg"},
        {id: 2, img: this.baseUrl+"/img/home/veritcal-images/2.jpg"},
        {id: 3, img: this.baseUrl+"/img/home/veritcal-images/3.jpg"},
        {id: 4, img: this.baseUrl+"/img/home/veritcal-images/4.jpg"},
        {id: 5, img: this.baseUrl+"/img/home/veritcal-images/5.jpg"},
        {id: 6, img: this.baseUrl+"/img/home/veritcal-images/6.jpg"},
        {id: 7, img: this.baseUrl+"/img/home/veritcal-images/7.jpg"},
        {id: 8, img: this.baseUrl+"/img/home/veritcal-images/8.jpg"},
        {id: 9, img: this.baseUrl+"/img/home/veritcal-images/9.jpg"},
        {id: 10, img:this.baseUrl+"/img/home/veritcal-images/10.jpg"}
        );
        this.recentslider.push(
          {id: 1, img: this.baseUrl+"/img/home/beyou.webp", brandname:"BeYou", brandtag:"Branding.UI/UX.Technology"},
          {id: 2, img: this.baseUrl+"/img/home/cups.webp", brandname:"BeYou", brandtag:"Branding.UI/UX.Technology"},
          {id: 3, img: this.baseUrl+"/img/home/bcard22.webp", brandname:"BeYou", brandtag:"Branding.UI/UX.Technology"},
          {id: 4, img: this.baseUrl+"/img/home/vendetta2.webp", brandname:"BeYou", brandtag:"Branding.UI/UX.Technology"}
        )

    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        this.fetch()
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
        $("li").removeClass("main-menu__item--active");
        $("#home").addClass("main-menu__item--active");
  // window.scroll(0,0);

   window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
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
    fetch() {
        const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
        const http$ = this.http.get<PhotosApi>(api);
    
        http$.subscribe(
          res => this.apiData = res,
          err => throwError(err)
        )
      }

    get_AllProjects() {
      const obj = {
        limit: this.currentLimit,
        page: this.currentPage,
      };
      this.projectservice.getAllProjects(obj).subscribe(
          (response) => {
              if (response.code == 200) {
                  if(response.result && response.result.length > 0){
                    response.result.forEach(project => {
                      if(project.status){
                        this.allprojects.push(project);
                      }
                    });
                  }
              } else if (response.code == 400) {
                
              }
              else {
    
              }
    
          },
      );
    }

    loadMore(){
      this.currentLimit = this.currentLimit + 4;
      this.get_AllProjects();
    }
}
