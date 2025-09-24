        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const chartBars = document.getElementById('chartBars');
        
        months.forEach(month => {
            const barContainer = document.createElement('div');
            barContainer.className = 'bar-container';
            
            const bar = document.createElement('div');
            bar.className = 'bar';
            const height = Math.floor(Math.random() * 75) + 20;
            bar.style.height = `${height}%`;
            
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
        
        for (let i = 1; i <= 4; i++) {
            const gridLine = document.createElement('div');
            gridLine.className = 'grid-line';
            gridLine.style.top = `${i * 25}%`;
            document.querySelector('.chart').appendChild(gridLine);
        }
        
        const periodButtons = document.querySelectorAll('.chart-actions button');
        periodButtons.forEach(button => {
            button.addEventListener('click', function() {
                periodButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const bars = document.querySelectorAll('.bar');
                bars.forEach(bar => {
                    const height = Math.floor(Math.random() * 75) + 20;
                    bar.style.height = `${height}%`;
                    
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
        
      
        const menuItems = document.querySelectorAll('.menu-item');
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileNavItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
  
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
      
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 1024 && 
                !sidebar.contains(event.target) && 
                !menuToggle.contains(event.target) &&
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });