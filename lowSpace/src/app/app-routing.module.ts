import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/core/home/home.component';
import { StudentsComponent } from './Components/core/students/students.component';
import { ContactComponent } from './Components/core/contact/contact.component';
import { NotFoundComponent } from './Components/core/not-found/not-found.component';
import { StudentDetailsComponent } from './Components/core/student-details/student-details.component';
import { StudentFormComponent } from './Components/core/student-form/student-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'students',component:StudentsComponent},
  {path:'contact',component:ContactComponent},
  {path:'students/details/:id',component:StudentDetailsComponent},
  {path:'students/edit/:id',component:StudentFormComponent},
  {path:'students/new',component:StudentFormComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
