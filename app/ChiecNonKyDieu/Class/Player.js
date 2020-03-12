class Player {
    constructor(id,name,score,active,turn) {
        this._id = id;
        this._name = name;
        this._score = score;
        this._active = active;
        this._turn = turn;

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

    set turn(turn){
        this._turn = turn;
    }
    get turn(){
        return this._turn;
    }

}