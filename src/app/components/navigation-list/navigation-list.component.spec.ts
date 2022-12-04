
import { NavigationListComponent } from './navigation-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from '../../app.module';

describe('NavigationListComponent', () => {

  let fixture: MockedComponentFixture<NavigationListComponent>;
  ngMocks.faster();

  beforeAll(() => MockBuilder(NavigationListComponent, AppModule));
  beforeAll(() => (fixture = MockRender(NavigationListComponent)));

  it('should be defined', () => {
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should get display the count', () => {

    const component = fixture.point.componentInstance;
    const iconEl = ngMocks.reveal(fixture, 'mat-icon'); // Tricky one
    // Act
    component.count = 2;
    fixture.detectChanges();
    //Assert
    expect(ngMocks.input(iconEl, 'matBadge')).toBe(component.count);
  })
})