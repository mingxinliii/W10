import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListallmoviesComponent } from './listallmovies/listallmovies.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { W10pipePipe } from './w10pipe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListallmoviesComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "updatemovie", component: UpdatemovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", component: ViewNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,    
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListallmoviesComponent,
    UpdatemovieComponent,
    ViewNotFoundComponent,
    W10pipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes, {useHash: true}), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})   //separator: backend and frontend
  ],
  providers: [DatabaseService],  //tell app module this new service should be available application-wide
  bootstrap: [AppComponent]
})
export class AppModule { }
