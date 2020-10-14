
import { UserServiceService } from './../Service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: User;

  constructor(
    private  route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService
  ) {
      this.user = new User();
  }

  onSubmit(): void{
    this.userService.register(this.user)
      .subscribe(data => this.goToUserList());
  }

  goToUserList(): void{
    this.router.navigate(['/getuser']);
  }

  ngOnInit(): void {
  }

}
