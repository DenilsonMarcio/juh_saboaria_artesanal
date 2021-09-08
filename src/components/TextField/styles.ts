import styled, { css } from 'styled-components'

// type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

// type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
}
&:focus-within {
  box-shadow: 0 0 0.5rem ${theme.colors.primary};
}
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

// const wrapperModifiers = {
//   error: (theme: DefaultTheme) => css`
//     ${InputWrapper} {
//       border-color: ${theme.colors.red};
//     }
//     ${Icon},
//     ${Label} {
//       color: ${theme.colors.red};
//     }
//   `,
//   disabled: (theme: DefaultTheme) => css`
//     ${Label},
//     ${Input},
//     ${Icon} {
//       cursor: not-allowed;
//       color: ${theme.colors.gray};
//       &::placeholder {
//         color: currentColor;
//       }
//     }
//   `
// }
export const Wrapper = styled.div``
