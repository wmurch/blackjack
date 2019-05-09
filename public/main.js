
const suits = ['clubs', 'diamonds','hearts','spades']
const ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const deck = []

const players = ['house','player01']
const hand = []
const createDeck = () => {

  for (let i = 0; i < suits.length; i++){
    
    let suit = suits[i]

  for (let j = 0; j < ranks.length; j++) {
    let rank = ranks[j]
    
    if (rank === 'Ace'){

      value = "11"
    } 
    else if (rank === 'Jack' || rank === 'Queen' || rank === 'King'){

        value = "10" 
      }
    else{
        value = rank
      }

      imgProp = "/images/" + (imgRank + "_of_" + imgSuit) + ".svg"

      const card = {
        suit: suit,
        rank: rank,
        value: value,
        img: imgProp }

      deck.push(card)
    console.log(card) 
    }
  }

console.log(deck)
const shuffleDeck = () => {
  x=''
  for (let i = deck.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1))
    x=deck[i]
    deck[i]=deck[j]
    deck[j]=x
  }
console.log(deck)

  for (let i = 0; i < deck.length; i++ ){

    const shuffledCard = deck[i]
    const listItem = document.createElement('li')
    listItem.textContent = shuffledCard
    console.log(listItem)
    document.querySelector('.display-deck').appendChild(listItem)
  }
}
const playHand = () => {

   score = ''
    for (let i = 1; i <= score; i++){
    }
}
/* const pickCard = () => {
pickedCard = deck[0]
document.querySelector('.picked-card').textContent = pickedCard 
} */
//console.log(deck)

const main = () => {
  createDeck()
  shuffleDeck()
}
document.addEventListener('DOMContentLoaded', main)
//document.querySelector('.pick=card').addEventListener('click', pickCard)
}
