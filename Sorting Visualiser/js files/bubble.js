let allDiv = document.querySelectorAll("barsStyling")
let arr = [...allDiv]


console.log(arr);
let bubbleSort = document.getElementById('bubbleBtn')

bubbleSort.addEventListener("click",() =>{
    
        let n = arr.length;
        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    // swap arr[j] and arr[j+1]
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    
})