let obj1 = {}
let obj2 = {}

console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

// pollyfill


    Array.prototype.myMap = function (callback){
        let result = []
        for(var i = 0; i<this.length; i++){
            result.push(callback(this[i],i, this))
        }
        return result
    }


Array.prototype.myFilter = function(callback){
    let result = []
    for(var i = 0; i<this.length; i++){
        if(callback(this[i],i , this)){
            result.push(this[i])
        }
    }
    return result

}

Array.prototype.myReduce == function(callback, initialValue){
    var acc = initialValue
    var startIndex = 0
    if(initialValue==undefined){
        acc = this[0]
        startIndex = 1
    }
    for(var i = startIndex; i<this.legth; i++){
        acc = callback(acc, this[i], i, this)
    }
    return acc
}
    

Array.prototype.myForEach = function(callback){
    for(var i = 0; i<this.length; i++){
        callback(this[i], i, this)
    }               
}
let arr = [1,2,3,4,5]   


Array.prototype.myFind = function(callback){
    for(var i = 0; i<this.length; i++){
      if(callback(this[i],i, this)){
        return this[i]
      }
    }
}

