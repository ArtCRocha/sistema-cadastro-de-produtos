const listaProdutos = () => {
  return fetch("http://localhost:3000/products").then((res) => {
    return res.json();
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

export { listaProdutos, cadastrarProduto };
