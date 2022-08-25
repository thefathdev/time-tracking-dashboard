import data from './data.json'

const container = document.querySelector('.container')
const timeframeBtns = document.querySelectorAll('.profile-card__timeframe')
const timeframes = ['daily', 'weekly', 'monthly']

let timeframe = 'weekly'

createCards(data)

timeframeBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    timeframe = timeframes[i]
    console.log(timeframes[i])
    removeCards()
    createCards(data)
  })
})

function createCards(data) {
  data.forEach((datum) => {
    // Create card
    const card = document.createElement('div')
    card.className = 'card'

    // Add icon to card
    const icon = document.createElement('img')

    const imgUrl = new URL(
      `/images/icon-${datum.title.replace(/\s+/g, '-').toLowerCase()}.svg`,
      import.meta.url
    ).href

    icon.src = imgUrl
    icon.alt = 'icon'
    icon.ariaHidden = 'true'
    icon.className = 'card__icon'

    card.appendChild(icon)

    // Add info inside card
    const cardInfo = document.createElement('div')
    cardInfo.className = 'card__info'

    const cardTitle = document.createElement('h2')
    cardTitle.className = 'card__title'
    cardTitle.innerText = `${datum.title}`
    cardInfo.appendChild(cardTitle)

    const cardCurrentTime = document.createElement('p')
    cardCurrentTime.className = 'card__current-time'
    cardCurrentTime.innerText = `${datum.timeframes[timeframe].current}hrs`
    cardInfo.appendChild(cardCurrentTime)

    const kebabIcon = document.createElement('a')
    const kebabIconSvg =
      '<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>'
    kebabIcon.innerHTML = kebabIconSvg
    kebabIcon.className = 'card__kebab-icon'
    cardInfo.appendChild(kebabIcon)

    const cardPreviousTime = document.createElement('p')
    cardPreviousTime.className = 'card__current-time'
    cardPreviousTime.innerText = `Last Week - ${datum.timeframes[timeframe].previous}hrs`
    cardInfo.appendChild(cardPreviousTime)

    card.appendChild(cardInfo)

    container.appendChild(card)
  })
}

function removeCards() {
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => card.remove())
}
