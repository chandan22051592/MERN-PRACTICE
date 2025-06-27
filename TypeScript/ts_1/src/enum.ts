enum Direction{
    Up='up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

function doSomething (keyPressed : Direction){
    if(keyPressed = Direction.Up){
        // do something
    }
}

doSomething(Direction.Up);
doSomething(Direction.Down);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
