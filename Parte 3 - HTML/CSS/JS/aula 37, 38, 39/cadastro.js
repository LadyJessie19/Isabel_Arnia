const url = "http://localhost:3000/reports"

const form = document.getElementById("form")

const backToIndexPage = () => {
    window.location = "index.html"
}

const registerReport = async (report) => {
    await fetch (`${url}`, {
        method: 'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        body: JSON.stringify(report)
    })
}

form.addEventListener('submit', (event) => {
    const title = form.elements['title'].value
    const writer = form.elements['writer'].value
    const image = form.elements['image'].valueconst text = form.elements['text'].value

    const report = {
        title,
        writer,
        image,
        text,
    }
    
    registerReport(report)
})