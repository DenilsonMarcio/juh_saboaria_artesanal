import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import ItemCard, { ItemCardProps } from 'components/ItemCard'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next items" />,
  prevArrow: <ArrowLeft aria-label="previous items" />
}

export type ItemCardSliderProps = {
  items: ItemCardProps[]
  color?: 'white' | 'black'
}

const ItemCardSlider = ({ items, color = 'black' }: ItemCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ItemCardSlider
