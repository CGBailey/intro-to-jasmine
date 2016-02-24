module.exports = {
  hasEnoughGas:function(car,route){
    if(car.milPerGallon * car.gallonsInTank>route.miles){
      return true
    }else{
      return false
    }
  }
}
