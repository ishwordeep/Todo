import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelfornewtaskComponent } from './modelfornewtask.component';

describe('ModelfornewtaskComponent', () => {
  let component: ModelfornewtaskComponent;
  let fixture: ComponentFixture<ModelfornewtaskComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelfornewtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelfornewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
