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

  public UsersList: User[] = [];

  public IdUser: number = 4;
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

  public formGroup: FormGroup = this._formBuilder.group([
    { FirstName: ["John", Validators.required] },
    { LastName: [null, Validators.required] },
    { Login: [null, Validators.required] },
    { Password: [null, Validators.required] },
    { Email: [null, [Validators.required, Validators.email]] }
  ])

  // public control = new FormControl(null, [Validators.required, Validators.email]);

  constructor(private _api: ServiceApiService, private _formBuilder: FormBuilder) { }

  public getErrorMessage() {
    if (this.formGroup.hasError('required')) {
      return 'You must enter a value';
    }
    return this.formGroup.hasError('email') ? 'Not a valid email' : '';
  }

  public AllUser() {
    this._api.getAllUsers().subscribe(res => this.UsersList = res);
  }
  public getUserId() {
    if (this.UsersList.length > 0) {
      this.IdUser = this.UsersList.length + 1
    }
  }

  public sendNewRating() {
    this._api.PostUser({ IdUser: this.IdUser, FirstName: this.FirstName, LastName: this.LastName, Login: this.Login, Password: this.Password, Email: this.Email }).subscribe(data => console.log(data))
  }

  public submitForm() {
    let value = this.formGroup.value
    this.FirstName = value["FirstName"]
    this.LastName = value["LastName"]
    this.Login = value["Login"]
    this.Password = value["Password"]
    this.Email = value["Email"]

    this.sendNewRating();
  }
  ngOnInit(): void {
    // this.AllUser();
    // this.getUserId();

    if (this.IdUser > 0) {
      console.log(this.IdUser);
    }

  }

}
