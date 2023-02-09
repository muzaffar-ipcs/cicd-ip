import { Component, OnInit } from '@angular/core';
import { ContactService } from '../providers/contact/contact.service';
import { environment } from '../../environments/environment';
declare var $: any;
import { ToastrManager } from 'ng6-toastr-notifications';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl,AbstractControl} from '@angular/forms';
import { PageService } from '../providers/page/page.service';
import { Meta, Title } from '@angular/platform-browser';
export {};
declare global {
   interface Window {
      Calendly: any;
   }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  baseUrl: any;
  title = 'Contact Us';
  model: any = {
    name: null,
    email: null,
    message: null,
    phone: null,
    subject: []
  }
  submitted = false;
  error = {};
  selectedSubj: any = [];
  isWebsitesel = false;
  isBrandingsel = false;
  isSeosel = false;
  isEnterpricesel = false;
  isEcommerce = false;
  selectedSub:any;
  addCareerForm:FormGroup;
  throw_msg:any; 
  msg_success: boolean = false;
  msg_danger: boolean = false;
  subject:any = [];

  constructor(public contactservice: ContactService, private toastr: ToastrManager , public route:ActivatedRoute, private formBuilder: FormBuilder, private pageservice:PageService, private metaTagService: Meta,
    private titleService: Title, ) {
    this.get_PageMeta(); 
    this.baseUrl = environment.baseUrl + '/assets';
    this.selectedSub = this.route.snapshot.paramMap.get('id');
    this.addCareerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['',Validators.required],
      phone: ['',Validators.required]
     });
  }
  
  url = 'https://calendly.com/pixtar/121';
  ngOnInit(): void {
    window.Calendly.initInlineWidget({
      url: this.url,
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {}
   });
   
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    $('nav').removeClass("d-none");
    $('footer').removeClass("d-none");
    if(this.selectedSub == 'branding'){
      this.isBrandingsel = true;
      $("#branding").addClass("active")
    } else if(this.selectedSub == 'website'){
      $("#website").addClass("active")
      this.isWebsitesel = true;
    } else if(this.selectedSub == 'eCommerce'){
      $("#eCommerce").addClass("active");
      this.isEcommerce = true;
    } else if(this.selectedSub == 'enterprice'){
      $("#enterprise").addClass("active");
      this.isEnterpricesel = true;
    } else if(this.selectedSub == 'seo'){
      $("#seo").addClass("active");
      this.isSeosel = true;
    }
  }
  get_PageMeta() {
    let obj = { pageName: 'contact-us' };
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

  public hasError = (controlName: string, errorName: string) => { 
    return this.addCareerForm.controls[controlName].hasError(errorName);
  };

  public hasEmailError = (controlName: string, errorName: string) => { 
    if(this.addCareerForm.controls['email'].value == "" ){
      return "Email is required";
    } else if(this.addCareerForm.controls['email'].status == "INVALID"){
      return "Invalid Email";
    } else {
      return this.addCareerForm.controls['email'].hasError(errorName);
    }
    
  };

  onSubmit() {
    this.submitted = true;
    let obj = this.addCareerForm.value;
    if (this.addCareerForm.invalid){
      return false;
    }
    if(this.isBrandingsel){
      this.subject.push('Branding');
    }
    if(this.isWebsitesel){
      this.subject.push('Website');
    } 
    if(this.isEnterpricesel){
      this.subject.push('Enterprise Solution');
    } 
    if(this.isEcommerce){
      this.subject.push('eCommerce');
    }
    if(this.isSeosel){
      this.subject.push('SEO');
    }
    obj['subject'] = this.subject;
    if(this.subject.length < 1 ){
      this.toastr.errorToastr("Please Select any one from subjects");
      return false;
    }
    return this.contactservice.addContact(obj).subscribe(response => {
      if (response && response.body.code == 200) {
        this.submitted = true;
        this.toastr.successToastr(response.body.message);
        setInterval(() => {
          window.location.reload();
        }, 2000);

      } else {
        this.toastr.errorToastr("Error");
      }
    },
      error => this.error = error
    );
  }

  selectSub(type:any) {
    if(type == 'website'){
      if($("#website").hasClass("active")){
        $("#website").removeClass("active");
        this.isWebsitesel = false;
      } else {
        $("#website").addClass("active")
        this.isWebsitesel = true;
      };
    } else if(type == 'branding'){
      if($("#branding").hasClass("active")){
        $("#branding").removeClass("active");
        this.isBrandingsel = false;
      } else {
        $("#branding").addClass("active")
        this.isBrandingsel = true;
      };
    } else if(type == 'eCommerce'){
      if($("#eCommerce").hasClass("active")){
        $("#eCommerce").removeClass("active");
        this.isEnterpricesel = false;
      } else {
        $("#eCommerce").addClass("active");
        this.isEnterpricesel = true;
      };
    } else if(type == 'enterprise'){
      if($("#enterprise").hasClass("active")){
        $("#enterprise").removeClass("active");
        this.isEnterpricesel = false;
      } else {
        $("#enterprise").addClass("active");
        this.isEnterpricesel = true;
      };
    } else if(type == 'seo'){
      if($("#seo").hasClass("active")){
        $("#seo").removeClass("active");
        this.isSeosel = false;
      } else {
        $("#seo").addClass("active");
        this.isSeosel = true;
      };
    } 
  }
}
