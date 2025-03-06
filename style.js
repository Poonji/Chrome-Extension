import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-7ed4f-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const refrenceInDB=ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

onValue(refrenceInDB,function(snapshot)
{
    const snapshotDoesExists=snapshot.exists()
    if(snapshotDoesExists)
    {
        const snapshotValues=snapshot.val()
        const leads=Object.values(snapshotValues)
        render(leads)
    }
})

deleteBtn.addEventListener("dblclick", function() {
    remove(refrenceInDB)
    ulEl.innerHTML=""
})

inputBtn.addEventListener("click", function() {
    push(refrenceInDB, inputEl.value)
    inputEl.value = ""
}) 