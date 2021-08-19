import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import * as S from './styles'

export type ItemCardProps = {
  title: string
  description: string
  img: string
  price: string
  promotionalPrice?: string
}

const ItemCard = ({ title, img, description, price, promotionalPrice }: ItemCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Adicionar ao carrinho de compras" />
    </S.FavButton>
    <S.BuyBox>
      {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
      <S.Price>{promotionalPrice || price}</S.Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ItemCard
