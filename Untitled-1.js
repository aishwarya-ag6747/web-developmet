// script.js
// Sample JSON data (replace this with your own data)
const jsonData = [
    { label: 'Data Point 1', value: 10 },
    { label: 'Data Point 2', value: 20 },
    { label: 'Data Point 3', value: 15 },
    // Add more data points as needed
];

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

// Load data and create charts when the page loads
window.addEventListener('DOMContentLoaded', () => {
    createBarChart(jsonData);
    createLineChart(jsonData);
});
