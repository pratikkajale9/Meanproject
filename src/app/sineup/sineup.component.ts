import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-sineup',
  templateUrl: './sineup.component.html',
  styleUrls: ['./sineup.component.css']
})
export class SineupComponent implements OnInit {


  
  constructor( private http: HttpClient, private fb : FormBuilder  ) { }
  public sineupp = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)
      , Validators.pattern('[a-zA-Z0-9]*')]), password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),
    Validators.minLength(9)]), email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
  });
  ngOnInit(): void {
  }
  adduser1 = async () =>{
    let url = "http://localhost:3000/adduser";
    let data = this.sineupp.value;
     await this.http.post(url,data).toPromise();
  }
}
