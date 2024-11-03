export async function listaDeProductos() {
  const conexion = await fetch("https://vercel.com/juliovargas104s-projects/challenge-alura-geek/62EEvte8HrUdYtmzoR2ot1ezrKva/source?f=src%2Fdatabase%2Fdb.json");

  const conexionConvertida = await conexion.json(); 
  return conexionConvertida;
}

const nuevoProducto = async (name, price, imagen) => {
  try {
    const res = await fetch("https://vercel.com/juliovargas104s-projects/challenge-alura-geek/62EEvte8HrUdYtmzoR2ot1ezrKva/source?f=src%2Fdatabase%2Fdb.json", {
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
      `https://vercel.com/juliovargas104s-projects/challenge-alura-geek/62EEvte8HrUdYtmzoR2ot1ezrKva/source?f=src%2Fdatabase%2Fdb.json${id}`,
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
