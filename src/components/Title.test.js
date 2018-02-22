import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  const title = shallow(<Title content="Scoreboard" />)

      it('has a wrapping h1 tag', () => {
      expect(title).toHaveTagName('h1')
    })

    describe('with a different content prop', () => {
        const title = shallow(<Title content="Something Completely Different!" />)

        it('renders a different title text', () => {
          expect(title).toHaveText('Something Completely Different!')
        })
      })
    })
