import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetComponent } from '../budget/budget.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-new-budget',
  standalone: true,
  imports: [BudgetComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-new-budget.component.html',
  styleUrl: './create-new-budget.component.css'
})
export class CreateNewBudgetComponent {

  newOperation = { date: '', categorie: '', titre: '', montant: '', type: '' };

  @Output() operationAdded = new EventEmitter<any>();

  saveOperation() {
    this.operationAdded.emit(this.newOperation);
    this.newOperation = { date: '', categorie: '', titre: '', montant: '', type: '' };
  }

}
