import { User } from './../models/user';
import { ServiceApiService } from './../../../services/service-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList: User[] = []

  constructor(private _api: ServiceApiService) { }

  ngOnInit(): void {
    this._api.getAllUsers().subscribe(res => this.usersList = res)
  }

}
