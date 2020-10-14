import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserServiceService } from './Service/user-service.service';
import { EmailComponentComponent } from './email-component/email-component.component';
import { PhoneComponent } from './phone/phone.component';
import { DatePipe } from '@angular/common';

//import { ListUsersComponent } from './list-users/list-users.component';
//import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    EmailComponentComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
