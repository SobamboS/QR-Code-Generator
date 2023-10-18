async function fetchMovies() {
    try {
      const response = await fetch('https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/movies.json');
      const data = await response.json();
  
      // Check if the data is an array of movies
      if (Array.isArray(data)) {
        const randomMovies = [];
        const numMoviesToSelect = 10;
  
        // Generate random indices and select movies
        while (randomMovies.length < numMoviesToSelect) {
          const randomIndex = Math.floor(Math.random() * data.length);
          randomMovies.push(data[randomIndex]);
        }
  
        return randomMovies;
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching or processing data:', error);
      return [];
    }
  }