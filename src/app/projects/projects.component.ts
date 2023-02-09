import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../providers/project/project.service';
import { PageService } from '../providers/page/page.service';
import { Meta, Title } from '@angular/platform-browser';
import 'lazysizes';
import { environment } from '../../environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allprojects:any=[];
  // pagination
	currentPage: number = 1;
	initialized: boolean = false;
	currentLimit: number = 6;
	totalRecord: number = 0;
  baseUrl:any;
  backendUrl:any;
  filterdCategory:any = [];
  isactive:boolean = true;
  constructor(private projectservice: ProjectService, private pageservice: PageService,
    private metaTagService: Meta,
    private titleService: Title, ) { 
      this.get_PageMeta();
      this.get_AllProjects();
      this.baseUrl=environment.baseUrl + '/assets';
      this.backendUrl=environment.backendUrl + '/public/';
    }

  ngOnInit(): void {
    // window.scroll(0,0);
   window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
  } 

customOptions: OwlOptions = {
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
  get_PageMeta() {
    let obj = { pageName: 'project' };
    this.pageservice.getpageWithName(obj).subscribe(
        (response) => {
            if (response.body.code == 200) {
              if(response.body.result){
                this.titleService.setTitle(response?.body.result.meta_title);
                this.metaTagService.addTags([
                    { name: 'description', content: response?.body.result.meta_description },
                    { name: 'keywords', content: response?.body.result.meta_keywords },
                ]);
              }
            } else if (response.body.code == 400) {
            }
            else {

            }

        },
    );
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
              this.filterdCategory = [];
              this.allprojects = [];
              response.result.forEach(project => {
                if(project.status){
                  // this.allprojects = response.result;
                  this.allprojects.push(project);
                  this.filterdCategory.push(project);
                  // this.filterdCategory = response.result;
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

getFilterProjects(data:any) {
  if(data == 'all'){
    this.filterdCategory = this.allprojects;
    this.isactive=true;
  } else {
    this.isactive=false;
  if(this.allprojects && this.allprojects.length > 0){
    this.filterdCategory = [];
    this.allprojects.forEach(project => {
      if(project.category && project.category.length > 0){
        project.category.forEach(category=>{
          if(category.name == data ){
            this.filterdCategory.push(project);
          }
      });
      }    
    });
  }
}
}

loadMoreProjects() {
  this.currentLimit = this.currentLimit + 6;
  this.get_AllProjects();
 }

}
