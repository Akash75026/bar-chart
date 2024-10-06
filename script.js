const ctx = document.getElementById('salesChart').getContext('2d');

const salesData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
        label: 'Sales ',
        data: [500, 800, 1200, 1500, 1800],
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)', // Color for Product A
            'rgba(153, 102, 255, 0.6)', // Color for Product B
            'rgba(255, 159, 64, 0.6)', // Color for Product C
            'rgba(255, 99, 132, 0.6)', // Color for Product D
            'rgba(54, 162, 235, 0.6)'  // Color for Product E
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

const salesChart = new Chart(ctx, {
    type: 'bar',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333', // Legend text color
                }
            },
            title: {
                display: true,
                text: 'Sales Comparison of Different Products',
                color: '#333', // Title text color
                font: {
                    size: 16, // Title font size
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Products',
                    color: '#333',
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)', // Grid line color
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales ',
                    color: '#333',
                },
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)', // Grid line color
                }
            }
        }
    }
});
