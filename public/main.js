const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const deck = []

players = ['player01', 'house']

const player01 = 0
const house = 0
const player01_hand = []
const house_hand = []
const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    let suit = suits[i]

    for (let j = 0; j < ranks.length; j++) {
      let rank = ranks[j]

      if (rank === 'Ace') {
        value = '11'
      } else if (rank === 'Jack' || rank === 'Queen' || rank === 'King') {
        value = '10'
      } else {
        value = rank
      }
      imgRank = rank
      imgSuit = suit
      imgProp = '/images/' + (imgRank + '_of_' + imgSuit) + '.svg'

      const card = {
        suit: suit,
        rank: rank,
        value: value,
        img: imgProp
      }
      //console.log(card)
      deck.push(card)
    }
  }
}
const shuffleDeck = () => {
  x = ''
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    x = deck[i]
    deck[i] = deck[j]
    deck[j] = x
  }
}
//console.log(deck)

const dealHand = () => {
  for (j = 0; j < 2; j++) {
    for (let i = 0; i < players.length; i++) {
      playerName = players[i]
      dealtCard = deck.pop()

      const playerHand = {
        player: playerName,
        playerCards: dealtCard
      }
      if (playerName === 'player01') {
        player01_hand.push(playerHand)
      }
      if (playerName === 'house') {
        house_hand.push(playerHand)
      }
    }
  }
  console.log(player01_hand)
  console.log(house_hand)

  const firstCard = deck[0]
  // console.log(firstCard)
  //score = ''
  //for (let i = 1; i <= score; i++) {}
}
/* const calculateScore = () => {
  for (let i = 0; i < players.length; i++) {
    if (players.value === hand.player) {
      //console.log(hand.playerCards)
    }
  }
} */
/* const pickCard = () => {
pickedCard = deck[0]
document.querySelector('.picked-card').textContent = pickedCard 
} */

const main = () => {
  createDeck()
  shuffleDeck()
  dealHand()
  // calculateScore()
}
document.addEventListener('DOMContentLoaded', main)
//document.querySelector('.pick=card').addEventListener('click', pickCard)
