import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Post{
  userId:number,
  title:string,
  body:string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<any>(`${environment.URL}/posts`).pipe(catchError(this.errors))
  }

  postPost(data:Post){
    return this.http.post(`${environment.URL}/posts`, data).pipe(catchError(this.errors))
  }

  deletePost(id:number){
    let idString = id.toString()
    return this.http.delete(`${environment.URL}/posts/${idString}`).pipe(catchError(this.errors))
  }

  putPost(id:number, data:Post){
    let idString = id.toString()
    return this.http.put(`${environment.URL}/posts/${idString}`,data).pipe(catchError(this.errors))
  }


  private errors(err: any) {
    switch (err.error) {
        case "Email and password are required":
            return throwError('Email e password sono obbligatorie');
            break;
        case "Email already exists":
            return throwError('Utente già registrato');
            break;
        case "Email format is invalid":
            return throwError('Email scritta male');
            break;
        case "Cannot find user":
            return throwError('L\'utente non esiste');
            break;
        default:
            return throwError('Errore nella chiamata');
            break
    }
}

}
