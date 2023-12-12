/* 

const result = groupBy(inputArray, 'department');
console.log(result);
console.log("hello")

function groupBy(arr, property){
var groupedData = {};
for(var i=0;i<arr.length;i++){
var obj=arr[i];
var key =obj[property];
if(!groupedData[key]){
   groupedData[key]=[]
}
    groupedData[key].push(obj)
}
return groupedData;
  return arr.reduce(function(acc,obj){
  
  let key = obj[property];
  if(!acc[key]){
  acc[key]=[]
  }
  acc[key].push(obj);
  return acc
  })
}

const inputArray = [
  { department: 'HR', name: 'Alice' },
  { department: 'Engineering', name: 'Bob' },
  { department: 'HR', name: 'Charlie' },
  { department: 'Finance', name: 'David' },
  { department: 'Engineering', name: 'Eve' },
];

const result = groupBy(inputArray, 'department');
console.log(result);
Should output:
{
  HR: [
    { department: 'HR', name: 'Alice' },
    { department: 'HR', name: 'Charlie' }
  ],
  Engineering: [
    { department: 'Engineering', name: 'Bob' },
    { department: 'Engineering', name: 'Eve' }
  ],
  Finance: [
    { department: 'Finance', name: 'David' }
  ]
}
 */

const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
// Should output: [1, 2, 3, 4, 5, 6, 7, 8]

function flattenArray(arr) {
  const flattened = [];
  const stack = [...arr];

  while (stack.length) {
    const nextarry = stack.pop();

    if (Array.isArray(nextarry)) {
      stack.push(...nextarry);
    } else {
      flattened.unshift(nextarry);
    }
  }
  return flattened;
}
