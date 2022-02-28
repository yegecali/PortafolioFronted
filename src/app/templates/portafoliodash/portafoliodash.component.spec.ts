import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliodashComponent } from './portafoliodash.component';

describe('PortafoliodashComponent', () => {
  let component: PortafoliodashComponent;
  let fixture: ComponentFixture<PortafoliodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafoliodashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
