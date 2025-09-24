// Generate random data for the chart
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const chartBars = document.getElementById('chartBars');

// Generate bars with random heights
months.forEach(month => {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';
    
    const bar = document.createElement('div');
    bar.className = 'bar';
    // Random height between 20% and 95%
    const height = Math.floor(Math.random() * 75) + 20;
    bar.style.height = `${height}%`;
    
    // Add some color variation
    if (height > 80) {
        bar.style.background = 'var(--warning)';
    } else if (height > 60) {
        bar.style.background = 'var(--accent)';
    } else if (height > 40) {
        bar.style.background = 'var(--success)';
    }
    
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = month;
    
    barContainer.appendChild(bar);
    barContainer.appendChild(label);
    chartBars.appendChild(barContainer);
});

// Add grid lines
for (let i = 1; i <= 4; i++) {
    const gridLine = document.createElement('div');
    gridLine.className = 'grid-line';
    gridLine.style.top = `${i * 25}%`;
    document.querySelector('.chart').appendChild(gridLine);
}

// Chart period buttons functionality
const periodButtons = document.querySelectorAll('.chart-actions button');
periodButtons.forEach(button => {
    button.addEventListener('click', function() {
        periodButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // In a real app, this would update the chart data
        // For this demo, we'll just regenerate random heights
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const height = Math.floor(Math.random() * 75) + 20;
            bar.style.height = `${height}%`;
            
            // Update colors based on new height
            if (height > 80) {
                bar.style.background = 'var(--warning)';
            } else if (height > 60) {
                bar.style.background = 'var(--accent)';
            } else if (height > 40) {
                bar.style.background = 'var(--success)';
            } else {
                bar.style.background = 'var(--primary)';
            }
        });
    });
});

// Menu item click functionality
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});