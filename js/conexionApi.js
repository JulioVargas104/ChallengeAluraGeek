export async function listaDeProductos() {
  const conexion = await fetch("https://fakeapi-tan.vercel.app/productos");

  const conexionConvertida = await conexion.json(); 
  return conexionConvertida;
}

const nuevoProducto = async (name, price, imagen) => {
  try {
    const res = await fetch("https://fakeapi-tan.vercel.app/productos", {
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
      `https://fakeapi-tan.vercel.app/productos${id}`,
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
