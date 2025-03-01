let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
 inputBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    inputEl.value="" // clearing the i/p feild after displaying
    renderLeads()
})
function renderLeads(){
    let ListItems=""
for(let i=0;i<myLeads.length;i++)
{ 
    ListItems+=`
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>
    ` 
}
    ulEl.innerHTML=ListItems //adding HTML from JS
}

/*  const recipient = "James"
let sender=Poonji
// Refactor the email string to use template strings
const email = `Hey ${recipient}!(template string) How is it going? Cheers ${sender}`

console.log(email) */