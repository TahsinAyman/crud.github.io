import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  public getPeople(
    limit: number,
    page: number,
    sortBy: string,
    orderBy: string,
    name?: string,
  ) {
    if (name) {
      return this.http.get(
        `${environment.server}/api/people?limit=${limit}&page=${page}&sortby=${sortBy}&orderby=${orderBy}&name=${name}`
      );
    }
    return this.http.get(
      `${environment.server}/api/people?limit=${limit}&page=${page}&sortby=${sortBy}&orderby=${orderBy}`
    );
  }
  public getPerson(id: number) {
    return this.http.get(`${environment.server}/api/people/${id}`);
  }
  public updatePerson(id: number, body: any) {
    return this.http.patch(`${environment.server}/api/people/${id}`, body);
  }
  public deletePerson(id: number) {
    return this.http.delete(`${environment.server}/api/people/${id}`);
  }
  public createPerson(body: any) {
    return this.http.post(`${environment.server}/api/people`, body);
  }
}
