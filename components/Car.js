
class Car{
    constructor(tank, consuption){
        this.engine = true
        this.tank = tank //l
        this.consuption = consuption //l/100km
        this.mileage = 0
    }
turnOn(){this.engine === true
        console.log('Varyklis ijungtas')
    } 
    turnOff(){
        this.engine === false
        console.log('Varyklis isjungtas')
        }
drive(distance){ if(this.engine === false){
    console.log('Norint vaziuoti ijunk varikli')
    this.turnOn()
    return 
    }   
    if(this.tank === 0){
    console.error('Error: bake tuscia')
    return
    }
    let maxDistanceAvailable  = this.tank / this.consuption  * 100   
    
    if (maxDistanceAvailable >= distance){
        this.mileage += distance
        this.tank -= distance / 100 * this.consuption 
        console.log(`Vaziuojam ${this.mileage}`)
    }else{
        this.mileage += maxDistanceAvailable
        this.turnOff()
        console.log(`Bake per mazai degalu norimam atstumui ${distance}: nuvaziavo ${maxDistanceAvailable} ir liko nenuvaziuoti ${distance - maxDistanceAvailable}` )
    }
    }

}
export { Car }