
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


menu.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    navbar.classList.remove('active');
};


let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
};


async function searchMovie() {
        const movieTitle = document.getElementById('movieInput').value.trim();
        if (!movieTitle) {
            alert("Please enter a movie title!");
            return;
        }
    
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=3d913844`;
    
        try {
            console.log("Fetching movie:", movieTitle, apiUrl); // Debugging
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("API Response:", data); // Debugging
    
            if (data.Response === "True") {
                // Update UI with movie data
                document.getElementById('movieTitle').textContent = data.Title;
                const poster = document.getElementById('moviePoster');
                poster.src = data.Poster;
                poster.style.display = 'block';
                document.getElementById('movieDetails').textContent = `
                    Release Date: ${data.Released}
                    Genre: ${data.Genre}
                    Director: ${data.Director}
                    Plot: ${data.Plot}
                `;
            } else {
                // Handle movie not found
                document.getElementById('movieTitle').textContent = "Movie not found!";
                document.getElementById('moviePoster').style.display = 'none';
                document.getElementById('movieDetails').textContent = data.Error;
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);
            document.getElementById('movieTitle').textContent = "An error occurred!";
            document.getElementById('moviePoster').style.display = 'none';
            document.getElementById('movieDetails').textContent = error.message || "Please try again.";
        }
    }