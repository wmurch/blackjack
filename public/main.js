

const suits = ['clubs', 'diamonds','hearts','spades']
const ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']

const deck = []

const createDeck = () => {

  for (let i = 0; i < suits.length; i++){

    let suit = suits[i]

    //console.log(suit)

    for (let j = 0; j < ranks.length; j++) {

      let rank = ranks[j]

      const card = rank + " of " + suit

      deck.push(card)
    //console.log(card) 
      
    }
  }
}
const shuffleDeck = () => {
  x=''
  for (let i = deck.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1))
    x=deck[i]
    deck[i]=deck[j]
    deck[j]=x
    console.log(deck[i])
    console.log(deck[j])
    //deck.push(deck[i])
  }
//console.log(deck)

  for (let i = 0; i < deck.length; i++ ){

    const shuffledCard = deck[i]
    const listItem = document.createElement('li')
    listItem.textContent = shuffledCard
    console.log(listItem)
    document.querySelector('.display-deck').appendChild(listItem)
  }
}

//console.log(deck)
const main = () => {
  createDeck()
  shuffleDeck()
}

document.addEventListener('DOMContentLoaded', main)

