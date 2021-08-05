import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecktaskComponent } from './checktask.component';

describe('ChecktaskComponent', () => {
  let component: ChecktaskComponent;
  let fixture: ComponentFixture<ChecktaskComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecktaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecktaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
