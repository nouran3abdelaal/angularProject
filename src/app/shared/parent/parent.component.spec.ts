import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { By } from '@angular/platform-browser';
import { ChildComponent } from '../child/child.component';

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the parent component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle state when child emits toggle event', () => {
    expect(component.isToggled).toBe(false);

    const childDebugElement = fixture.debugElement.query(By.directive(ChildComponent));
    childDebugElement.triggerEventHandler('toggle', null);

    expect(component.isToggled).toBe(true);

    childDebugElement.triggerEventHandler('toggle', null);
    expect(component.isToggled).toBe(false);
  });
});
