import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadresAdminComponent } from './cadres-admin.component';

describe('CadresAdminComponent', () => {
  let component: CadresAdminComponent;
  let fixture: ComponentFixture<CadresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
