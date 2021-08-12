import { Link } from './../../models/link';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links: Link[];

  constructor() {
    this.links = [];
  }

  ngOnInit(): void {
    this.links.push(new Link("Acceuil", "/browse"))
  }

}