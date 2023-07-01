import { Ingredient } from '../../../assets/model/ingredient.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Input() item!: Ingredient;
  ingredient!: FormGroup;

  ngOnInit() {
    this.ingredient = new FormGroup({
      ingredient: new FormControl(''),
      amount: new FormControl(''),
      unit: new FormControl(''),
    });
  }
}
