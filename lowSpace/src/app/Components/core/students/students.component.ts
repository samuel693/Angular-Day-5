import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Models/istudent';
import { studentsList } from 'src/app/Models/studentsList';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:IStudent[]=[];

  constructor(private stuService:StudentsService){}

  ngOnInit(): void {
    this.students=this.stuService.getAll();
  }

  delete(id:number){

    var result = confirm("Are You Sure Want To Delete ?");

    if(result){
      this.stuService.delete(id);
    }
  }

}
