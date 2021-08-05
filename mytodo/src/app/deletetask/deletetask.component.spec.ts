import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletetaskComponent } from './deletetask.component';

describe('DeletetaskComponent', () => {
  let component: DeletetaskComponent;
  let fixture: ComponentFixture<DeletetaskComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
