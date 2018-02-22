import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Title from './components/Title'

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
describe('<App />', () => {
  const app = shallow(<App />)
  const title = <Title content="Scoreboard" />

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(title)
  })
})
