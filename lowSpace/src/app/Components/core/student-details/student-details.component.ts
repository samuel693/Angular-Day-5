import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/Models/istudent';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  stuID:number=0;
  student:IStudent|undefined;

  constructor(private avtivatedRoute:ActivatedRoute, private stuService:StudentsService){}

  ngOnInit(): void {
    this.stuID = this.avtivatedRoute.snapshot.params['id'];
    this.student = this.stuService.getByID(this.stuID);

  }



}
