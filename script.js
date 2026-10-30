const events = [
  { title: "Buildathon: Ideas to Impact", category: "Technical", date: "12 November 2026", time: "10:00 AM", venue: "Innovation Lab", description: "Team up, solve a real-world problem and present a working prototype." },
  { title: "Campus Music Evening", category: "Cultural", date: "15 November 2026", time: "5:30 PM", venue: "Open-Air Theatre", description: "An evening of student performances, music and creative talent." },
  { title: "Inter-Department Football", category: "Sports", date: "18 November 2026", time: "3:00 PM", venue: "Main Sports Ground", description: "Support your department and enjoy a friendly campus tournament." },
  { title: "Getting Started with Git", category: "Workshop", date: "20 November 2026", time: "11:00 AM", venue: "Computer Lab 2", description: "A beginner-friendly session on version control and collaboration." },
  { title: "UI Design Sprint", category: "Technical", date: "23 November 2026", time: "9:30 AM", venue: "Design Studio", description: "Practise turning a user problem into a clear app interface." },
  { title: "Photography Walk", category: "Cultural", date: "26 November 2026", time: "4:00 PM", venue: "Campus Main Gate", description: "Explore campus and learn simple composition techniques." }
];

const grid = document.getElementById("eventGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventCount = document.getElementById("eventCount");
const emptyMessage = document.getElementById("emptyMessage");

function renderEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = events.filter(event => {
    const matchesText = `${event.title} ${event.description} ${event.venue}`.toLowerCase().includes(query);
    const matchesCategory = category === "all" || event.category === category;
    return matchesText && matchesCategory;
  });

  grid.innerHTML = filtered.map((event, index) => `
    <article class="event-card">
      <div class="card-top">
        <span class="category">${event.category}</span>
        <span class="date">${event.date}</span>
      </div>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="meta">${event.time} · ${event.venue}</div>
      <button class="register" data-title="${event.title}">I'm interested</button>
    </article>
  `).join("");

  eventCount.textContent = `${filtered.length} event${filtered.length === 1 ? "" : "s"} found`;
  emptyMessage.hidden = filtered.length !== 0;
}

grid.addEventListener("click", event => {
  const button = event.target.closest(".register");
  if (button) {
    alert(`You selected: ${button.dataset.title}\nThis is a demo button; connect it to a real registration form for live registrations.`);
  }
});

searchInput.addEventListener("input", renderEvents);
categoryFilter.addEventListener("change", renderEvents);
renderEvents();
