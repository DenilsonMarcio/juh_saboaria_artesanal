import * as S from './styles'

const Checkbox = () => (
  <S.Wrapper>
    <input id="action" type="checkbox" />
    <label htmlFor="action"> Action</label>

    <label>
      <input type="checkbox" />
      Action 2
    </label>
  </S.Wrapper>
)

export default Checkbox
