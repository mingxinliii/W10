import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listallmovies',
  templateUrl: './listallmovies.component.html',
  styleUrls: ['./listallmovies.component.css']
})
export class ListallmoviesComponent implements OnInit {

  moviesDB: any[] = [];
  constructor(private dbService: DatabaseService) {}
  ngOnInit() {
    console.log("Hi From Listmovies ngIOnit");
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

}
