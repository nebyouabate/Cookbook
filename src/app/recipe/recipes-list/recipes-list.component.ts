import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  private _recipes: IRecipe[] = [];

  @Input() get recipes(): IRecipe[] {
    return this._recipes;
  }

  set recipes(value: IRecipe[]) {
    if (value) {
      this._recipes = this.filteredRecipes = value;
    }
  }

  filteredRecipes: IRecipe[] = [];
  constructor() { }

  ngOnInit() { }

  filter(data: string) {
    if (data) {
      this.filteredRecipes = this._recipes.filter((recip: IRecipe) => {
        return recip.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    }else{
      this.filteredRecipes = this._recipes;
    }
  }
  sort(prop: string) { }
}
