import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-updatepakage',
  templateUrl: './updatepakage.component.html',
  styleUrls: ['./updatepakage.component.css']
})
export class UpdatepakageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  public addpakage = new FormGroup({
    PakageName: new FormControl('', [Validators.required]), PakagePrice: new FormControl('', [Validators.required]),
    PakageFacelities: new FormControl('', [Validators.required]), Pakageid: new FormControl('', [Validators.required]),
    Duraction: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }
  public alert1 = false;
  public alert2 = false;
  public update1 = async () => {

    let url = "http://localhost:3000/update";
    let data = this.addpakage.value;
    let results: any = await this.http.post(url, data).toPromise();
    console.log(results);
    if (results.message === "success post") {
      this.alert2 = false;
      this.alert1 = true;
    }
    else {
      this.alert1  =  false;
      this.alert2 = true;
    }
  }
}
