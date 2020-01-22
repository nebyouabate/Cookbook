import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { RecipesComponent } from '../recipe/recipes/recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesFilterComponent } from './recipes-list/recipes-filter/recipes-filter.component';


@NgModule({
  declarations: [RecipesComponent, RecipesListComponent, RecipesFilterComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [RecipesComponent]
})
export class RecipeModule { }
