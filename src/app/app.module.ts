import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CoreModule} from './services/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from '../app/recipe/recipe.module';
import { SharedModule } from '../app/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, RecipeModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
