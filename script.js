
// function test(){
//     console.log("funk")
// }

// setTimeout(test,200)

async function randomCats(){
    const cats = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const allcats = await cats.json()
    // console.log(allcats)
    for (let cat of allcats){
        const catimg = document.createElement('img')
        catimg.setAttribute("src",`${cat.url}`)
        document.body.append(catimg)
        
    }
}
// document.getElementById("opening").innerHTML = "yooyoo"
// for (const step = 0; step < length(allcats); step++){
//     console.log
// }

// document.getElementById("cats").innerHTML = "yoo"
randomCats()

