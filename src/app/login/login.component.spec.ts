import {async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule,
      FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        LoginComponent,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, async(inject([HttpTestingController, LoginComponent],
    (httpClient: HttpTestingController, component: LoginComponent) => {
      expect(component).toBeTruthy();
  })));

  it('should render form with username and password inputs', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#username')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate username and password input as required', async(() => {
     component.onSubmit();
     expect(component.form.valid).toBeFalsy();

  }));
});
