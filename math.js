function add(a, b) {
    return a + b;
}
function sub(a,b)
{
    return a-b;
}
//first way of export
module.exports = {
    add,sub
};


// second way

//exports.add = (a,b) => a+b;

//exports.sub = (a,b) => a-b;
