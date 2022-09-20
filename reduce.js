/*
Write a function called extractValue which accepts an array 
of objects and a key and returns a new array with
 the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  // alternative 1:
  let nextValHolder = arr.reduce(function (holder, nextVal) {
    let newValHolder = [...holder, nextVal[key]];
    return newValHolder;
  }, []);

  /*
  // Alternative 2 :
  let nextValHolder = arr.reduce(function (holder, nextVal) {
    holder.push(nextVal[key]);
    return holder;
  }, []);
*/

  /*
  // Alternative 3 :
  let nextValHolder = arr.reduce(function (holder, nextVal) {
    return holder.concat(nextVal[key]);
  }, []);
*/
  return nextValHolder;
}
let extractValueHolder = extractValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
);
console.log(`extract value: `, extractValueHolder);

/*
Write a function called vowelCount which accepts a string and
 returns an object with the keys as the vowel and the
  values as the number of times the vowel appears in the string. 
  This function should be case insensitive so a lowercase
   letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  let newStr = str.toLowerCase();
  vowel = "aeiou";
  let newObjHolder = newStr.split("").reduce(function (holder, nextVal) {
    if (vowel.indexOf(nextVal) !== -1) {
      if (nextVal in holder) {
        holder[nextVal]++;
      } else {
        holder[nextVal] = 1;
      }
    }
    return holder;
  }, {});
  return newObjHolder;
}
let newArrayHolders = vowelCount("I Am awesome and so are you");
console.log(`vowel count is:`, newArrayHolders);

/*
Write a function called addKeyAndValue which accepts an array of objects
 and returns the array of objects passed to it with each object now including
  the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  let nextValHolder = arr.reduce(function (holder, nextVal) {
    nextVal[key] = value; // add key and value
    return holder.concat(nextVal);
  }, []);

  return nextValHolder;
}
let nextValHolders = addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "Instructor"
);
console.log(` add key and value:`, nextValHolders);

/*
Write a function called partition which accepts an array
 and a callback and returns an array with two arrays inside of it.
  The partition function should run the callback function on each 
  value in the array and if the result of the callback function at 
  that specific value is true, the value should be
   placed in the first subarray. If the result of 
   the callback function at that specific value is false,
    the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  let nextValHolder = arr.reduce(
    function (holder, nextVal) {
      // Another alternative solution :
      holder[callback(nextVal) ? 0 : 1].push(nextVal);
      return holder;

      /*
      //The methodology of the above function is retranslated, and both should work
      if (callback(nextVal)) {
        holder[0].push(nextVal);
      } else {
        holder[1].push(nextVal);
      }
      return holder;
      */
    },
    [[], []]
  );
  return nextValHolder;
}
