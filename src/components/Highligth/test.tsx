import { screen } from '@testing-library/react'
import { renderWitheTheme } from 'utils/tests/helpers'

import Highligth from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/float-img.png',
  buttonLabel: 'Comprar Agora',
  buttonLink: '/produto2'
}

describe('<Highligth />', () => {
  it('should render headings and button', () => {
    renderWitheTheme(<Highligth {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Comprar agora/i })
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWitheTheme(<Highligth {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWitheTheme(<Highligth {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWitheTheme(<Highligth {...props} />)

    expect(container.firstChild).toHaveStyleRule(
     'grid-template-areas',
      "'floatImage content'",
    )

    expect(container.firstChild).toHaveStyleRule(
      'text-align',
      'right',
      {modifier: `${S.Content}`}
     )
     
  })

  it('should render align left on alignment ', () => {
    const { container } = renderWitheTheme(<Highligth {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
     'grid-template-areas',
      "'content floatImage'",
    )
    expect(container.firstChild).toHaveStyleRule(
      'text-align',
      'left',
      {modifier: `${S.Content}`}
     )
  })
})
