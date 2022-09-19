function func(arr){
    let k=arr[0];
    for (let i = 0; i < arr.length; i++) {
        while(k!==arr[i]){
            return false;
        }
    }
    return true;
    }

    let result = ["a", "a", "s", "k"];
    alert(func(result));