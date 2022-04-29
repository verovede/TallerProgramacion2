const pedido1 = { tipo: 'Caramel', cliente: 'Juan' };
const pedido2 = { tipo: 'Te helado', cliente: 'Pedro' };

//el callback es la respuesta cuando el proceso termino
function recepcionEntregarPedido(pedido, callBackCliente) {
    switch (pedido.tipo) {
        case 'Caramel':
            setTimeout(() => {
                // llamar al cliente. Usamos el callback que viene por parametro
                callBackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                // llamar al cliente. Usamos el callback que viene por parametro
                callBackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

// cliente => es lo mismo que function (cliente)
// los parametros que envio son el pedido y la funcion (callback)
recepcionEntregarPedido(pedido1, function (cliente) {
    console.log(`Pedido Listo llamar a cliente: ${cliente}`)
});

recepcionEntregarPedido(pedido2, cliente => console.log(`Pedido Listo llamar a cliente: ${cliente}`))

// por default node js es asicrono.
// el pedido 1 se pidio primero pero se muestra despues
// el pedido 2 se pidio segundo pero se muestra antes


