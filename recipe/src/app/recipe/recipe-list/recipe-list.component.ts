import { Recipe } from './../recipe.model';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
@Input() recipe!:Recipe[];
}
