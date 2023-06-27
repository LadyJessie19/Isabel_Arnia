const url = "http://localhost:3000/reports"

const loadReport = (reports) => {
    const content = document.getElementById('content')
    let subject = ''

    reports.forEach ((report) => {
        subject = subject + 
        `
         <div class="card">
           <div class="image">
             <img src="${report.image}">
           </div>
           <div class="card-content">
             <div class="card-subject">
               <div class="card-title">
                ${report.title}
               </div>
               <div class="card-text">
                ${report.text}
               </div>
             </div>
           </div>
         </div>
        `
    })

    content.innerHTML = subject
}

const getReports = async () => {
    const apiResponse = await fetch (`${url}`)
    const reports = await apiResponse.json()
    loadReport(reports)
}

const newReport = () => {
    window.location = "cadastro.html"
}

getReports()