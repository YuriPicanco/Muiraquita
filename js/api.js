async function List() {
  try {
    const connect = await fetch('http://localhost:3000/videos');
    const connectResolve = await connect.json();

    return connectResolve;
  } catch (err) {
    console.error('Erro ao obter a lista de vídeos:', err);
    throw err;
  }
}

export const api = { List };