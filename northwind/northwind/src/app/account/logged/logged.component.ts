import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from 'app/account/account.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent {

  isLogged = false;
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngDoCheck() {
    this.isLogged = this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
    this.router.navigate(["account"]);
  }

}
