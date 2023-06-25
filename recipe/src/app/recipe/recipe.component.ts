import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  selectedRecipe! :Recipe;
  recipe: Recipe[] = [
    new Recipe(
      'Pav Bhaji',
      'A bun and masala curry',
      'assets/image/pavBhaji.jpeg'
    ),new Recipe(
      'Carrot halwa',
      'A Dessert from carrot',
      'assets/image/carrothalwa.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  sendRecipe($event: any) {
    this.selectedRecipe = $event;
  }
}
