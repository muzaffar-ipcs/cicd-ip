import { Component, Renderer2 } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Location } from '@angular/common';
import * as AOS from 'aos';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private renderer : Renderer2, public location: Location, private metaTagService:Meta) {}
    ngOnInit() {
        AOS.init();
        this.metaTagService.addTags([
            { name: 'keywords', content: 'ingeniouspix.com, ingeniouspix creative studios' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Ipcs' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { name: 'date', content: '2022-10-1', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
          ]);
    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === '/signup' || titlee === '/nucleoicons' || titlee.includes('contact') || titlee === 'p/kbn' || titlee === 'p/js' || titlee === 'p/io' || titlee === 'p/godly'){
            return false;
        }
        else {
            return true;
        }
    }

    removeHeader() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === 'p/kbn' || titlee === 'p/js' || titlee === 'p/io' || titlee === 'p/godly' ){
            return false;
        }
        else {
            return true;
        }
    }
}
