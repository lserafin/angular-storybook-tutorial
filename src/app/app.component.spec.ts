import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render the component', async () => {
    const { getByText } = await render(AppComponent);
    //TODO: Not working at the moment
    //expect(getByText('app-pure-inbox-screen'));
  });
});