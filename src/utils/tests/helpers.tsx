import { ThemeProvider } from 'styled-components'
import {render, RenderResult} from '@testing-library/react'

import theme from "styles/theme"
import React from "react"

export const renderWitheTheme = (children: React.ReactNode): RenderResult =>
render(<ThemeProvider theme={theme}>{children}</ThemeProvider>) 