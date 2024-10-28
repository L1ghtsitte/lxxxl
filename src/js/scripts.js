document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше бронирование принято!');
    window.location.href = 'confirmation.html';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше сообщение отправлено!');
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    const reviewContainer = document.getElementById('reviewsContainer');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<h3>${name}</h3><p>${review}</p>`;
    
    reviewContainer.appendChild(newReview);
    
    document.getElementById('reviewForm').reset();
    alert('Ваш отзыв отправлен!');
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? parseInt(document.querySelector('input[name="rating"]:checked').value) : 0;
    
    if (rating === 0) {
        alert('Пожалуйста, поставьте оценку.');
        return;
    }

    const reviewContainer = document.getElementById('reviewsContainer');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<h3>${name}</h3><div class="review-rating">${getStars(rating)}</div><p>${review}</p>`;
    
    reviewContainer.appendChild(newReview);
    
    document.getElementById('reviewForm').reset();
    updateAverageRating(rating);
    alert('Ваш отзыв отправлен!');
});

let ratings = [];
let totalRating = 0;

function updateAverageRating(newRating) {
    ratings.push(newRating);
    totalRating += newRating;
    const averageRating = (totalRating / ratings.length).toFixed(1);
    document.getElementById('averageRating').textContent = `Средний рейтинг: ${averageRating} из 5`;
}

function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    initMap();
});

function initMap() {
    const restaurantLocation = { lat: 55.751244, lng: 37.618423 }; // Координаты вашего ресторана
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: restaurantLocation
    });
    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map
    });
}


