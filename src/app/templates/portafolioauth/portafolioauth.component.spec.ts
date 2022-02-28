import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioauthComponent } from './portafolioauth.component';

describe('PortafolioauthComponent', () => {
  let component: PortafolioauthComponent;
  let fixture: ComponentFixture<PortafolioauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
