import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawazComponent } from './nawaz.component';

describe('NawazComponent', () => {
  let component: NawazComponent;
  let fixture: ComponentFixture<NawazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NawazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NawazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
