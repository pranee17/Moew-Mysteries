let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;

    let link = await getImage();
    let pic = document.querySelector("#image");
    pic.setAttribute("src", link);
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "No fact found";
    }
}

let url2 = "https://api.thecatapi.com/v1/images/search";
async function getImage() {
    try {
        let imageres = await axios.get(url2);
        return imageres.data[0].url; // Updated this line to access the correct image URL
    } catch (e) {
        console.log("error - ", e);
        return "/";
    }
}
