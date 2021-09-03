// import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    renderWitheTheme(<Checkbox />)
  })
})
