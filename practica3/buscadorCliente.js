// NUEVO: Buscador integrado en Cliente
            case '2':
                console.log(`\n${color.fondoBlanco}${color.verde} --- BUSQUEDA DE PRODUCTOS --- ${color.reset}`);
                console.log("1. Productos Accesibles (Menos de $50)");
                console.log("2. Productos Premium ($50 o mas)");
                console.log("3. Solo Bebidas");
                console.log("4. Solo Postres");
                console.log("5. Buscar por nombre exacto o palabra clave");

                const filtroCli = await preguntar(`\n${color.verde}Elige una opcion de busqueda: ${color.reset}`);
                let resultadosCli = [];
                // Lógica de filter() con validación de stock (cantidad > 0)
                if (filtroCli === '1') resultadosCli = productos.filter(p => p.precio < 50 && p.cantidad > 0);
                if (filtroCli === '2') resultadosCli = productos.filter(p => p.precio >= 50 && p.cantidad > 0);
                if (filtroCli === '3') resultadosCli = productos.filter(p => p.categoria === 'bebida' && p.cantidad > 0);
                if (filtroCli === '4') resultadosCli = productos.filter(p => p.categoria === 'postre' && p.cantidad > 0);

                if (filtroCli >= '1' && filtroCli <= '4') {
                    if (resultadosCli.length > 0) {
                        console.log(`\n${color.fondoVerde}${color.blanco} RESULTADOS DE TU BUSQUEDA ${color.reset}`);
                        resultadosCli.forEach(p => {
                            let idF = p.id.toString().padStart(2, '0');
                            let nomF = p.nombre.padEnd(25, ' ');
                            console.log(`  ${color.fondoBlanco}${color.negro} [${idF}] ${color.reset} ${color.fondoBlanco}${color.verde} ${nomF}${color.reset} | ${color.fondoBlanco}${color.verde} $${p.precio.toFixed(2)} ${color.reset}`);
                        });
                    } else {
                        console.log(`\n${color.rojo}No hay productos disponibles para este filtro en este momento.${color.reset}`);
                    }
                } else if (filtroCli === '5') {
                    // NUEVO: Búsqueda dinámica con includes()
                    const nombreBuscar = await preguntar(`\n${color.verde}Ingresa el nombre del producto que buscas: ${color.reset}`);
                    const encontrados = productos.filter(p => p.nombre.toLowerCase().includes(nombreBuscar.toLowerCase()) && p.cantidad > 0);
                    
                    if (encontrados.length > 0) {
                        console.log(`\n${color.fondoVerde}${color.blanco} ¡ENCONTRAMOS ESTO PARA TI! ${color.reset}`);
                        encontrados.forEach(p => {
                            let idF = p.id.toString().padStart(2, '0');
                            let nomF = p.nombre.padEnd(25, ' ');
                            console.log(`  ${color.fondoBlanco}${color.negro} [${idF}] ${color.reset} ${color.fondoBlanco}${color.verde} ${nomF}${color.reset} | ${color.fondoBlanco}${color.verde} $${p.precio.toFixed(2)} ${color.reset}`);
                        });
                    } else {
                        console.log(`\n${color.rojo}Lo sentimos, no encontramos un producto disponible con ese nombre.${color.reset}`);
                    }
                } else {
                    console.log(`${color.rojo}Opcion no valida.${color.reset}`);
                }
                break;

                