import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
  ],
  providers: [DatabaseService],  //tell app module this new service should be available application-wide
  bootstrap: [AppComponent]
})
export class AppModule { }
