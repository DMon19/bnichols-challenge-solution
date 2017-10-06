import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [{}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees().subscribe(employees => this.employees = employees)
  }

}
