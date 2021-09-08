import { screen } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWitheTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWitheTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox Label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWitheTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWitheTheme(
      <Checkbox label="checkbox" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWitheTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

    // Espero que ela não tenha sido chamada ainda
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWitheTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWitheTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    //evento pra acessar o proximo elemento
    userEvent.tab()

    // espero que  a label esteja em foco
    expect(screen.getByLabelText('Checkbox')).toHaveFocus()
  })
})
