
/*

Parent block class

Name might need to be refactored

*/

class Block {

    static appearance = {
        "wall": "#ffffff",
        "empty": "#000000"
    }
    

    constructor(x, y) {
        this.content_name = null; //Object (Might change to inheritence)

        //Keeps track of block's whereabouts
        this.x = x;
        this.y = y;
    }

    //Allows code to change content
    setContent(new_content_name) {
        this.content_name = new_content_name;
    }

    //Allows code to retrieve what this block holds
    getContent() {
        return this.content_name;
    }

    // Allows code to retrieve coords of this block
    getCoords() {
        return this.x, this.y;
    }

    getColour() {

        if (this.content_name == null) {
            return Block.appearance["empty"];
        }
        return Block.appearance[this.content_name];

    }



}

