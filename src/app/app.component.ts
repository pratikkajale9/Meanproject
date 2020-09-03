import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, RequiredValidator, Validators, MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // public inputs = new FormControl('',[Validators.required]);

  public input2 = new FormGroup({username : new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]),
    password: new FormControl('', [Validators.required,Validators.minLength(3), ])});
}
