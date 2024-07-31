import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CreateNewBudgetComponent } from '../create-new-budget/create-new-budget.component';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [NgFor,CreateNewBudgetComponent, NgIf],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  operations = [
    { date: '01/10/2023', categorie: 'Alimentation', titre: 'Courses', montant: '-50.00 €', type: 'Sortie' },
    { date: '02/10/2023', categorie: 'Transport', titre: 'Essence', montant: '-20.00 €', type: 'Sortie' },
    { date: '03/10/2023', categorie: 'Loisirs', titre: 'Cinéma', montant: '-30.00 €', type: 'Sortie' },
    { date: '04/10/2023', categorie: 'Santé', titre: 'Médicaments', montant: '-15.00 €', type: 'Sortie' },
    { date: '05/10/2023', categorie: 'Éducation', titre: 'Cours en ligne', montant: '-100.00 €', type: 'Sortie' }
  ];

  showCreateNewBudget = false;

  addOperation() {
    this.showCreateNewBudget = true;
    }

    onOperationAdded(operation: any) {
      this.operations.push(operation);
      this.showCreateNewBudget = false;
    }
    
    index = 0;
    removeOperation(index: number) {
      const selectedOperation = this.operations[index];
      const selectedIndex = this.operations.indexOf(selectedOperation);
    }


}