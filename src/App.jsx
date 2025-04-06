import './App.css';

// Placeholder image URL - Replace with your actual image path later
// Example: const imageUrl = '/corned-beef-hash.jpg'; // Assuming image is in the 'public' folder
const imageUrl = 'https://picsum.photos/seed/cornedbeefhash/600/400';

function App() {
  // Sample blog post data
  const posts = [
    { id: 1, title: "The Art of the Perfect Hash Crisp", snippet: "Getting that ideal crust takes patience and technique..." },
    { id: 2, title: "Coffee Pairings: Beyond the Basics", snippet: "Which beans complement the savory notes of corned beef?" },
    { id: 3, title: "A Brief History of Corned Beef Hash", snippet: "From wartime rations to breakfast staple..." },
  ];

  return (
    <div className="page-container">
      <header className="app-header">
        <h1>Morning Hash & Coffee</h1>
      </header>

      <main className="app-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2>The Perfect Start:</h2>
            <h1>Corned Beef Hash & A Hot Cup of Coffee</h1>
            <p>Discover the simple joy of a classic breakfast combination. Savory, satisfying, and the best way to fuel your day.</p>
          </div>
        </section>

        {/* Featured Story Section */}
        <section className="featured-story">
          <div className="featured-story-image">
            <img src={imageUrl} alt="Delicious corned beef hash breakfast" />
            <p className="caption">A delightful plate of corned beef hash.</p>
            <p className="caption">Image from Picsum Photos (Placeholder)</p>
          </div>
          <div className="featured-story-content">
            <h3>Featured: Why Hash is Happiness</h3>
            <p>
              There's something profoundly comforting about a well-made plate of corned beef hash.
              It's a symphony of textures and flavors – crispy potatoes, savory meat, maybe a perfectly runny egg yolk mixing in.
              Paired with a steaming mug of coffee, it's not just breakfast; it's a ritual, a moment of pure morning bliss.
              Join us as we explore the nuances of this beloved dish.
            </p>
            {/* <button className="cta-button">Read More</button> */}
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="latest-posts">
          <h2>Latest Musings</h2>
          <div className="post-list">
            {posts.map(post => (
              <article key={post.id} className="post-entry">
                <h4>{post.title}</h4>
                <p>{post.snippet}</p>
                <a href="#" className="read-more-link">Read More &rarr;</a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Morning Hash & Coffee. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
