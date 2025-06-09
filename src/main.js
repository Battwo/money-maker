let points = 0

let PokerFaceskillLevel = 0
let plevel = document.getElementById('plevel')



let pointCounter = document.getElementById("pointCounter")


function changePoint(amount){
  points = points + amount

  console.log(points)
  
  pointCounter.innerText = points.toFixed(2) + ' Coins'
}

function buyPokerFaceskill(){
  console.log('hi from buyPokerFaceskill')
  if (points >= 100){
    changePoint(-100)
    PokerFaceskillLevel = PokerFaceskillLevel + 1
plevel.innerText = 'Level' + PokerFaceskillLevel

  } else {
    alert("NOT ENOUGH MONEY 😛 your a gambler not a scammer")
  }
}

function bigclick(){
let basePoint = 1 + (PokerFaceskillLevel ** 1.05)

  changePoint(basePoint)

}