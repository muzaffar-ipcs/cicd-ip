import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    isNavbar:boolean = false;
    ifwhitebar:boolean = false;
    ifblackbar:boolean = true;
    baseUrl:any;
    imagepath: any;
    isMenuActive : boolean = false;
    ifbarcliked : boolean = false;
    constructor(public location: Location, private element : ElementRef , public route:Router) {
        this.sidebarVisible = false;
        this.imagepath = environment.baseUrl + '/public/';
        this.baseUrl = environment.baseUrl + '/assets';
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        // this.isMenuActive = false;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.ifblackbar = false;
        $("#navMenus").on('click','li',function(){
          $('.menu-nav-item').removeClass('active');
          $(this).addClass("active");  // adding active class
     });
       this.isHomemenu();
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    selectLink(data:any){
        if(data == 'process'){
            this.ifbarcliked = false;
        }
        $('#burger-toggle').prop('checked', false);
        this.route.navigate([data]);
        $('.showcls').removeClass("active");
        $('.showcls2').removeClass("active");
    }

    showBlackbars(){
        var _location = this.location.path();
        _location = _location.split('/')[1];
        if(_location == 'process' && !this.ifbarcliked){
            this.ifblackbar = false;
            this.ifwhitebar = true;
            $('.navbar').addClass('noblack');
        } else {
            this.ifblackbar = true;
            this.ifwhitebar = false;
            $('.navbar').removeClass('noblack');
        }
        this.isHomemenu();
        return true;
    }

    onclicchange(){
        var _location = this.location.path();
        _location = _location.split('/')[1];
        if(_location == 'process' && !this.ifbarcliked){
            this.ifbarcliked = true;
        } else {
            this.ifbarcliked = false;
        }
    }
    func(){
        $(".home-icon").attr("src", this.baseUrl + "/img/home/ipcs/homehover.png");
    }
    func2(){
        $(".home-icon").attr("src", this.baseUrl + "/img/home/home.png");
    }
    func3(){
        $(".home-icon").attr("src", this.baseUrl + "/img/home/homewhite.png");
    }

    func4(){
        $(".menuhome").attr("src", this.baseUrl + "/img/home/ipcs/homehover.png");
    }
    func5(){
        $(".menuhome").attr("src", this.baseUrl + "/img/home/home.png");
    }
    func6(){
        $(".menuhome").attr("src", this.baseUrl + "/img/home/homewhite.png");
    }
    // arrwhoverfunc(){
    //   $(".arrowimg").attr("src", this.baseUrl + "/img/home/contactarrow-black.svg");

    // }
    // arrwmouseleavefunc(){
    //     $(".arrowimg").attr("src", this.baseUrl + "/img/home/contactarrow.svg");

    // }
  isHomemenu() {
    $('#home').removeClass('active');
    $('#projects').removeClass('active');
    $('#about').removeClass('active');
    $('#process').removeClass('active');
    $('#contact').removeClass('active');
    let currectUrl = this.baseUrl
    var _location = this.location.path();
    _location = _location.split('/')[1];
      if(_location == 'home' || _location=='#'){
   		 $('#home').addClass('active');
       $(".menuhome").attr("src", currectUrl + "/img/home/ipcs/homehover.png");
      }
			else if(_location == 'projects'){
				$('#projects').addClass('active');
                $(".menuhome").attr("src", this.baseUrl + "/img/home/home.png");
			}
			else if(_location == 'about'){
				$('#about').addClass('active');
                $(".menuhome").attr("src", this.baseUrl + "/img/home/home.png");
			}
			else if(_location == 'process'){
				$('#process').addClass('active');
                $(".menuhome").attr("src", this.baseUrl + "/img/home/homewhite.png");
			}
			else if(_location == 'contact'){
				$('#contact').addClass('active');
                // $(".arrowimg").attr("src", currectUrl + "/img/home/contactarrow-black.svg");
                $(".menuhome").attr("src", this.baseUrl + "/img/home/home.png");
			}

  }
    labelchange(){
      // $('.showcls').css({"display":"block","position":"relative", "pz-indexosition":"1"});
      $('.showcls').toggleClass("active");
      $('.showcls2').toggleClass("active");
    }
}
