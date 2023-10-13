
import './style.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Pete Seeger</h1>
        <p className="subtitle">American Folk Singer and Activist</p>
      </header>
      <main className="container">
        <section className="profile-section">
          <img className="profile-image" src=".react/my-app/images/PeteSeeger.jpg" alt="Pete Seeger" />

          <h2>About Pete Seeger</h2>
          <p>
            Pete Seeger was an influential American folk singer, songwriter, and social activist. He played a pivotal role in the folk music revival of the 1950s and 1960s and used his music to champion social and environmental causes.
          </p>
        </section>
        <section className="works-section">
          <h2>Notable Works</h2>
          <ul className="works-list">
            <li>"Where Have All the Flowers Gone"</li>
            <li>"If I Had a Hammer (The Hammer Song)"</li>
            <li>"Turn! Turn! Turn! (To Everything There Is a Season)"</li>
          </ul>
        </section>
        <section className="discography-section">
          <h2>Discography</h2>
          <ul className="discography-list">
            <li><em>We Shall Overcome</em> (1963)</li>
            <li><em>Clearwater Revival</em> (2004)</li>
            <li><em>Rainbow Race</em>(1971)</li>
          </ul>
        </section>
        <section className="legacy-section">
          <h2>Legacy</h2>
          <p>
            Pete Seeger's music and activism left a lasting impact on the American folk music scene and the civil rights movement. His songs continue to inspire, and his message of social justice and environmental awareness remains relevant today.
          </p>
        </section>
        <section className="awards-section">
          <h2>Awards and Honors</h2>
          <ul className="awards-list">
            <li>Grammy Lifetime Achievement Award (1993)</li>
            <li>Kennedy Center Honors (1994)</li>
            <li>National Medal of Arts (1994)</li>
          </ul>
        </section>

        <section className="quotes-section">
          <h2>Notable Quotes</h2>
          <blockquote className="quote">
            "The easiest way to avoid wrong notes is to never open your mouth and sing. What a mistake that would be."
          </blockquote>
          <blockquote className="quote">
            "Participation. That's what's gonna save the human race."
          </blockquote>
        </section>

        <section className="related-artists-section">
          <h2>Related Artists</h2>
          <ul className="artists-list">
            <li>Bob Dylan</li>
            <li>Woody Guthrie</li>
            <li>Joan Baez</li>
          </ul>
        </section>
        <section className="personal-life-section">
          <h2>Personal Life</h2>
          <p>
            Pete Seeger was born on May 3, 1919, in Patterson, New York. He came from a musical family, and his father, Charles Seeger, was a renowned musicologist. Pete's love for folk music was deeply rooted in his upbringing.
          </p>
          <p>
            He married Toshi-Aline Ōta in 1943, and they remained happily married until her passing in 2013. They had three children together, including folk singer and activist Toshi Seeger.
          </p>
        </section>

        <section className="social-activism-section">
          <h2>Social Activism</h2>
          <p>
            Pete Seeger was not just a musician but also a dedicated social activist. He used his music as a tool for social and political change. He was an advocate for civil rights, labor rights, and environmental conservation.
          </p>
          <p>
            He was a key figure in the American civil rights movement and performed at events such as the March on Washington for Jobs and Freedom in 1963, where Dr. Martin Luther King Jr. delivered his famous "I Have a Dream" speech.
          </p>
        </section>

        <section className="musical-influence-section">
          <h2>Musical Influence</h2>
          <p>
            Pete Seeger's influence on the folk music genre is immeasurable. He popularized many traditional folk songs and wrote songs that became anthems for various movements. Artists across generations have been inspired by his work.
          </p>
          <p>
            His music, often accompanied by his banjo, inspired countless individuals to pick up instruments and carry on the tradition of folk music, making him a true folk icon.
          </p>
        </section>

        <section className="lasting-legacy-section">
          <h2>Lasting Legacy</h2>
          <p>
            Pete Seeger's legacy lives on through his music and his commitment to social justice. His songs, such as "Where Have All the Flowers Gone" and "We Shall Overcome," continue to be sung by people worldwide in the pursuit of peace and justice.
          </p>
          <p>
            His impact on both music and activism is a testament to the power of art to inspire positive change and will continue to influence generations to come.
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;
