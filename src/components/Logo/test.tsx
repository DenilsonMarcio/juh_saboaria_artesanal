import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
  // renderizar com metodo render
  renderWitheTheme(<Logo />)
  // selecionar o elemento a ser testado   metodo screen (queries) getbylabel, gatbytest etc
  //expect  assertion asserção = comparação 
  expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({color: '#FAFAFA'})
  })

  it('should render a black label when is passed', () => {
    // renderizar com metodo render
    renderWitheTheme(<Logo color="black"/>)
    // selecionar o elemento a ser testado   metodo screen (queries) getbylabel, gatbytest etc
    //expect  assertion asserção = comparação 
    expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({color: '#030517'})
    })
    
    it('should render a normal logo when size is default', () => {
      // renderizar com metodo render
      renderWitheTheme(<Logo />)
      // selecionar o elemento a ser testado   metodo screen (queries) getbylabel, gatbytest etc
      //expect  assertion asserção = comparação 
      expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({width: '11rem'})
    })
    
        it('should render a bigger logo', () => {
          // renderizar com metodo render
          renderWitheTheme(<Logo size="large"/>)
          // selecionar o elemento a ser testado   metodo screen (queries) getbylabel, gatbytest etc
          //expect  assertion asserção = comparação 
          expect(screen.getByLabelText(/Juju Soap/i).parentElement).toHaveStyle({width: '20rem'})
          })
  })
