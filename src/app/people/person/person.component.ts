import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudMode } from 'src/app/entity/CrudMode';
import { MessageType } from 'src/app/entity/MessageType';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  private service: PersonService;
  private route: ActivatedRoute;
  private router: Router;
  public person: any;
  public mode: CrudMode | null = null;
  public personForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(1)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(service: PersonService, route: ActivatedRoute, router: Router) {
    this.service = service;
    this.route = route;
    this.router = router;
  }
  private setPerson(person: any): void {
    this.person = person;
    this.personForm.setValue({
      name: person.name,
      age: person.age,
      email: person.email,
    });
  }
  public submit(): void {
    this.personForm.markAllAsTouched();
    if (this.personForm.valid) {
      if (this.mode == CrudMode.UPDATE) {
        this.service
          .updatePerson(this.person.id, this.personForm.value)
          .subscribe(
            (response: any) => {
              this.showPopup('Updated Successfully', MessageType.SUCCESS);
            },
            (error: any) => {
              this.showPopup("Couldn't Update", MessageType.ERROR);
            }
          );
      } else if (this.mode == CrudMode.CREATE) {
        this.service.createPerson(this.personForm.value).subscribe(
          (response: any) => {
            this.router.navigate(['/people']);
          },
          (error: any) => {
            this.showPopup("Couldn't Create", MessageType.ERROR);
          }
        );
      } else if (this.mode == CrudMode.DELETE) {
        this.service.deletePerson(this.person.id).subscribe(
          (response: any) => {
            this.router.navigate(['/people']);
          },
          (error: any) => {
            this.showPopup("Couldn't Delete", MessageType.ERROR);
          }
        );
      }
    }
  }
  public popup: any = {
    message: '',
    type: MessageType.INFO,
    open: false,
    timeout: 5000,
  };
  private showPopup(message: string, type: string): void {
    this.popup.message = message;
    this.popup.type = type;
    this.popup.open = true;
    setTimeout(() => {
      this.popup.message = '';
      this.popup.type = 'info';
      this.popup.open = false;
    }, this.popup.timeout);
  }
  private isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }
  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        if (!this.isNumber(params['id'])) {
          this.router.navigate(['/people']);
          return;
        }
        this.service.getPerson(params['id']).subscribe(
          (response: any) => {
            this.setPerson(response);
          },
          (error: any) => {
            this.router.navigate(['/not-found']);
          }
        );
      } else {
        this.setCreateMode();
      }
    });
  }
  public setUpdateMode(): void {
    this.mode = CrudMode.UPDATE;
  }
  public setCreateMode(): void {
    this.mode = CrudMode.CREATE;
  }
  public setDeleteMode(): void {
    this.mode = CrudMode.DELETE;
  }
}
