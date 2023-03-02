let bubbleSort = document.getElementById('bubbleBtn')

bubbleSort.addEventListener("click",async () =>{
  let allDiv = document.querySelectorAll(".bars_styling")
  let arr = [...allDiv]

  let n = arr.length;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          const divText1 = window.getComputedStyle(arr[j])
          const divText2 = window.getComputedStyle(arr[j + 1])
          let transform1 = parseInt(divText1.getPropertyValue("height"));
          let transform2 = parseInt(divText2.getPropertyValue("height"));
          arr[j].style.background = "red"; 
        arr[j + 1].style.background = "red";
      if (transform1 > transform2) {
        // Swap the heights of the divs
        arr[j].style.height = transform2 + "px";
        arr[j + 1].style.height = transform1 + "px";
        
    }
    await new Promise(resolve => setTimeout(resolve, 1));
    arr[j].style.background = "yellow"; 
    arr[j + 1].style.background = "yellow";
    }
}

})