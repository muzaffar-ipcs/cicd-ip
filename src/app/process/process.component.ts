import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { PageService } from '../providers/page/page.service';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  baseUrl:any;
  constructor(private pageservice:PageService,private metaTagService: Meta,
    private titleService: Title,  ) {
    this.get_PageMeta();
    this.baseUrl = environment.baseUrl + '/assets';
  }

  ngOnInit(): void {
    // window.scroll(0,0);

   window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
  }
  get_PageMeta() {
    let obj = { pageName: 'process' };
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
}
