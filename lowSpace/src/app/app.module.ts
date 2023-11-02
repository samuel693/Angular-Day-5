import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/core/home/home.component';
import { StudentsComponent } from './Components/core/students/students.component';
import { ContactComponent } from './Components/core/contact/contact.component';
import { NotFoundComponent } from './Components/core/not-found/not-found.component';
import { StudentDetailsComponent } from './Components/core/student-details/student-details.component';
import { StudentFormComponent } from './Components/core/student-form/student-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    StudentsComponent,
    ContactComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
