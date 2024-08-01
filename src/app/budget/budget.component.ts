import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CreateNewBudgetComponent } from '../create-new-budget/create-new-budget.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [NgFor, CreateNewBudgetComponent, NgIf, FormsModule],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent {
  operations = [
    {
      date: '01/10/2023',
      categorie: 'Alimentation',
      titre: 'Courses',
      montant: '-50.00 €',
      type: 'Sortie',
      selected: false,
    },
    {
      date: '02/10/2023',
      categorie: 'Transport',
      titre: 'Essence',
      montant: '-20.00 €',
      type: 'Sortie',
      selected: false,
    },
    {
      date: '03/10/2023',
      categorie: 'Loisirs',
      titre: 'Cinéma',
      montant: '-30.00 €',
      type: 'Sortie',
      selected: false,
    },
    {
      date: '04/10/2023',
      categorie: 'Santé',
      titre: 'Remboursement santé',
      montant: '15.00 €',
      type: 'Entrée',
      selected: false,
    },
    {
      date: '05/10/2023',
      categorie: 'Éducation',
      titre: 'Cours en ligne',
      montant: '-100.00 €',
      type: 'Sortie',
      selected: false,
    },
  ];

  onOperationAdded(operation: any) {
    this.operations.push(operation);
    this.showCreateNewBudget = false;
  }

  showCreateNewBudget = false;
  addOperation() {
    this.showCreateNewBudget = true;
  }

  deleteSelectedItems() {
    this.operations = this.operations.filter(
      (operation) => !operation.selected
    );
  }

  updateSelectedItems() {
    this.operations.forEach((operation) => {
      if (operation.selected) {
        const newCategorie = prompt('Entrer la nouvelle catégorie :');
        const newTitre = prompt('Entrer le nouveau titre:');
        const newMontant = prompt('Entre le nouveau montant:');
        const newType = prompt('Entre le nouveau type:');
        if (newMontant && newCategorie && newTitre && newType) {
          operation.categorie = newCategorie;
          operation.montant = newMontant;
          operation.titre = newTitre;
          operation.type = newType;
        }
      }
    });
  }
}
