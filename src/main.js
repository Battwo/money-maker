let points = 500

let PokerFaceskillLevel = 0
let plevel = document.getElementById('plevel')


let LuckskillLevel = 0
let lLevel = document.getElementById('lLevel')

let bluffingskillLevel = 0
let bLevel = document.getElementById('bLevel')

let millenniumeyeskill = 0
let mLevel = document.getElementById('mLevel')


let gameskill = 0
let fLevel = document.getElementById('fLevel')



function changePoint(amount) {
  points = points + amount

  console.log(points)

  pointCounter.innerText = points.toFixed(2) + ' Coins'
}

function buyPokerFaceskill() {
  console.log('hi from buyPokerFaceskill')
  if (points >= 100) {
    changePoint(-100)
    PokerFaceskillLevel = PokerFaceskillLevel + 1
    plevel.innerText = 'Level' + PokerFaceskillLevel

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}


function buyLuckskill() {
  console.log('hi from buyLuckskill')
  if (points >= 300) {
    changePoint(-300)
    LuckskillLevel = LuckskillLevel + 1
    lLevel.innerText = 'Level' + LuckskillLevel

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}


function buybluffingskill() {
  console.log('hi from buybluffingskill')
  if (points >= 600) {
    changePoint(-600)
    bluffingskillLevel = bluffingskillLevel + 1
    bLevel.innerText = 'Level' + bluffingskillLevel

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}

function buymillenniumeyeskill() {
  console.log('hi from buymillenniumeyeskill')
  if (points >= 900) {
    changePoint(-900)
    millenniumeyeskill = millenniumeyeskill + 1
    mLevel.innerText = 'Level' + millenniumeyeskill

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}


function buygameskill() {
  console.log('hi from buygameskill')
  if (points >= 1000) {
    changePoint(-1000)
    gameskill = gameskill + 1
    fLevel.innerText = 'Level' + gameskill

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}



function bigclick() {
  let basePoint = 1 + (PokerFaceskillLevel ** 1.05) + (LuckskillLevel ** 2.55) + (bluffingskillLevel ** 4.55) + (millenniumeyeskill ** 5.55) + (gameskill ** 8.55)

  changePoint(basePoint)

}