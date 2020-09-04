import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-addpakage',
  templateUrl: './addpakage.component.html',
  styleUrls: ['./addpakage.component.css']
})

export class AddpakageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  public addpakage = new FormGroup({
    PakageName: new FormControl('', [Validators.required]), PakagePrice: new FormControl('', [Validators.required]),
    PakageFacelities: new FormControl('', [Validators.required])});

  ngOnInit(): void {
  }
  public alert1 = false;
  public alert2  = false;

 public addpakage1 = async () => {
  
    let url = "http://localhost:3000/addpakage";
    let data = this.addpakage.value;
    let results : any =  await this.http.post(url, data).toPromise();
    console.log(results);
   if (results.message === "success post"){
        this.alert1 = true;
    }
    else{
     this.alert2 = true;
    }
}
}
