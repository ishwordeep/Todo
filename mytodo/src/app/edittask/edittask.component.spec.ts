import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EdittaskComponent } from './edittask.component';

describe('EdittaskComponent', () => {
  let component: EdittaskComponent;
  let fixture: ComponentFixture<EdittaskComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
