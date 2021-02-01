class Test {
    constructor(name){
        this.name = name;
        console.log('A new object of type Test was created..')
    }

    print(){
        console.log('From Test object:', this.name)
    }
    createOffer(cbk){

        let s = {sdp:"khkhkhkhkjhkjhkhkj"}

        setTimeout(_=>cbk(s, 1, true), 5000);

    }
}