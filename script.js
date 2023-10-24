// script.js

// Function to create and render the bar chart
function createBarChart(data) {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const ctx = document.getElementById('bar-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bar Chart',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

// Function to create and render the line chart
function createLineChart(data) {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);

    const ctx = document.getElementById('line-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Line Chart',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });
}

// Load data from a JSON file and create charts when the page loads
window.addEventListener('DOMContentLoaded', () => {
    fetch('"C:\\Users\singh\\OneDrive\\Desktop\\CODING\\web\\jsondata.json"') // Replace 'data.json' with the path to your JSON file
        .then(response => response.json())
        .then(data => {
            createBarChart(data);
            createLineChart(data);
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
});
