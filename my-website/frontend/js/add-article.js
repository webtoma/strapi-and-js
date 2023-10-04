document.querySelector('#articleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let formTitle = document.querySelector('#title').value;
    let formContent = document.querySelector('#content').value;
    let data = {
        data: {
            title: formTitle,
            description: formContent
        }
    }
    data = JSON.stringify(data)
    fetch('http://localhost:1337/api/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
})
