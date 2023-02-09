import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();
    isfooterBlack:boolean = false;
    baseUrl:any;
    imagepath: any;
    constructor(public location: Location) { 
        this.imagepath = environment.baseUrl + '/public/';
        this.baseUrl = environment.baseUrl + '/assets';
    }

    ngOnInit() {
    }
// this fuction is to diffentiate that footer white and black(means project page and about page have a black footer)
    removeFooter(){
        this.isfooterBlack = false;
        var _location = this.location.path();
        _location = _location.split('/')[1];
        if(_location == 'projects' || _location == 'about' ){
            this.isfooterBlack = true;
            return true;
        } else {
            return false;
        }
    }
}
