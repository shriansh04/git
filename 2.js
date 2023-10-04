const namedata = document.querySelector("[name-template]")
const namecontainer = document.querySelector("[name-container]")
const searching = document.querySelector("[searching]")
let users = []
searching.addEventListener("input", (e) => {
    const  value  = e.target.value
    users.forEach(  user => {
        user.name = user.name.toLowerCase()
        const ispresent = user.name.includes(value)
        user.element.classList.toggle("hide",!ispresent)
})
}
)

fetch('https://dummyjson.com/users?limit=0&select=firstName')
.then(res => res.json())
.then(data => {
    users = data.users.map(name => 
    {
        const card = namedata.content.cloneNode(true).children[0]
        card.textContent = name.firstName
        namecontainer.append(card)
        return {name:name.firstName,element:card}
    })
})