function hello(){
    //console.log("Hello Tshepo");
}
    hello();

// Task 2///

function evenOrOdd(num){
    if(num % 2===0){
        return 'even'
    }else{
        return 'odd'
    }
}
//console.log(evenOrOdd(3))

//TASK 3//

function square(n){
    var str = '';
    for(var i = 1; i <= n; i++){
        for(var d = 1; d <= n; d++){
            str += '#';
        }
        str += '\n';
    }
    return str;
}

//console.log(square(4))

//TASK 4//

function triangle(n){
    var str = " ";
    for ( var i = 0; i <= n; i++){

        for (var j = 1; j < n; j++){
            str = str + " ";
        }
        for (var k = 1; k<= i; k++){
            str = str + "#";
        }
      //  console.log(str)
        str = "";
    }
}


 triangle(4);

 //TASK 5//

 function isosceleTriangle(n){
    const midPoint = Math.floor((n * 2 - 1)/2)

    for(row = 0; row < n; row++){
        let level = '';

        for(col = 0; col < n*2-1; col++){
        if(midPoint - row <= col && midPoint + row >= col){
            level += '#';
        }else {
            level += ' '
        }

        }

       // console.log(level)

    }

}


isosceleTriangle(4)

//TASK 6

function longestWords(str) {
    let words = str.split(' ');
    let size = 0;
    let max = [''];

    for(let i = 0;i<words.length;i++){
        if(words[i].length>=size){
            size = words[i].length;
            if(max[max.length-1].length <words[i].length){
                max = [];
                max.push(words[i])
            }else{
                max = [...max,words[i]]
            }
        }
    }
    return [...max];
}

//console.log(longestWords("the quick brown fox ate my chickens"));
//console.log(longestWords("Once upon a time"));

//TASK 7

let Array1 = [11,22,33];
let Array2 = [1, 2, 3];

let mixArray = [];

mixArray.push(
    Array1[0],Array2[0],Array1[1],Array2[1],Array1[2],Array2[2]
);

//console.log(mixArray);


//TASK 8
function frame(arr) {
    function fill(str, length, char) {
      return str.length < length ? fill(str + char, length, char) : str;
    }
    let size = arr
      .map(str => {
        return str.length;
      })
      .reduce((a, b) => {
        return Math.max(a, b);
      });
    let line = fill("", size + 4, "*");
    arr = arr.map(element => {
      return "* " + fill(element, size, " ") + " *";
    });
    arr.unshift(line);
    arr.push(line);
    return arr.join("\n");
  }
//console.log(frame(["Write", "good", "code", "every", "day"]));
