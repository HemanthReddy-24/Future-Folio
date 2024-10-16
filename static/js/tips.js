document.addEventListener("DOMContentLoaded", function () {
  const dailyTips = [
    "Set a Small, Achievable Goal : Whether it's learning a new skill, reading about a career of interest, or improving your study habits, set a goal for today. Small steps lead to big results over time.",
    "Focus on your strengths and interests : Take a few minutes to reflect on your strengths. What subjects or activities come naturally to you? Knowing what you're good at is the first step toward choosing a career that aligns with your abilities.",
    "Research a New Career : Spend 10 minutes reading about a career you're curious about. Learn about what professionals in that field do daily, the qualifications needed, and potential growth opportunities.",
    "Stay Curious : Ask questions and seek answers. If something intrigues you in school, explore it further. Curiosity can lead to discovering passions you didn’t know you had.",
    "Take a Break and Reflect : Take a few minutes to relax and clear your mind. Career decisions can be overwhelming, but a clear head leads to better decision-making.",
    "Build a Habit of Learning : Make it a habit to learn something new every day. This could be related to your future career or even a skill like time management, which will help you in any profession.",
    "Practice Problem-Solving : Take a small problem in your daily life and try to solve it creatively. Problem-solving is a key skill in many careers, and practicing it helps you develop a strategic mindset.",
  ];

  const weeklyTips = [
    {
      heading: "Explore Emerging Career Trends",
      points: [
        "Stay updated on the latest industry developments.",
        "Identify career opportunities that align with future demands.",
        "Helps you make informed decisions about high-growth fields.",
      ],
    },
    {
      heading: "Network with a Professional",
      points: [
        "Build connections with professionals in your field of interest.",
        "Gain insights into real-world career experiences and opportunities.",
        "Networking can lead to mentorship and potential job leads.",
      ],
    },
    {
      heading: "Learn a New Skill",
      points: [
        "Focus on mastering a skill that complements your career path.",
        "Enhances your resume and sets you apart from others.",
        "Continuous learning keeps you adaptable in a changing job market.",
      ],
    },
    {
      heading: "Create a Personal Development Plan",
      points: [
        "Set specific, achievable goals for self-improvement.",
        "Helps you track progress in skills or areas you want to grow in.",
        "Encourages consistency and long-term focus on career preparation.",
      ],
    },
  ];

  function getDailyTip() {
    const today = new Date();
    const index = today.getDate() % dailyTips.length;
    return dailyTips[index];
  }

  function getWeeklyTip() {
    const today = new Date();
    const weekNumber = Math.floor(today.getDate() / 7);
    const index = weekNumber % weeklyTips.length;
    return weeklyTips[index];
  }

  function appendTip(tip, containerId) {
    const container = document.getElementById(containerId);
    const tipElement = document.createElement("p");
    const [heading, ...text] = tip.split(": ");
    tipElement.innerHTML = `<strong>${heading}:</strong> ${text.join(": ")}`;
    container.appendChild(tipElement);
  }

  function appendTip(tip, containerId, isList = false) {
    const container = document.getElementById(containerId);
    if (isList) {
      const headingElement = document.createElement("h3");
      headingElement.innerHTML = `<strong>${tip.heading}</strong>`;
      container.appendChild(headingElement);

      const ul = document.createElement("ul");
      tip.points.forEach((point) => {
        const li = document.createElement("li");
        li.innerText = point;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    } else {
      const tipElement = document.createElement("p");
      const [heading, ...text] = tip.split(": ");
      tipElement.innerHTML = `<strong>${heading}:</strong> ${text.join(": ")}`;
      container.appendChild(tipElement);
    }
  }

  appendTip(getDailyTip(), "daily-tip-content");
  appendTip(getWeeklyTip(), "weekly-tip-content", true);
});
