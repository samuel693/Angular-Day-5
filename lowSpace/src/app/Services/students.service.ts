import { Injectable } from '@angular/core';
import { IStudent } from '../Models/istudent';
import { studentsList } from '../Models/studentsList';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students:IStudent[];

  constructor() {
    this.students=studentsList;
  }


  getAll():IStudent[]{
    return this.students;
  }

  getByID(id:number):IStudent|undefined{
    return this.students.find(s=>s.id==id);
  }

  add(stu:IStudent):void{

    let nextID = studentsList.length;
    stu.id = nextID;
    this.students.push(stu);
  }

  edit(id:number,stu:IStudent){
    let index = this.students.findIndex(s=>s.id==id);

    if(index != -1){
      this.students[index].name =stu.name;
      this.students[index].address =stu.address;
      this.students[index].age =stu.age;
      this.students[index].class =stu.class;
    }
  }

  delete(id:number){
    let index = this.students.findIndex(s=>s.id==id);

    if(index != -1){
      this.students.splice(index,1)

    }
  }


}
