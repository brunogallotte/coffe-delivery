export interface CoffeProps {
    id: number
    tag: string[]
    title: string
    description: string
    price: number
    quantity: number
}

export const coffes: Coffe[] = [
    {
        id: 1,
        tag: ['tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity: 0
    },
    {
        id: 2,
        tag: ['tradicional'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity: 0
    },
    {
        id: 3,
        tag: ['tradicional'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 4,
        tag: ['tradicional', 'gelado'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        quantity: 0
    },
    {
        id: 5,
        tag: ['tradicional', 'com leite'],
        title: 'Café com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        quantity: 0
    },
    {
        id: 6,
        tag: ['tradicional', 'com leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 7,
        tag: ['tradicional', 'com leite'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 8,
        tag: ['tradicional', 'com leite'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 9,
        tag: ['tradicional', 'com leite'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        tag: ['especial', 'com leite'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        tag: ['especial', 'com leite', 'gelado'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, cremede leite e hortelã',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        tag: ['especial'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        quantity: 0
    },
    {
        id: 11,
        tag: ['especial'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        quantity: 0
    },
    {
        id: 12,
        tag: ['especial', 'alcoólico'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        quantity: 0
    }
]