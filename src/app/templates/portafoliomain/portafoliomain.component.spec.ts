import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliomainComponent } from './portafoliomain.component';

describe('PortafoliomainComponent', () => {
  let component: PortafoliomainComponent;
  let fixture: ComponentFixture<PortafoliomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafoliomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
