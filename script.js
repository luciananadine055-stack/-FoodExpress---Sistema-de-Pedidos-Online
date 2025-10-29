let subtotal = 0;

function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById("lista-carrito");
  const item = document.createElement("li");
  item.textContent = `${nombre} - $${precio}`;
  lista.appendChild(item);

  subtotal += precio;
  document.getElementById("subtotal").textContent = subtotal;
}
