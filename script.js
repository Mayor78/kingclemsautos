document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Navigation link highlighting
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Car data with detailed specs
    const cars = [
        {
            id: 1,
            title: 'Toyota Camry 2018',
            make: 'Toyota',
            price: 22000,
            monthlyPayment: 2200,
            location: 'Foreign',
            miles: 45000,
            cylinder: 4,
            city: 'Lagos',
            rating: 4.5,
            images: [
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Interior: Leather Seats',
                'Camera: Reverse Camera',
                'Mileage: 45,000 miles',
                'Engine: 2.5L 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Lagos',
                'Price: $22,000',
                'Monthly Payment: $2,200',
                'Rating: 4.5/5'
            ]
        },
        {
            id: 2,
            title: 'Mercedes-Benz C300 2020',
            make: 'Mercedes-Benz',
            price: 35000,
            monthlyPayment: 3500,
            location: 'Foreign',
            miles: 30000,
            cylinder: 4,
            city: 'Abuja',
            rating: 4.8,
            images: [
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Features: Sunroof, Navigation, Push Start',
                'Mileage: 30,000 miles',
                'Engine: 2.0L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Abuja',
                'Price: $35,000',
                'Monthly Payment: $3,500',
                'Rating: 4.8/5'
            ]
        },
        {
            id: 3,
            title: 'Lexus RX 350 2019',
            make: 'Lexus',
            price: 40000,
            monthlyPayment: 4000,
            location: 'Local',
            miles: 25000,
            cylinder: 6,
            city: 'Lagos',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Drive: 4WD',
                'Features: Cruise Control, Premium Sound',
                'Mileage: 25,000 miles',
                'Engine: 3.5L V6',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Local',
                'City: Lagos',
                'Price: $40,000',
                'Monthly Payment: $4,000',
                'Rating: 4.7/5'
            ]
        },
        {
            id: 4,
            title: 'BMW X5 2021',
            make: 'BMW',
            price: 50000,
            monthlyPayment: 5000,
            location: 'Foreign',
            miles: 20000,
            cylinder: 6,
            city: 'Abuja',
            rating: 4.9,
            images: [
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Features: Panoramic Roof, Sport Package',
                'Mileage: 20,000 miles',
                'Engine: 3.0L Turbo 6-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Abuja',
                'Price: $50,000',
                'Monthly Payment: $5,000',
                'Rating: 4.9/5'
            ]
        },
        {
            id: 5,
            title: 'Honda Accord 2019',
            make: 'Honda',
            price: 20000,
            monthlyPayment: 2000,
            location: 'Local',
            miles: 50000,
            cylinder: 4,
            city: 'Lagos',
            rating: 4.3,
            images: [
                'https://media.istockphoto.com/id/2153271980/photo/a-portrait-of-a-burgundy-honda-accord-sport-sedan-cruising-in-a-downtown-financial-district.jpg?s=2048x2048&w=is&k=20&c=yVuj1ZneNaNRU38R_85SdehlrSlGSe6tn921fBQWTrM=',

                'https://media.istockphoto.com/id/2197310106/photo/2020-honda-accord-mid-size-car-front-top-view-parked.jpg?s=2048x2048&w=is&k=20&c=GWcw5kCLZZtEP3fdhygmvNvZWmcEjmS54W5SkaKMSTA=',

                'https://media.istockphoto.com/id/2188054148/photo/2020-honda-accord-mid-size-car-driver-side-view-parked.jpg?s=2048x2048&w=is&k=20&c=8_n1QRUJR54MYQU6A3qtG_Qcf7XQda94pmii-QZ8xho=',

                'https://media.istockphoto.com/id/172158203/photo/product.jpg?s=2048x2048&w=is&k=20&c=emj90q2fO_kpgjtZOhZ58ignRvtIazs7odwWopXNxPQ=',
                'https://media.istockphoto.com/id/91253529/photo/car-back-lights.jpg?s=2048x2048&w=is&k=20&c=xuiv0MHad2nkk3mLoJhDt4i8XQZL46PaRW5L6UTegIc='
            ],
            specs: [
                'Transmission: Automatic',
                'Interior: Cloth Seats',
                'Features: Backup Camera',
                'Mileage: 50,000 miles',
                'Engine: 1.5L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Local',
                'City: Lagos',
                'Price: $20,000',
                'Monthly Payment: $2,000',
                'Rating: 4.3/5'
            ]
        },
        {
            id: 6,
            title: 'Audi Q5 2020',
            make: 'Audi',
            price: 42000,
            monthlyPayment: 4200,
            location: 'Foreign',
            miles: 28000,
            cylinder: 4,
            city: 'Abuja',
            rating: 4.6,
            images: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Drive: AWD',
                'Features: Navigation, Heated Seats',
                'Mileage: 28,000 miles',
                'Engine: 2.0L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Abuja',
                'Price: $42,000',
                'Monthly Payment: $4,200',
                'Rating: 4.6/5'
            ]
        },
        {
            id: 7,
            title: 'Toyota Corolla 2021',
            make: 'Toyota',
            price: 18000,
            monthlyPayment: 1800,
            location: 'Local',
            miles: 35000,
            cylinder: 4,
            city: 'Lagos',
            rating: 4.4,
            images: [
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Interior: Cloth Seats',
                'Features: Apple CarPlay',
                'Mileage: 35,000 miles',
                'Engine: 1.8L 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Local',
                'City: Lagos',
                'Price: $18,000',
                'Monthly Payment: $1,800',
                'Rating: 4.4/5'
            ]
        },
        {
            id: 8,
            title: 'Mercedes-Benz E350 2019',
            make: 'Mercedes-Benz',
            price: 38000,
            monthlyPayment: 3800,
            location: 'Foreign',
            miles: 32000,
            cylinder: 4,
            city: 'Lagos',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Features: Sunroof, Premium Audio',
                'Mileage: 32,000 miles',
                'Engine: 2.0L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Lagos',
                'Price: $38,000',
                'Monthly Payment: $3,800',
                'Rating: 4.7/5'
            ]
        },
        {
            id: 9,
            title: 'Lexus ES 350 2020',
            make: 'Lexus',
            price: 39000,
            monthlyPayment: 3900,
            location: 'Local',
            miles: 27000,
            cylinder: 6,
            city: 'Abuja',
            rating: 4.6,
            images: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Features: Cruise Control, Leather Seats',
                'Mileage: 27,000 miles',
                'Engine: 3.5L V6',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Local',
                'City: Abuja',
                'Price: $39,000',
                'Monthly Payment: $3,900',
                'Rating: 4.6/5'
            ]
        },
        {
            id: 10,
            title: 'BMW 5 Series 2020',
            make: 'BMW',
            price: 45000,
            monthlyPayment: 4500,
            location: 'Foreign',
            miles: 22000,
            cylinder: 6,
            city: 'Lagos',
            rating: 4.8,
            images: [
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Features: Navigation, Sport Package',
                'Mileage: 22,000 miles',
                'Engine: 3.0L Turbo 6-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Lagos',
                'Price: $45,000',
                'Monthly Payment: $4,500',
                'Rating: 4.8/5'
            ]
        },
        {
            id: 11,
            title: 'Honda CR-V 2021',
            make: 'Honda',
            price: 28000,
            monthlyPayment: 2800,
            location: 'Local',
            miles: 40000,
            cylinder: 4,
            city: 'Abuja',
            rating: 4.5,
            images: [
                'https://media.istockphoto.com/id/2058028851/photo/honda-cr-v.jpg?s=2048x2048&w=is&k=20&c=LY3WcyywDUpcqbUaGL5_zDpVUd6lsmG7343LbR2wsU8=',
                'https://images.unsplash.com/photo-1681697390363-1142eb46b76d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://media.istockphoto.com/id/1313863869/photo/close-up-engine-of-new-honda-crv-in-bangkok-thailand.jpg?s=2048x2048&w=is&k=20&c=Igpp8g-9NjUJrA7dv8mTPCDxn9Rd93YzHFD_WDVMMC0=',
                'https://media.istockphoto.com/id/519557186/photo/details-of-a-new-car-engine.jpg?s=2048x2048&w=is&k=20&c=yELJpKTJFlbg6GcjbS83Vc1P4Bn6IPEWbh0T9faH-LA=',
                'https://media.istockphoto.com/id/536813787/photo/honda-cr-v-suv-off-road-vehicle.jpg?s=2048x2048&w=is&k=20&c=h65OeJUaCe6Ls9vo5xr2zfYlo_R05Cvz2HswbHmgILQ='
            ],
            specs: [
                'Drive: AWD',
                'Features: Backup Camera, Apple CarPlay',
                'Mileage: 40,000 miles',
                'Engine: 1.5L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Local',
                'City: Abuja',
                'Price: $28,000',
                'Monthly Payment: $2,800',
                'Rating: 4.5/5'
            ]
        },
        {
            id: 12,
            title: 'Audi A4 2020',
            make: 'Audi',
            price: 36000,
            monthlyPayment: 3600,
            location: 'Foreign',
            miles: 31000,
            cylinder: 4,
            city: 'Lagos',
            rating: 4.7,
            images: [
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1470&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519643381402-8cd0e605f429?q=80&w=1470&auto=format&fit=crop'
            ],
            specs: [
                'Transmission: Automatic',
                'Features: Navigation, Heated Seats',
                'Mileage: 31,000 miles',
                'Engine: 2.0L Turbo 4-Cylinder',
                'Fuel: Gasoline',
                'Condition: Certified Pre-Owned',
                'Location: Foreign',
                'City: Lagos',
                'Price: $36,000',
                'Monthly Payment: $3,600',
                'Rating: 4.7/5'
            ]
        }
    ];

    // Populate car grid
    const carGrid = document.getElementById('carGrid');
    function renderCars(filteredCars) {
        carGrid.innerHTML = '';
        filteredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.setAttribute('data-id', car.id);
            carCard.innerHTML = `
                <div class="car-carousel">
                    <div class="carousel-images" id="carousel-${car.id}">
                        ${car.images.map(img => `<img src="${img}" alt="${car.title}" />`).join('')}
                    </div>
                    <button class="carousel-prev" onclick="moveCarousel(${car.id}, -1)">❮</button>
                    <button class="carousel-next" onclick="moveCarousel(${car.id}, 1)">❯</button>
                </div>
                <div class="car-card-content">
                    <h3>${car.title}</h3>
                    <p>${car.specs[0]}</p>
                    <p>Location: ${car.location} (${car.city})</p>
                    <p>Mileage: ${car.miles.toLocaleString()} miles</p>
                    <p>Cylinder: ${car.cylinder}</p>
                    <p class="price">$${car.price.toLocaleString()} ($${car.monthlyPayment.toLocaleString()}/mo)</p>
                    <div class="rating">${'★'.repeat(Math.floor(car.rating))}${'☆'.repeat(5 - Math.floor(car.rating))}</div>
                    <button class="contact-seller">Contact Seller</button>
                    <button class="apply-loan">Apply for Loan</button>
                </div>
            `;
            carGrid.appendChild(carCard);

            // Add event listeners for buttons
            carCard.querySelector('.contact-seller').addEventListener('click', () => {
                window.location.href = `mailto:info@kingclemsautos.com?subject=Inquiry about ${car.title}`;
            });

            carCard.querySelector('.apply-loan').addEventListener('click', () => {
                window.location.href = `#contact?car=${car.title}&loan=true`;
            });
        });
    }

    // Initial render
    renderCars(cars);

    // Carousel functionality
    window.moveCarousel = function(carId, direction) {
        const carousel = document.getElementById(`carousel-${carId}`);
        const images = carousel.querySelectorAll('img');
        let currentIndex = parseInt(carousel.dataset.index || 0);
        currentIndex = (currentIndex + direction + images.length) % images.length;
        carousel.dataset.index = currentIndex;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Modal functionality
    const modal = document.getElementById('carModal');
    const modalCarousel = document.getElementById('modalCarousel');
    const modalTitle = document.getElementById('modalTitle');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalRating = document.getElementById('modalRating');
    const contactSeller = document.getElementById('contactSeller');
    const applyLoan = document.getElementById('applyLoan');
    const closeModal = document.querySelector('.close');
    const modalPrev = document.querySelector('.modal-carousel .carousel-prev');
    const modalNext = document.querySelector('.modal-carousel .carousel-next');

    carGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('contact-seller') || e.target.classList.contains('apply-loan')) return;
        const carCard = e.target.closest('.car-card');
        if (!carCard) return;
        const carId = parseInt(carCard.getAttribute('data-id'));
        const car = cars.find(c => c.id === carId);

        modalCarousel.innerHTML = car.images.map(img => `<img src="${img}" alt="${car.title}" />`).join('');
        modalCarousel.dataset.index = 0;
        modalCarousel.style.transform = 'translateX(0)';
        modalTitle.textContent = car.title;
        modalSpecs.innerHTML = car.specs.map(spec => `<li>${spec}</li>`).join('');
        modalRating.innerHTML = '★'.repeat(Math.floor(car.rating)) + '☆'.repeat(5 - Math.floor(car.rating));
        contactSeller.href = `mailto:info@kingclemsautos.com?subject=Inquiry about ${car.title}`;
        applyLoan.href = `#contact?car=${car.title}&loan=true`;

        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    modalPrev.addEventListener('click', () => {
        const currentIndex = parseInt(modalCarousel.dataset.index || 0);
        const images = modalCarousel.querySelectorAll('img');
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        modalCarousel.dataset.index = newIndex;
        modalCarousel.style.transform = `translateX(-${newIndex * 100}%)`;
    });

    modalNext.addEventListener('click', () => {
        const currentIndex = parseInt(modalCarousel.dataset.index || 0);
        const images = modalCarousel.querySelectorAll('img');
        const newIndex = (currentIndex + 1) % images.length;
        modalCarousel.dataset.index = newIndex;
        modalCarousel.style.transform = `translateX(-${newIndex * 100}%)`;
    });

    // Filter functionality
    window.filterCars = function() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const makeFilter = document.getElementById('makeFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;
        const locationFilter = document.getElementById('locationFilter').value;

        const filteredCars = cars.filter(car => {
            const matchesSearch = car.title.toLowerCase().includes(searchInput) || car.city.toLowerCase().includes(searchInput);
            const matchesMake = makeFilter === 'all' || car.make === makeFilter;
            const matchesLocation = locationFilter === 'all' || car.city === locationFilter;
            let matchesPrice = true;
            if (priceFilter !== 'all') {
                if (priceFilter === '0-30000') matchesPrice = car.price <= 30000;
                else if (priceFilter === '30000-50000') matchesPrice = car.price > 30000 && car.price <= 50000;
                else if (priceFilter === '50000+') matchesPrice = car.price > 50000;
            }
            return matchesSearch && matchesMake && matchesPrice && matchesLocation;
        });

        renderCars(filteredCars);
    };

    // Trigger filter on select change
    document.getElementById('makeFilter').addEventListener('change', filterCars);
    document.getElementById('priceFilter').addEventListener('change', filterCars);
    document.getElementById('locationFilter').addEventListener('change', filterCars);
});