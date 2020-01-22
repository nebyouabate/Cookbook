import { Component, OnInit } from '@angular/core';

import { IRecipe } from '../../shared/interfaces';

import {DataService} from '../../services/data.service.service';

@Component({
  selector: 'cook-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  title: string;
  recipes: IRecipe[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = "List of recipes ... !";
    this.dataService.getRecipies()
    .subscribe((recipes: IRecipe[]) => this.recipes = recipes);
  }

}
