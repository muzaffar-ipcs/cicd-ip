import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { GodlyComponent } from './businesscard/godly/godly.component';
import { IsraelComponent } from './businesscard/israel/israel.component';
import { JunaidShaikhComponent } from './businesscard/junaid-shaikh/junaid-shaikh.component';
import { NawazComponent } from './businesscard/nawaz/nawaz.component';
import { ViewComponent } from './businesscard/view/view.component';
import { ContactComponent } from './contact/contact.component';
import { DnourComponent } from './dnour/dnour.component';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'process', component: ProcessComponent},
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'businesscard', component: BusinesscardComponent },
  { path: 'businesscard/view/:id', component: ViewComponent },
  { path: 'p/kbn', component: NawazComponent },
  { path: 'p/js', component: JunaidShaikhComponent },
  { path: 'p/io', component: IsraelComponent },
  { path: 'p/godly', component: GodlyComponent },
  { path: 'dnour', component: DnourComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    // useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
