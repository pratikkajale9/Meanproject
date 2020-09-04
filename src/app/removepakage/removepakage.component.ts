import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-removepakage',
  templateUrl: './removepakage.component.html',
  styleUrls: ['./removepakage.component.css']
})
export class RemovepakageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder ) { }
  public pid = new FormControl('',Validators.required);
  ngOnInit(): void {
  }
  public alert1 = false;
  public alert2 = false;
  public rpakage = async ()=>{
    let url = "http://localhost:3000/rpakage";
    let data = this.pid.value;
    let results: any = await this.http.post(url, data).toPromise();
    console.log(results);
    if (results.message === "success post") {
      this.alert1 = true;
    }
    else {
      this.alert2 = true;
    }
  }
  }
