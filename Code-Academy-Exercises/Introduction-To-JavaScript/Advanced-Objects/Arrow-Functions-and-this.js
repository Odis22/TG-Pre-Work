const robot = {
  energyLevel: 100,
  checkEnergy () {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
/*
Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. long story short, never usearrow functions when using this in a method
*/
robot.checkEnergy();