import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type ItemCardProps = {
  title: string
  description: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const ItemCard = ({
  title,
  img,
  description,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: ItemCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Adicionar ao carrinho de compras" />
        )}
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
