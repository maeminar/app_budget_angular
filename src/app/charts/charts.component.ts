import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  data: ChartData<'bar'> = {
    labels: ['Alimentation', 'Transports', 'Loisirs', 'Santé', 'Santé'],
    datasets: [{
    
      data: this.getData()
  }]
  }

  getData(){
    return [-50, -20, 60, -30, 10, 100]
  }

//Diagramme en ligne
public lineChartData: ChartData<'line'> = {
  labels: ['Alimentation', 'Transports', 'Loisirs', 'Santé', 'Santé'],
  datasets: [
    { data: [65, 59, 80, 81, 56], label: 'Series A' },
    { data: [28, 48, 40, 19, 86], label: 'Series B' }
  ]
};
public lineChartOptions: ChartOptions<'line'> = {
  responsive: true
};
public lineChartType: 'line' = 'line';

// Diagramme en anneau
public doughnutChartData: ChartData<'doughnut'> = {
  labels: ['Alimentation', 'Education', 'Santé'],
  datasets: [
    {
      data: [300, 500, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};
public doughnutChartOptions: ChartOptions<'doughnut'> = {
  responsive: true
};
}
