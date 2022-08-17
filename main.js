// Carrinho
let cartIcon = document.querySelector('#carrinho-icone')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
let button = document.querySelector('button')

// Abrir Carrinho
cartIcon.onclick = () =>{
    cart.classList.add("active");
  };
  // Fechar Carrinho
  closeCart.onclick=()=>{
    cart.classList.remove("active");
  };
//POP UP COMPRA EFETUADA COM SUCESSO
  $("button").click(function() {
    swal("COMPRA EFETUADA COM SUCESSO", "PRONTO, CLIQUE ABAIXO PARA CONTINUAR", "success")
  });


  
