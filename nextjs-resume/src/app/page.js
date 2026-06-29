export default function Page() {
  return (
    <main className="resume-container">

      {/* objective */}
      <header className="resume-header">
        <h1 className="resume-name">Giana Cresta</h1>
        <p className="resume-contact">
          813-659-7285 • crestagiana@gmail.com • Tampa, FL
        </p>
      </header>

      {/* education */}
      <section className="resume-section">
        <h2 className="resume-section-title">EDUCATION</h2>

        <div className="resume-row">
          <div>
            <p className="resume-entity">University of South Florida</p>
            <p className="resume-role">Business Analytics and Information Systems B.S.</p>
            <p className="resume-detail">GPA: 3.81</p>

            <p className="resume-role mt-3">Relevant Classes:</p>
            <ul className="resume-list">
              <li>AI and Data Analytics</li>
              <li>Database Design and Administration</li>
              <li>Business Application Development</li>
            </ul>
          </div>

          <div className="resume-meta">
            Tampa, FL<br />
            Aug 2023 – July 2027
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="resume-section">
        <h2 className="resume-section-title">EXPERIENCE</h2>

        <div className="resume-row">
          <div>
            <p className="resume-entity">Steak N’ Shake</p>
            <p className="resume-role">Team Member</p>
            <ul className="resume-list">
              <li>Assisted customers when they had an issue or question and collaborated with co-workers to have an efficient output.</li>
              <li>Served food, restocked supplies/ingredients, cleaned dishes/tables, cooked and packaged menu items.</li>
            </ul>
          </div>

          <div className="resume-meta">
            Oldsmar, FL<br />
            Summer 2023
          </div>
        </div>

        <div className="resume-row">
          <div>
            <p className="resume-entity">Rogues’ Gallery</p>
            <p className="resume-role">Cover Art Artist</p>
            <ul className="resume-list">
              <li>Designed cover art for Rogues’ Gallery’s single “Can’t Relate.”</li>
              <li>Planned out designs with the client and kept them updated on the progression of the commission.</li>
            </ul>
          </div>

          <div className="resume-meta">
            Tampa, FL<br />
            Feb 2025
          </div>
        </div>
      </section>

      {/* leadership and volunteering */}
      <section className="resume-section">
        <h2 className="resume-section-title">LEADERSHIP & VOLUNTEERING</h2>

        <div className="resume-row">
          <div>
            <p className="resume-entity">Art Club</p>
            <p className="resume-role">Secretary</p>
            <ul className="resume-list">
              <li>Directly involved in event promotion via passing out flyers and stickers, tabling/acting as a spokesperson at other USF events, hosting interactive community drawings, and created an executive board introduction post on the club’s Instagram to engage with the public.</li>
              <li>Greeted people and checked them in for attendance at the events. Reserved rooms for events.</li>
              <li>Resolved errors on USF’s part. Attended meetings/calls with the MSC Building Director and MSC Event Planning Coordinator.</li>
            </ul>
          </div>

          <div className="resume-meta">
            Tampa, FL<br />
            Jan 2026 – Present
          </div>
        </div>

        <div className="resume-row">
          <div>
            <p className="resume-entity">Letters for Destiny</p>
            <p className="resume-role">Volunteer</p>
            <ul className="resume-list">
              <li>Created 100+ digital and physical weekly-themed highly detailed cards/drawings for children in hospitals all across the United States, Australia, and England.</li>
            </ul>
          </div>

          <div className="resume-meta">
            Tampa, FL<br />
            Mar 2022 – Oct 2022
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="resume-section">
        <h2 className="resume-section-title">PROJECTS</h2>

        <div>
          <p className="resume-entity">Sales Data Project for AI & Data Analytics Course</p>
          <ul className="resume-list">
            <li>Utilized Tableau to create sales, profit, and demand KPI charts using sales data from a company that sells furniture, technology, and office supplies.</li>
            <li>Demonstrated drill-down analytics, created a pareto chart, dual chart, and broke down profit by state.</li>
            <li>Created a demand forecast and what-if scenario analysis on sales based on growth and churn rates.</li>
            <li>Constructed 2 dashboards to tell the story of the company’s sales data and provide insight into what the company should look out for and their suggested next steps/actions to take.</li>
          </ul>
        </div>
      </section>

      {/* skills */}
      <section className="resume-section">
        <h2 className="resume-section-title">SKILLS</h2>

        <p className="resume-detail">
          <strong>Data Visualization & Analysis:</strong> Tableau, Excel
        </p>
        <p className="resume-detail">
          <strong>Other Skills:</strong> Microsoft Office, Google Workspace, Procreate
        </p>
      </section>

    </main>
  );
}