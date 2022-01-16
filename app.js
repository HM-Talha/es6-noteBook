const mainBox = document.getElementById("mainBox");
// console.log(mainBox);

let addItem = () => {
    var titleInp = document.getElementById("titleInp");
    var textInp = document.getElementById("textInp");

    if (titleInp.value.length > 2 && textInp.value.length > 2) {
        //create box//
        const box = document.createElement("div");
        box.setAttribute("class", "myBox animate__animated animate__backInUp");
        box.setAttribute("data-aos", "fade-up")

        //create section
        const section = document.createElement("section");
        section.setAttribute("class", "list");
        box.appendChild(section);

        // create h4 for title
        const h4 = document.createElement("h4");
        let h4Text = document.createTextNode(titleInp.value);
        h4.appendChild(h4Text);
        section.appendChild(h4);

        // create p for input text
        const para = document.createElement("p");
        let paraText = document.createTextNode(textInp.value);
        para.appendChild(paraText);
        section.appendChild(para);
        section.setAttribute("data-aos", "fade-up")

        //create h6 for set edit icon and 
        const h6 = document.createElement("h6");
        h6.innerHTML = "<i onclick='dlt(this)' class='fas fa-minus-circle'></i><i onclick='edit(this)' class='fas fa-edit'></i>";
        section.appendChild(h6);

        // console.log(h6);
        // console.log(box);
        mainBox.appendChild(box);
        textInp.value = "";
        titleInp.value = "";
    } else {
        alert("Enter Value Please...!")
    }
}

//delete All Function
let dltAll = () => {
    mainBox.innerHTML = "";
}

//one remove function
let dlt = e => {
    // console.log(e.parentNode.parentNode.parentNode)
    e.parentNode.parentNode.parentNode.remove();
}

//edit function
let edit = e => {
    // console.log(e.parentNode.parentNode.firstChild.nextSibling);
    let val = e.parentNode.parentNode.firstChild.innerHTML;
    let editTitle = prompt("Edit Title Sir", val);
    e.parentNode.parentNode.firstChild.innerHTML = editTitle;
    let val2 = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let editText = prompt("Edit Text Sir", val2);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editText;


}