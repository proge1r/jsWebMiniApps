const bookedTickets = [];
const totalSeats = 20;

const showSeatsBtn = document.getElementById('showSeatsBtn');
const seatingArea = document.getElementById('seatingArea');
const coach = document.getElementById('coach');
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingList = document.getElementById('bookingList');

showSeatsBtn.addEventListener('click', () => {
    const route = document.getElementById('routeSelect').value;
    const date = document.getElementById('travelDate').value;

    if (!route || !date) {
        alert("Please select route and date!");
        return;
    }

    seatingArea.classList.remove('hidden');
    renderCoach();
});

function renderCoach() {
    coach.innerHTML = '';
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.innerText = i;
        seat.onclick = () => seat.classList.toggle('selected');
        coach.appendChild(seat);
    }
}

bookNowBtn.addEventListener('click', () => {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
                               .map(s => s.innerText);

    if (selectedSeats.length === 0) {
        alert("Please select at least one seat!");
        return;
    }

    const booking = {
        route: document.getElementById('routeSelect').value,
        date: document.getElementById('travelDate').value,
        seats: selectedSeats
    };

    bookedTickets.push(booking);
    updateHistory();
    
    seatingArea.classList.add('hidden');
    alert("Tickets booked successfully!");
});

function updateHistory() {
    bookingList.innerHTML = '';
    bookedTickets.forEach(t => {
        const item = document.createElement('div');
        item.className = 'ticket-card';
        item.innerHTML = `
            <strong>${t.route}</strong><br>
            Date: ${t.date} | Seats: ${t.seats.join(', ')}
        `;
        bookingList.prepend(item);
    });
}