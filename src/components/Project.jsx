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
          <article class="card" id="horiseon">
            <a href="https://lildano50.github.io/urban-octo-telegram-hw/Develop/" alt="Daniel Park Bootcamp Module 1 Project" title="Daniel Park Bootcamp Module 1 Proejct"><span class="link"></span></a>
              <h2>Horiseon Accessibility Project</h2>
              <p id="description">The client asked that their code be reviewed as well as improve the accessibility of their website to help improve
                  search engine optimization. 
              </p>
          </article>
          <article class="card" id="swift">
              <a href="https://developer.apple.com/swift/" alt="Swift Placeholder Project" title="Swift Placeholder Proejct"><span class="link"></span></a>
                  <h2>Placeholder Project Swift</h2>
                  <p id="description">This is a placeholder project for a Swift application.</p>
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
  }