export function ADD_PRO_TO_CART(state,product){
  let exist=state.cart.some(p=>p.id===product.id)
  if(!exist){
    state.cart.push(product)
  }
  else{
    state.cart.forEach(p=>{
      if(p.id===product.id){
        p.count+=1
      }
    })
  }
}

export function ADD_STOCK_PRODUCT_CART(state,idProduct){
  state.cart.forEach(p=>{
    if(p.id===idProduct){
      p.count+=1
    }
  })
}

export function REMOVE_STOCK_PRODUCT_CART(state,idProduct){
  state.cart.forEach(p=>{
    if(p.id===idProduct && p.count>1){
      p.count-=1
    }
  })
}

export function REMOVE_PRODUCT_CART(state,idProduct){
  let index = state.cart.findIndex((p)=>p.id===idProduct)
  state.cart.splice(index,1)
}

export function CLEANNER_PRODUCT_CART(state){
    state.cart=[]
}