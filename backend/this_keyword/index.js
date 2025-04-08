let marks = 97;
const student = {
    name : "Aman",
    marks : 95,

    getName : function(){
        console.log(this);
        return this.name;

    },

    getMarks : ()=>{
        console.log(this);
        return this.marks;

    }

}


console.log(student.getName());// will point to member of calling object

console.log(student.getMarks()); // for "arrow" function this points to parent object eg. in this case parent object is global
