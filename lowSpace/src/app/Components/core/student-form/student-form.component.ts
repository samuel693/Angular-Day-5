import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/Models/istudent';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student:IStudent={
    id:0,
    name:'',
    age:0,
    address:'',
    class:''
  }

  stuID:number=0;



  constructor(private stuService:StudentsService ,private activatedRoute:ActivatedRoute, private router:Router){}


  ngOnInit(): void {
    this.stuID=this.activatedRoute.snapshot.params['id'];

    if(this.stuID != 0){
      let oldStu=this.stuService.getByID(this.stuID);
      if(oldStu) this.student=oldStu;
    }
  }




  GetData(e:Event){
    e.preventDefault();

    if(this.stuID){
      this.stuService.edit(this.stuID,this.student)
    }else{
      this.stuService.add(this.student);
    }

    this.router.navigate(['/students'])
  }





}
