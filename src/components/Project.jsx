export default function Project() {
    return (
      <div>
        <h1 className="page-headers">Featured Projects</h1>
        <article class="card first" id="python">
          <a href="https://github.com/lildano50/Python-Class" alt="Daniel Park Github Soccer Project in Python" title="Daniel Park Github Soccer Project in Python"><span class="link"></span></a>
              <h2>Soccer Simulator</h2>
              <p id="description">This was a small side project testing my Python knowledge while taking my first Python class. It was a fun deviation 
                  while working on class assignments to test my knowledge. It is essentially a random number generator that updates the score
                  of the game every 5 minutes with a slight home field advantage.
              </p>
          </article>
          <article class="card" id="mern">
              <a href="https://film-files.onrender.com/" alt="Film Files" title="Film Files"><span class="link"></span></a>
                  <h2>Film Files</h2>
                  <p id="description">Search your favorite movies and leave a review. See what others think of the same movie as well!</p>
          </article>
          <article class="card" id="whattodo">
              <a href="https://lildano50.github.io/group-project-1/"><span class="link"></span></a>
                  <h2>What to Do</h2>
                  <p id="description">JS/HTML project to find events in your area.</p>
          </article>
          <article class="card" id="express">
              <a href="https://shielded-hollows-32035-7796c32f6e6c.herokuapp.com/" alt="DevJobs" title="DevJobs"><span class="link"></span></a>
                  <h2>DevJobs</h2>
                  <p id="description">A place to find new developer jobs around the country all in one place. Create a profile and save any jobs that interest you.</p>
          </article>
      </div>
    );
  };