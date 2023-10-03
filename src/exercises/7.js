let tipoProducto = 'camisas'
let precioProducto = 0
let precioTotal = 0
const listaProductos = []
let mayorVentaProducto = ''
let mayorVentaPrecio = 0

while (tipoProducto !== '0') {
  tipoProducto = window.prompt('Ingrese su tipo de Producto(camisas, pantalones, zapatos) o 0 para finalizar: ')
  if (tipoProducto === '0') {
    break
  }
  precioProducto = parseFloat(window.prompt('Ingrese el precio del producto: '))

  if (tipoProducto === 'camisas') {
    precioProducto = precioProducto - (precioProducto * 0.05)
  } else if (tipoProducto === 'pantalones') {
    precioProducto = precioProducto - (precioProducto * 0.08)
  } else if (tipoProducto === 'zapatos') {
    precioProducto = precioProducto - (precioProducto * 0.10)
  }

  if (precioProducto > mayorVentaPrecio) {
    mayorVentaProducto = tipoProducto
    mayorVentaPrecio = precioProducto
  }
  listaProductos.push(tipoProducto)
  listaProductos.push(precioProducto)

  precioTotal += precioProducto

  if (precioTotal >= 1000 && precioTotal <= 2000) {
    precioTotal = precioTotal - (precioTotal * 0.10)
  } else if (precioTotal >= 2000 && precioTotal <= 4000) {
    precioTotal = precioTotal - (precioTotal * 0.20)
  } else if (precioTotal > 4000) {
    precioTotal = precioTotal - (precioTotal * 0.30)
  }
}

console.log('El precio total de la compra es:  ' + precioTotal)
console.log('la venta mas grande ha sido de ' + mayorVentaProducto + ' con un precio de ' + mayorVentaPrecio)
