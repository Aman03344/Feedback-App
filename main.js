let form = document.querySelector("form");
let select = document.querySelector("select");
let textArea = document.querySelector("textarea");
let ul = document.querySelector("ul");

const submitFeedback = (e) => {
    e.preventDefault();

    
    const ratingValue = select.value;  

    // 
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let delbtn = document.createElement("button");

    //
    h1.innerText = "Rating : " + "⭐".repeat(ratingValue); 
    h1.style.fontSize = "30px";
    p.innerText = "Review : " + textArea.value;
    
    p2.innerText = "Thank You For Your Precious Feedback";
    p2.style.color = "gray";
    p2.style.fontSize = "14px";
    delbtn.innerText = "Delete";
    delbtn.className = "btn btn-danger float-end";

    // 
    li.className = "list-group-item";

    //rating colors
    if (ratingValue <= 2) {
        li.style.backgroundColor = "#ffcccc"; 
        li.style.marginTop="10px"

    } else if (ratingValue <= 4) {
        li.style.backgroundColor = "#ffffcc"; 
        li.style.marginTop="10px"

    } else if (ratingValue == 5) {
        li.style.backgroundColor = "#ccffcc"; 
        li.style.marginTop="10px"

    }else if(ratingValue  ) {
         h1.innerText = "Please select a rating" 
         li.style.marginTop="10px"



    }

    // Append elements to list item
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(delbtn);

    ul.appendChild(li);

  
    delbtn.addEventListener("click", () => {
            li.remove();
        
    });

  
    form.reset();
};


form.addEventListener("submit", submitFeedback);
