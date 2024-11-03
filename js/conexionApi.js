async function listaDeProductos() {
  const conexion = await fetch("http://localhost:3001/productos");

  const conexionConvertida = conexion.json(); 
  return conexionConvertida;
}

const nuevoProducto = async (name, price, imagen) => {
  try {
    const res = await fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, imagen }),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const borrarProducto = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3001/productos${id}`,
      {
        method: "DELETE",
      }
    );
    return res.ok;
  } catch (err) {
    console.log(err);
  }
};

export const conexionApi = {
  listaDeProductos,
  nuevoProducto,
  borrarProducto,
};
