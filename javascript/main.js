/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'} 
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [];


users.forEach(function(element, index, array){
    if(element.race==='human'){
        humans.push(element);
    }
})

test('q1', humans);



/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia;

var leia=users.filter(function(element, index, array){
    return element.id===2;
})

/*var leia=[];
users.forEach(function(element, index, array){
    if(element.id===2){
        leia.push(element);
    }
})
*/

test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.    
================*/
var totalAge = 0;


var ages = users.map(function(element, index, array){
    return element.age;
})

function sumArray(y){
    var total =  0;
     for(var i=0;i<y.length;i++)
       {                  
         if(isNaN(y[i])){
         continue;
          }
           total += Number(y[i]);
        }
      return total;
}

var totalAge=sumArray(ages);

test('q3', totalAge);
/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [];

var userNames = users.map(function(element, index, array){
    return element.username;
})


test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]

numbers.sort(function(a,b){
    return a-b;
})


test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = 'Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.';

var pattern =/lorem/ig;
var replacement = replacement.replace(pattern, 'delorem');

test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()
================
The difference is that .map will create a new array.*/
/*==============
    Q8 - What is the difference between .filter() and .find()
================

.find returns only the first match found, whereas .filter add all matches to a new array*/



function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}