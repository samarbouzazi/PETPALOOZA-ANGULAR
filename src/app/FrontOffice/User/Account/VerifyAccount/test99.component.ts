import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/User/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-test99',
  templateUrl: './test99.component.html',
  styleUrls: ['./test99.component.css']
})
export class Test99Component  implements OnInit {
  email: any;
  constructor(private authService: AuthService, private router: Router, private activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.email = this.activeRoute.snapshot.queryParamMap.get('email');
      console.log("\n   \n   the email is "+  this.email);
      console.log("in the method \n ");
      this.authService.AccepteVirficationEmail(this.email).subscribe(
        res => {
          Swal.fire("You have successfully activate your account  !! ")
          this.router.navigateByUrl('/login')
        },
        err => {
          alert('some error have existed');
        }
      );
    }
}
//  this.email = this.activeRoute.snapshot.paramMap.get('email');
