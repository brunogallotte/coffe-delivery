import { CoffeProps } from "../@types/style";

import expresso from '../assets/images/coffes/expresso.png'
import expressoAmerica from '../assets/images/coffes/expressoAmerica.png'
import expressoCremoso from '../assets/images/coffes/expressoCremoso.png'
import expressoGelado from '../assets/images/coffes/expressoGelado.png'
import expressoComLeite from '../assets/images/coffes/expressoComLeite.png'
import latte from '../assets/images/coffes/latte.png'
import capuccino from '../assets/images/coffes/capuccino.png'
import macchiato from '../assets/images/coffes/macchiato.png'
import mocaccino from '../assets/images/coffes/mocaccino.png'
import chocolateQuente from '../assets/images/coffes/chocolateQuente.png'
import cubano from '../assets/images/coffes/cubano.png'
import havaiano from '../assets/images/coffes/havaiano.png'
import arabe from '../assets/images/coffes/arabe.png'
import irlandes from '../assets/images/coffes/irlandes.png'

export const coffes: CoffeProps[] = [
    {
        id: 1,
        imgUrl: expresso,
        tag: ['tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity: 0
    },
    {
        id: 2,
        imgUrl: expressoAmerica,
        tag: ['tradicional'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity: 0
    },
    {
        id: 3,
        imgUrl: expressoCremoso,
        tag: ['tradicional'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 4,
        imgUrl: expressoGelado,
        tag: ['tradicional', 'gelado'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        quantity: 0
    },
    {
        id: 5,
        imgUrl: expressoComLeite,
        tag: ['tradicional', 'com leite'],
        title: 'Café com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        quantity: 0
    },
    {
        id: 6,
        imgUrl: latte,
        tag: ['tradicional', 'com leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 7,
        imgUrl: capuccino,
        tag: ['tradicional', 'com leite'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 8,
        imgUrl: macchiato,
        tag: ['tradicional', 'com leite'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 9,
        imgUrl: mocaccino,
        tag: ['tradicional', 'com leite'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        imgUrl: chocolateQuente,
        tag: ['especial', 'com leite'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        imgUrl: cubano,
        tag: ['especial', 'com leite', 'gelado'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, cremede leite e hortelã',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        imgUrl: havaiano,
        tag: ['especial'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        quantity: 0
    },
    {
        id: 11,
        imgUrl: arabe,
        tag: ['especial'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        quantity: 0
    },
    {
        id: 12,
        imgUrl: irlandes,
        tag: ['especial', 'alcoólico'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        quantity: 0
    }
]