import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliogeneralComponent } from './portafoliogeneral.component';

describe('PortafoliogeneralComponent', () => {
  let component: PortafoliogeneralComponent;
  let fixture: ComponentFixture<PortafoliogeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafoliogeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
