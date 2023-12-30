import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}

export interface CoffeProps {
    id: number
    imgUrl: string
    tag: string[]
    title: string
    description: string
    price: number
    quantity: number
}