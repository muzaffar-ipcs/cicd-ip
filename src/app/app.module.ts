import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpResponse } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { ViewComponent } from './businesscard/view/view.component';
import { DnourComponent } from './dnour/dnour.component';
import { GodlyComponent } from './businesscard/godly/godly.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProcessComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    BusinesscardComponent,
    ViewComponent,
    DnourComponent,
    GodlyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
