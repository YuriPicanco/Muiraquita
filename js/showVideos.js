const videosList = document.querySelector('.videos_container')

export default async function callVideos(api){
    const apiList = await api.List();
    apiList.forEach(apiItem => {
      console.log(apiItem);
      videosList.appendChild(buildCard(apiItem.nome, apiItem.canal, apiItem.url, apiItem.visualizacoes));
    });
}

export const buildCard = (nome, canal, url, visualizacoes)=>{

  const video = document.createElement('li');
  video.className='videos_item';
  video.innerHTML=` 
  <iframe width="100%" height="72%" src="${url}"
  title="${canal}" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  <div class="descricao-video">
  <img src="${nome}" alt="logo canal alura">
  <h3>${nome}</h3>
  <p>${visualizacoes}</p>
  </div>`

  return video
}