import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-selectpakage',
  templateUrl: './selectpakage.component.html',
  styleUrls: ['./selectpakage.component.css']
})
export class SelectpakageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder ) { }
  public pid = new FormControl('', Validators.required);
  ngOnInit(): void {
  }
  public alert1 = false;
  public alert2 = false;
  public rpakage = async () => {
    let url = "http://localhost:3000/addpakage";
    let data: number = this.pid.value;
    let id = { "id": data };
    let results: any = await this.http.post(url, id).toPromise();
    console.log(results);
    if (results.message === "success post") {
      this.alert2 = false;
      this.alert1 = true;
    }
    else {
      this.alert1 = false;
      this.alert2 = true;

    }
  }
}
