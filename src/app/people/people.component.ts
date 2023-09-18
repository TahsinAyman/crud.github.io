import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {
  private service: PersonService;
  public persons = [];
  public search: string = '';
  public page = 1;
  public pages: number[] = [];
  public limit = 10;
  public sortBy = 'asc';
  public orderBy = 'id';
  public maxPagesDisplayed: number = 5;
  
  constructor(service: PersonService) {
    this.service = service;
  }
  public ngOnInit(): void {
    this.service
      .getPeople(this.limit, this.page, this.sortBy, this.orderBy)
      .subscribe(this.onGetPeople);
  }
  private onGetPeople = (people: any) => {
    this.pages = [];
    for (let i = 1; i <= people.last_page; i++) {
      this.pages.push(i);
    }
    this.persons = people.data;
  }
  private getPeople(): void {
    if (this.search) {
      this.service
        .getPeople(
          this.limit,
          this.page,
          this.sortBy,
          this.orderBy,
          this.search
        )
        .subscribe(this.onGetPeople);
    } else {
      this.service
        .getPeople(this.limit, this.page, this.sortBy, this.orderBy)
        .subscribe(this.onGetPeople);
    }
  }
  public onLimitOrPageChange(): void {
    this.getPeople();
  }
  public onOrderByChange(orderBy: string): void {
    this.orderBy = orderBy;
    this.getPeople();
  }
  public onSearch(): void {
    this.getPeople();
  }
}
