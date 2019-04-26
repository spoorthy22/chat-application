import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatkitComponent } from './chatkit.component';

describe('ChatkitComponent', () => {
  let component: ChatkitComponent;
  let fixture: ComponentFixture<ChatkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
