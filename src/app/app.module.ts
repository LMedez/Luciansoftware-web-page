import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DataModule} from "./data/data.module";
import {PresentationModule} from "./presentation/presentation.module";
import {DomainModule} from "./domain/domain.module";
import {DataRepository} from "./data/repository/data.repository";
import {DomainRepository} from "./domain/repository/domain.repository";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    DomainModule,
    PresentationModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [{provide: DomainRepository, useClass: DataRepository}],
  bootstrap: [AppComponent]
})
export class AppModule { }
