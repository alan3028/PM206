function mostrarPedidosPorCliente(nombreCliente) {
    const pedidosCliente = pedidos.filter(p => p.cliente.toLowerCase() === nombreCliente.toLowerCase());
    if (pedidosCliente.length === 0) {
        console.log("\nNo se encontraron pedidos para este cliente.");
        return;
    }
    pedidosCliente.forEach(pedido => {
        console.log(`\nPedido #${pedido.id}`);
        pedido.items.forEach(item => {
            console.log(`  - ${item.cantidad} x ${item.nombre} = $${item.subtotal.toFixed(2)}`);
        });
        console.log(`  Total del pedido: $${pedido.total.toFixed(2)}`);
    });
}

async function menuCliente() {
    let salir = false;
    while (!salir) {
        console.log("\n--- MODULO CLIENTE ---");
        console.log("1. Consultar Productos");
        console.log("2. Crear Pedido");
        console.log("3. Listar Mis Pedidos");
        console.log("4. Regresar al menu principal");
        
        const opcion = await preguntar("\nElige una opcion: ");
        
        switch (opcion.trim()) {
            case '1':
                listarProductos();
                break;
            case '2':
                listarProductos();
                const nombreCliente = await preguntar("\nIngresa tu nombre: ");
                let items = [];
                let agregando = true;
                console.log("Agrega productos con el formato ID,cantidad (ejemplo: 1,2)");
                console.log("Escribe 'listo' para terminar.");
                
                while (agregando) {
                    const entrada = await preguntar("Producto (ID,cantidad): ");
                    if (entrada.toLowerCase() === "listo") {
                        agregando = false;
                        break;
                    }
                    const partes = entrada.split(",");
                    if(partes.length === 2) {
                        const pid = parseInt(partes[0]);
                        const pcant = parseInt(partes[1]);
                        if (!isNaN(pid) && !isNaN(pcant) && pcant > 0) {
                            items.push({ productoId: pid, cantidad: pcant });
                        } else {
                            console.log("Valores invalidos. Asegurate de ingresar numeros y una cantidad mayor a 0.");
                        }
                    } else {
                        console.log("Formato incorrecto. Usa ID,cantidad");
                    }
                }
                if (items.length > 0) {
                    procesarPedido(nombreCliente, items);
                }
                break;
            case '3':
                const cliente = await preguntar("\nIngresa tu nombre para buscar: ");
                mostrarPedidosPorCliente(cliente);
                break;
            case '4':
                salir = true;
                break;
            default:
                console.log("Opcion no valida.");
        }
    }
}