import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
//Actor
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;

  getActors() {
    return this.http.get("/actors");
  }

  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }

  createActor(data: any) {
    return this.http.post("/actors", data, httpOptions);
  }

  updateActor(id: string, data: any) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteActor(id: string) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }

//Movie
  getMovies() {
    return this.http.get("/movies");
  }

  getMovie(id: string){
    let url = "/movies/" + id;
    return this.http.get(url);
  }

  createMovie(data:any) {
    return this.http.post("/movies", data, httpOptions);
  }

  deleteMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }

  deleteMovieByYear() {
    let url = "/movies";
    return this.http.delete(url, httpOptions);
  }

  addActorToMovie(movieid:string, data:any) {
    let url = "/movies/" + movieid;
    return this.http.post(url, data, httpOptions);
  }

  updateMovie(id: string, data: any) {
    let url = "/movies/" + id;
    return this.http.put(url, data, httpOptions);
  }
}
