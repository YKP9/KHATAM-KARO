export function AboutApp() {
  return (
    <div>
      <section className="d-flex vh-100 mt-5 position-relative">
        <div className="w-50 mt-5 p-4">
          <div className="mb-3 h1 fw-bold">Khatam Karo</div>
          <div className="mb-3 fs-5 text-secondary">
            Our app includes timeblocking and categorization features with which
            you create a new way of looking at your goals and daily tasks.
          </div>
          <div className="mb-3 fs-5 text-secondary">
            Organize and streamline your whole process and set milestones as you
            break down your most ambitious goals to smaller and smaller
            manageable objective you can work on.
          </div>
          <div className="mb-3 fs-5 text-secondary">
            From your day, to week, to month, to your annual goals, it's a full
            system tracking for your personal success.
          </div>
          <div className="mb-3 fs-6 text-danger">
            {" "}
            Start your productivity journey with Khatam Karo <span className="bi bi-chevron-right"></span>
          </div>
        </div>
        <div className="section1-img w-50 "></div>
      </section>

      <section className="d-flex vh-100">
      <div className="section2-img w-50 "></div>
      <div className="w-50 p-5">
        <div className="h2 mb-3">How is this different from all the other todo list applications?</div>
        <div className="mb-3 fs-5 text-secondary">Our app includes timeblocking and categorization features with which you crate a new way of looking at your daily tasks.</div>
        <div className="mb-3 fs-5 text-secondary">1. We place your goals and task in what we like to call 'buckets' - the categorization part, in which you present a certain aspect of your life you want to develop and that would be the name of you category.</div>
        <div className="mb-3 fs-5 text-secondary">2. In each category, you would add your task for the day, which will be "timeblocked", meaning you focus your energy on only this category and execute on all the task inside it for a given time period.</div>
        <div className="mb-3 fs-5 text-secondary">3. VAMOS! Your productivity and flow state will inevitable increase following this method.</div>
      </div>


      </section>
    </div>
  );
}
