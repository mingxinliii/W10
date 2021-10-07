import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  movieTitle: string = "";
  movieYear: number = 0;
  movieId: string = "";
  constructor(private dbService: DatabaseService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSaveMovie() {
    let obj = { title: this.movieTitle, year: this.movieYear };
    this.dbService.createMovie(obj).subscribe((result) => {
      this.router.navigate(["/listmovies"]);
    });
  }
}
