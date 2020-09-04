import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewpakage',
  templateUrl: './viewpakage.component.html',
  styleUrls: ['./viewpakage.component.css']
})
export class ViewpakageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }
   public list : any = [];
   async getpakageedata(){
     const url = "http://localhost:3000/displaypakage";
     const result = await this.http.get(url).toPromise();
     console.log(result);
     this.list = result;
   }
}
