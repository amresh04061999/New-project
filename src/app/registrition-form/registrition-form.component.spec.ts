import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistritionFormComponent } from './registrition-form.component';

describe('RegistritionFormComponent', () => {
  let component: RegistritionFormComponent;
  let fixture: ComponentFixture<RegistritionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistritionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistritionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
