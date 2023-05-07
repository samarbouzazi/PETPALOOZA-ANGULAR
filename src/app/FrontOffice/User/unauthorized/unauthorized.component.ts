import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from "../../../services/User/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements  AfterViewInit {
  @ViewChild('thirdDigit') thirdDigit!: ElementRef;
  @ViewChild('secondDigit') secondDigit!: ElementRef;
  @ViewChild('firstDigit') firstDigit!: ElementRef;

  ngAfterViewInit(): void {
    function randomNum() {
      "use strict";
      return Math.floor(Math.random() * 9) + 1;
    }

    let loop1: any, loop2:any, loop3:any, time = 30, i = 0, number;
    loop3 = setInterval(() => {
      "use strict";
      if (i > 40) {
        clearInterval(loop3);
        this.thirdDigit.nativeElement.textContent = 4;
      } else {
        this.thirdDigit.nativeElement.textContent = randomNum();
        i++;
      }
    }, time);
    loop2 = setInterval(() => {
      "use strict";
      if (i > 80) {
        clearInterval(loop2);
        this.secondDigit.nativeElement.textContent = 0;
      } else {
        this.secondDigit.nativeElement.textContent = randomNum();
        i++;
      }
    }, time);
    loop1 = setInterval(() => {
      "use strict";
      if (i > 100) {
        clearInterval(loop1);
        this.firstDigit.nativeElement.textContent = 4;
      } else {
        this.firstDigit.nativeElement.textContent = randomNum();
        i++;
      }
    }, time);
  }

constructor(private  UserS: UserService, private route:Router) {

}

doRedirect(){
  const roles= this.UserS.getRoles();
    if(roles.includes( 'ROLE_ADMIN')){
      this.route.navigate(['/admin']);
    }else{
      this.route.navigate(['/home']);
    }
}

}
