// function groupAnagrams(words) {
//   const map = new Map()

//   words.forEach(word => {
//     const key = word.split('').sort().join('')
//     if (!map.has(key)) {
//       map.set(key, [])
//     }

//     map.get(key).push(word)
//   })

//   return Array.from(map.values())
// }

// const input = ["eat", "tea", "tan", "ate", "nat", "bat","tab"]
// console.log(groupAnagrams(input))



  function filter(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
          let word = arr[i].split("").sort().join("");// aet 
          if(!obj[word]){
            obj[word] = [];
          }
          /* 
            obj={
            aet:[eat,tea],
            ant:[tan,ate],
            bat:[bat]
            }
          */
          obj[word].push(arr[i]);
      }
      console.log(Object.values(obj));
      
    }

  filter(["eat", "tea", "tan", "ate", "nat", "bat"]);









