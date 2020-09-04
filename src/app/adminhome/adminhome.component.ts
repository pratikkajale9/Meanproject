import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')){
        this.router.navigate(['login']);
    }
  }
 logoutp(){
   sessionStorage.removeItem('sid');
   this.router.navigate(['login']);
 }

}
