fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('data').textContent = JSON.stringify(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
