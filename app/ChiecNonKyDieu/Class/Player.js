class Player {
    constructor(id,name,score,active) {
        this._id = id;
        this._name = name;
        this._score = score;
        this._active = active;
    }
    set id(id){
        this._id = id;
    }
    get id(){
        return this._id;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set score(score){
        this._score = score;
    }
    get score(){
        return this._score;
    }
    set active(active){
        this._active = active;
    }
    get active(){
        return this._active;
    }

     handleScore(){

    }

}