import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'charts', component: ChartsComponent},
    { path: 'budget', component: BudgetComponent}
];
