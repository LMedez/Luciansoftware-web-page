import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'applications', component: HomeComponent},
  {path: 'vision', component: HomeComponent},
  {path: 'blog', component: HomeComponent}

]

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        RouterModule.forRoot(routes),
        MatCardModule,
    ]
})
export class PresentationModule {
}
