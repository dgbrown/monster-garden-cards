// require jQuery

function getRandomArrayItems(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function getRandomArrayItem(arr) {
    return getRandomArrayItems(arr, 1);
}

function getFormValuesKVP(form /* jquery elem */) {
    var formArray = form.serializeArray()
    var kvp = {};
    for (var i = 0; i < formArray.length; i++) {
        kvp[formArray[i].name] = formArray[i].value;
    }
    return kvp;
}