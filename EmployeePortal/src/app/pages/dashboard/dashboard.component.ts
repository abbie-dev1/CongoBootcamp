import { Component } from '@angular/core';
import { EmpDataService } from 'src/app/services/emp-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  empData : any[] = [];
  constructor (private empService: EmpDataService) {}

  ngOnInit(): void
  {
    this.gettingEmpData();
  }

  gettingEmpData()
  {
    this.empService.getEmployees().subscribe(
      (response)=>{
        this.empData = response;
        console.log(this.empData);
      },
      (error)=>
      {
        console.error('Error loading employeee details: ', error);
      }
    )
  }
}
