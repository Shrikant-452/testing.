const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                navLinks.classList.remove('active');
            });
        });

        // Add to cart animation
        document.querySelectorAll('.buy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.innerHTML = 'Added! 🎉';
                this.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
                setTimeout(() => {
                    this.innerHTML = 'Add to Cart';
                    this.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
                }, 1500);
            });
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        });

        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });