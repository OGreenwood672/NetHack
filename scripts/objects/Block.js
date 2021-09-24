

/*

Parent block class

Name might need to be refactored

*/

class Block {

    constructor(x, y) {
        this.content = null; //Object (Might change to inheritence)
        this.x = x;
        this.y = y;
    }

    //Allows code to change content
    setContent(new_content) {
        this.content = new_content;
    }

    //Allows code to retrieve what this block holds
    getContent() {
        return this.content;
    }

    // Allows code to retrieve coords of this block
    getCoords() {
        return this.x, this.y;
    }



}

