import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [NgFor],
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

  addOperation() {
      const newOperation = {
        date: '', 
        categorie: '', 
        titre: '', 
        montant: '', 
        type: '' 
      };
      this.operations.push(newOperation);
      console.log(newOperation);
    }

  removeOperation(index: number) {
    this.operations.splice(index, 1);
  }
}