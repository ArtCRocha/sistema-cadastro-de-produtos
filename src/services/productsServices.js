const listaProdutos = () => {
  return fetch("http://localhost:3000/products").then((data) => {
    return data.json();
  });
};

const cadastrarProduto = (image, name, description, price) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      name: name,
      description: description,
      price: price,
    }),
  }).then((data) => {
    return data.body;
  });
};

const deletarProduto = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};

const detalhesProduto = (id) => {
  return fetch(`http://localhost:3000/products/${id}`).then((data) => {
    return data.json();
  });
};

export { listaProdutos, cadastrarProduto, deletarProduto, detalhesProduto };
