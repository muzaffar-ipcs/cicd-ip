import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnourComponent } from './dnour.component';

describe('DnourComponent', () => {
  let component: DnourComponent;
  let fixture: ComponentFixture<DnourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
