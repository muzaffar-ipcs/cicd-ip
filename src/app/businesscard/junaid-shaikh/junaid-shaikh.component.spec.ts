import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunaidShaikhComponent } from './junaid-shaikh.component';

describe('JunaidShaikhComponent', () => {
  let component: JunaidShaikhComponent;
  let fixture: ComponentFixture<JunaidShaikhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunaidShaikhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunaidShaikhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
