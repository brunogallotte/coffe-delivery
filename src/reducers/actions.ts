import { CoffeProps } from "../@types/style"

export enum ActionTypes {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    DELETE_PRODUCT_TO_CART = 'DELETE_PRODUCT_TO_CART',
    INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
}

export function addToCartAction(product: CoffeProps | undefined, quantity: number) {
    if(product) {
      return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: {
          data: product,
          quantity
        }
      }
    } else {
        return {
            type: ActionTypes.ADD_PRODUCT_TO_CART,
            payload: {
                data: {},
                quantity: 0
            }
        }
    }
  }

export function removeToCartAction(productId: number) {
    return {
        type: ActionTypes.DELETE_PRODUCT_TO_CART,
        payload: {
            productId
        }
    }
}

export function incrementQuantityOnProductAction(productId: number) {
    return {
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: {
            productId
        }
    }
}

export function decrementQuantityOnProductAction(productId: number) {
    return {
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: {
            productId
        }
    }
}