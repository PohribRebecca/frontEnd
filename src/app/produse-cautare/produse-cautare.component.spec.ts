import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduseCautareComponent } from './produse-cautare.component';

describe('ProduseCautareComponent', () => {
  let component: ProduseCautareComponent;
  let fixture: ComponentFixture<ProduseCautareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduseCautareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduseCautareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
