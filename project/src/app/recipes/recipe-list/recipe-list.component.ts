import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipes.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/0/IG0504_brownie-tart_s4x3.jpg.rend.hgtvcom.966.725.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
