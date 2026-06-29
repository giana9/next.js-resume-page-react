export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-white">
      
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Giana Cresta</h1>
        <p className="text-sm">crestagiana@gmail.com</p>
        <p className="text-sm">813-659-7285</p>
      </header>

      {/* objective */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Objective</h2>
        <p>
          Eager to work BAIS college student. Wants to break into the data science feild. Analytics roles preferred.
        </p>
      </section>

      {/* education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Education</h2>
        <div>
          <p className="font-semibold">University of South Florida</p>
          <p className="text-sm text-white">Business Analytics and Information Systems</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Relevant Classes: AI and Data Analytics, Database Design and Administration, Business Application Development</li>
          </ul>
        </div>
      </section>

      {/* experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Work Experience</h2>

        <div className="mb-6">
          <p className="font-semibold">Team Member- Steak N' Shake</p>
          <p className="text-sm text-white">Summer 2023</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Assisted customers when they had an issue or question and collaborated with co-workers to have an efficient output.</li>
            <li>Served food, restocked supplies/ingredients, cleaned dishes/tables, cooked and packaged menu items.</li>
          </ul>
        </div>

      </section>

      {/* skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
        <p>
          <span className="font-semibold">Programming Languages:</span> JavaScript, HTML, CSS, SQL
        </p>
        <p>
          <span className="font-semibold">Data Visualization and Analysis:</span> Tableau, Excel
        </p>
      </section>

      {/* projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>

        <div className="mb-4">
          <p className="font-semibold">Sales Data Project for AI & Data Analytics Course</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Utilized Tableau to create sales, profit, and demand KPI charts using sales data from a company that sells furniture, technology, and office supplies.</li>
            <li>Demonstrated drill-down analytics, created a pareto chart, dual chart, and broke down profit by state.</li>
            <li>Created a demand forecast and what-if scenario analysis on sales based on growth and churn rates.</li>
            <li>Constructed 2 dashboards to tell the story of the company’s sales data and provide insight into what the company should look out for and their suggested next steps/actions to take.</li>
          </ul>
        </div>
      </section>

    </main>
  );
}