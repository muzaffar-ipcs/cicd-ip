import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodlyComponent } from './godly.component';

describe('GodlyComponent', () => {
  let component: GodlyComponent;
  let fixture: ComponentFixture<GodlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
