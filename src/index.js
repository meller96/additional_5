module.exports =  function check(str, bracketsConfig) {
    if (str.length == 0)
        return true;
    for (var i = 0; i < bracketsConfig.length; i++) {
        var firstIndex = str.indexOf(bracketsConfig[i][0]);
        var secondIndex = str.indexOf(bracketsConfig[i][1], firstIndex + 1);
        if (firstIndex == -1 && secondIndex == -1)
            continue;
        if (firstIndex == -1 || secondIndex == -1)
            return false;
        while (secondIndex != -1) {
            if (check(str.substr(firstIndex + 1, secondIndex-firstIndex - 1), bracketsConfig) && check(str.substr(0, firstIndex) + str.substr(secondIndex+1), bracketsConfig))
                break;
            secondIndex = str.indexOf(bracketsConfig[i][1], secondIndex + 1);
        }
        if (secondIndex == -1)
            return false;
    }
    return true;       
}
 

