import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder, private router : Router ) {   }
  public login1 = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)
      , Validators.pattern('[a-zA-Z0-9]*')]), password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)])});
  ngOnInit(): void {
  }
  public alert = false;
  public alert1 = false;
      public login2 = async ()=>{
        let data = this.login1.value;
      const  url1 = "http://localhost:3000/login";
       const resultss :any = await this.http.post(url1,data).toPromise();
        console.log(resultss.message);
        if (resultss.message === "success post"){
          this.alert = false;
          this.alert1 = true;
          sessionStorage.setItem('sid','true');
          this.router.navigate(['admin']);  
        }
        if (resultss.message === "failure post") {
          this.alert1 = false;
          this.alert  = true;
        }
    
      }
}
