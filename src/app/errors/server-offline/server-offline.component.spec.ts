import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOfflineComponent } from './server-offline.component';

describe('ServerOfflineComponent', () => {
  let component: ServerOfflineComponent;
  let fixture: ComponentFixture<ServerOfflineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerOfflineComponent]
    });
    fixture = TestBed.createComponent(ServerOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
