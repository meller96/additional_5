module.exports = function check(str, bracketsConfig) { 
if (str.length == 0) 
return true; 
var arr = []; 
for (var i = 0; i < bracketsConfig.length; i++) 
{ 
arr[i] = []; 
} 
for (i = 0; i < str.length; i++) 
{ 
for (var j = 0; j < bracketsConfig.length; j++) { 
if (str[i] == bracketsConfig[j][1] && !(bracketsConfig[j][1] == bracketsConfig[j][0] && arr[j].length == 0)) 
{ 
for (var k = 0; k < bracketsConfig.length; k++) 
if (arr[k][arr[k].length - 1] > arr[j][arr[j].length - 1]) 
return false; 
arr[j] = arr[j].slice(0, arr[j].length - 1); 
//print("sliced ", j, " ", arr[j]); 
} 
else if (str[i] == bracketsConfig[j][0]) 
{ 
arr[j].push(i); 
//print("start ", j, " ", arr[j]); 
} 
} 
} 
for (var i = 0; i < bracketsConfig.length; i++) 
{ 
if (arr[i].length != 0) 
return false; 
} 
return true; 
}