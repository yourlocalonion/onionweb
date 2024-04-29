const fmnext = document.getElementById("fmnext")
const fmback = document.getElementById("fmback")

const fmnexticon = document.getElementById("fmnicon")
const fmbackicon = document.getElementById("fmbicon")

const fmnexttext = document.getElementById("fmntext")
const fmbacktext = document.getElementById("fmbtext")

if (fmnext.innerText.length > 0) {
    console.log("fm next true")
    fmnexticon.innerHTML = "arrow_forward"
}

if (fmback.innerText.length > 0) {
    console.log("fm back true")
    fmbackicon.innerHTML = "arrow_back"
}