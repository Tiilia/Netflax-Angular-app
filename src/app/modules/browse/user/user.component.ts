import { User } from './../models/user';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public formvValide: boolean = false;

  public UsersList: User[] = [];

  public IdUser: number = 11;
  public FirstName: string = "";
  public LastName: string = "";
  public Login: string = "";
  public Password: string = "";
  public Salt?: string;
  public WebSite?: string;
  public Twitter?: string;
  public Instagram?: string;
  public Facebook?: string;
  public Email: string = "";
  public Phone?: string;
  public Mobile?: string;
  public Country?: string;
  public City?: number;
  public Picture?: string;






  // public control = new FormControl(null, [Validators.required, Validators.email]);

  constructor(private _api: ServiceApiService, private _formBuilder: FormBuilder) {


  }
  public formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
    // password: new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"')])
  })


  public getErrorMessage(value: string) {
    if (this.formGroup.get(value)?.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formGroup.get(value)?.hasError('pattern')) {
      return `
      min 8 characters,
      min 1 number,
      uppercase and lowercase,
      min 1 special character`
    }
    {
    }
    return this.formGroup.get(value)?.hasError('email') ? 'Not a valid email' : '';
  }

  // public AllUser() {
  //   this._api.getAllUsers().subscribe(res => this.UsersList = res);
  // }
  // public getUserId() {
  //   if (this.UsersList.length > 0) {
  //     this.IdUser = this.UsersList.length + 1
  //   }
  // }

  public sendNewRating() {
    this._api.PostUser({ IdUser: this.IdUser, FirstName: this.FirstName, LastName: this.LastName, Login: this.Login, Password: this.Password, Email: this.Email }).subscribe(data => console.log(data))
  }

  public submitForm() {
    let values = this.formGroup.value;
    this.FirstName = values["firstName"]
    this.LastName = values["lastName"]
    this.Login = values["login"]
    this.Password = values["password"]
    this.Email = values["email"]

    this.sendNewRating();

    this.formvValide = true;
  }


  ngOnInit(): void {

    // this.AllUser();
    // this.getUserId();


    console.log(this.IdUser);


  }



}
