import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IRecipe } from 'src/app/shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'assets/'; 
  constructor(private http: HttpClient) { }

  getRecipies() : Observable<IRecipe[]> {
         return this.http.get<IRecipe[]>(this.baseUrl + 'Recipe.json')
         .pipe(
              catchError(this.handleError)
         );
  }


  getRecipe(id: number) : Observable<IRecipe> {
    return this.http.get<IRecipe[]>(this.baseUrl + 'Recipe.json')
    .pipe(
         map(recipes => {
           let recipe = recipes.filter((rec: IRecipe) => rec.id === id);
          return (recipe && recipe.length)?recipe[0]: null; 
         }),
         catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
