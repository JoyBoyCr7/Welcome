
function test(){
    console.log("funk")
}

setTimeout(test,200)

async function randomDog(){
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    const alldogs = await dog.json()
    console.log(alldogs)
}

document.getElementById("opening").innerHTML = "yooyoo"

randomDog()

