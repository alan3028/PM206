// NUEVO: Funciones exclusivas para la vista del cliente
function mostrarMenuCliente() {
    const disponibles = productos.filter(p => p.cantidad > 0);
    if (disponibles.length === 0) {
        console.log(`\n${color.rojo}Lo sentimos, no hay productos disponibles por el momento.${color.reset}`);
        return false;
    }

    console.log(`\n${color.fondoVerde}${color.blanco} ╭──────────────────────────────────────────────────────────╮ ${color.reset}`);
    console.log(`${color.fondoVerde}${color.blanco} │                    NUESTRO MENÚ                          │ ${color.reset}`);
    console.log(`${color.fondoVerde}${color.blanco} ╰──────────────────────────────────────────────────────────╯ ${color.reset}`);
    
    disponibles.forEach(p => {
        let idFormat = p.id.toString().padStart(2, '0');
        let nombreFormat = p.nombre.padEnd(25, ' ');
        let catFormat = p.categoria.toUpperCase().padEnd(7, ' ');
        console.log(`  ${color.fondoBlanco}${color.negro} [${idFormat}] ${color.reset} ${color.fondoBlanco}${color.verde} ${nombreFormat}${color.reset} | ${color.fondoBlanco}${color.negro}${catFormat}${color.reset} | ${color.fondoBlanco}${color.verde} $${p.precio.toFixed(2)} ${color.reset}`);
    });
    return true;
}

function mostrarPromociones() {
    console.log(`\n${color.fondoBlanco}${color.rojo}  PROMOCIONES AUTOMÁTICAS  ${color.reset}`);
    console.log(`${color.verde}* ¡PROMO 3x2! ${color.blanco}Lleva exactamente 3 unidades de cualquier artículo y la tercera es gratis.${color.reset}`);
    console.log(`${color.verde}* ¡DESCUENTO VOLUMEN! ${color.blanco}Si compras 4 o más unidades del mismo artículo, te descontamos el 10% en ese artículo.${color.reset}\n`);
}





