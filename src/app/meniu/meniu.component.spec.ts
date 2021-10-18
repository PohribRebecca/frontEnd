import { ComponentFixture, TestBed } from '@angular/core/testing';
import "node_modules/bootstrap/dist/css/bootstrap.css";
import { MeniuComponent } from './meniu.component';

describe('MeniuComponent', () => {
  let component: MeniuComponent;
  let fixture: ComponentFixture<MeniuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeniuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
