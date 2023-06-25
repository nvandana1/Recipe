import { Ingredient } from '../../../assets/model/ingredient.model';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
onAddIngredient() {
throw new Error('Method not implemented.');
}
@Input() item!:Ingredient;
}
