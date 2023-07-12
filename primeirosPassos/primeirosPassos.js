// botão que direciona para o site da eplay.video
const btnSiteEplay = () => {
  window.location.href = 'https://eplay.video/'
}
// botão que direciona para a home da pagina de FAQ
const btnHome = () => {
  window.location.href = './index.html'
}




//events

document.getElementById('siteEplay')
  addEventListener('click', btnSiteEplay)

document.getElementById('home')
  addEventListener('click', btnHome)