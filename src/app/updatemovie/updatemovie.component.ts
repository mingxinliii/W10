import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  title: string = "";
  year: number = 0;
  movieId: string = "";
  moviesDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  actorsDB: any[] = [];
  


  constructor(private dbService: DatabaseService, private router: Router) {}

  onGetActors() { 
    this.dbService.getActors().subscribe((data: any) => {
    this.actorsDB = data; 
    });
  }

  //Get all Movies
  onGetMovies() {
    console.log("From on Get Movies");

    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  // Update an Actor
  onSelectUpdate(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }


  onUpdateMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.addActorToMovie(this.movieId, obj).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }


  ngOnInit() {
    this.onGetMovies();
    this.onGetActors(); 
  }

  onSelectMovie(item:any) { 
    this.year = item.year;
    this.movieId = item._id;
    this.title = item.title; 
    }

  onAddActor(){
    let obj = { 
      actorid: this.actorId,
    }; 

      this.dbService.addActorToMovie(this.movieId, obj).subscribe(result => {
        this.onGetMovies(); 
        this.onGetActors(); 
        this.router.navigate(["/listmovies"]);
      })  

    }




}
