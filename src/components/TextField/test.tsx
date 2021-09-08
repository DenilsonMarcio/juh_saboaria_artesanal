import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWitheTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('Render with label', () => {
    renderWitheTheme(<TextField label="label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWitheTheme(<TextField />)

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should with placeholder', () => {
    renderWitheTheme(<TextField placeholder="ola voce" />)

    expect(screen.getByPlaceholderText('ola voce')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    renderWitheTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should be renders with icon on the right side', () => {
    renderWitheTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWitheTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new test'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should accessible my tab', () => {
    renderWitheTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
