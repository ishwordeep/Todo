import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessmsgComponent } from './successmsg.component';

describe('SuccessmsgComponent', () => {
  let component: SuccessmsgComponent;
  let fixture: ComponentFixture<SuccessmsgComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessmsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
