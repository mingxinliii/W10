import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styleUrls: ["./actor.component.css"],
})
export class ActorComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  movieTitle: string = " ";
  movieYear: number = 0;

  section = 1;
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  movieId:string =""; //for delete by title
  y1: number = 0; //for delete by year
  y2: number = 0;
  title: string = ""; //for add an actor to a movie
  year: number = 0;
 
  constructor(private dbService: DatabaseService) {}
  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  onSaveMovie() {
    let obj = {title: this.movieTitle, year: this.movieYear};
    this.dbService.createMovie(obj).subscribe(result => {
      this.changeSection(1); //go to home page
      this.onGetMovies();
    });
  }

  //get all movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

  //delete movie by title
  deleteMovieByTitle(movieTitle:string){
    for(let i=0; i < this.moviesDB.length;i++){
      if (this.moviesDB[i].title == movieTitle){
          this.movieId = this.moviesDB[i]._id;
      }
  };
    this.dbService.deleteMovie(this.movieId).subscribe(result => {
      this.onGetActors();
      this.onGetMovies();
    });
  }

  // delete movie by year 
  DeleteMovieByYear(y1:number, y2:number) { 
    for(let i=0; i < this.moviesDB.length;i++){
      if (this.moviesDB[i].year <= y2 && this.moviesDB[i].year >= y1){
        this.movieId = this.moviesDB[i]._id;
        this.dbService.deleteMovie(this.movieId).subscribe(result => {})
      }
    };
    this.onGetActors();
    this.onGetMovies(); 
  
  }
//get the selected movie
  SelectMovie(item:any) { 
    this.year = item.year;
    this.movieId = item._id;
    this.title = item.title; 
  }


  onAddActor(){
  let obj = { 
    actorid: this.actorId,
  }; 

    this.dbService.addActorToMovie(this.movieId, obj).subscribe(result => {
      this.changeSection(1);
      this.onGetActors();
      this.onGetMovies(); 
      
    })  

  }
 

  //Create a new Actor, POST request
  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.changeSection(1);
      this.onGetActors();
      this.onGetMovies();
    });
  }
  // Update an Actor
  onSelectUpdate(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }
  onUpdateActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.onGetActors();
      this.onGetMovies();
    });
  }
  //Delete Actor
  onDeleteActor(item:any) {
    this.dbService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
      this.onGetMovies();
    });
  }
  // This lifecycle callback function will be invoked with the component get initialized by Angular.
  
  changeSection(sectionId:any) {
    this.section = sectionId;
    this.resetValues();
    
  }
  resetValues() {
    this.fullName = "";
    this.bYear = 0;
    this.actorId = "";
    this.movieTitle = "";
    this.movieYear =0;
  }
 
}