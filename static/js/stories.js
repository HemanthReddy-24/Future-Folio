
// Function to load a detailed story
function loadStory(storyId) {
    // Hide the success stories section
    document.getElementById('success-stories').style.display = 'none';
    // Show the story details section
    document.getElementById('story-details').style.display = 'block';

    // Example data for demonstration purposes
    const stories = {
        'elon-musk': {
            title: 'From dreaming about space to revolutionizing industries: Meet Elon Musk',
            bio: 'Elon Musk is the driving force behind some of the world’s most impactful companies, including Tesla, SpaceX, and Neuralink. Starting with small ventures like Zip2 and PayPal, his vision to change the future led him to push boundaries in multiple industries. Today, he’s known for transforming electric vehicles, exploring space, and pioneering sustainable energy solutions.',
            quote: '"When something is important enough, you do it even if the odds are not in your favor."'
        },
        'sundar-pichai': {
            title: 'From humble beginnings in India to leading one of the world’s most influential tech companies: Meet Sundar Pichai',
            bio: 'Sundar Pichai is the CEO of Google and Alphabet, overseeing groundbreaking innovations that impact billions of people worldwide. His journey, from growing up in a modest home in Chennai, India, to becoming the leader of one of the most powerful tech companies, is a story of perseverance, humility, and leadership.',
            quote: '"Wear your failure as a badge of honor."'
        },
        'jeff-bezos': {
            title: 'From a small online bookstore to building the world’s largest e-commerce giant: Meet Jeff Bezos',
            bio: 'Jeff Bezos, the visionary founder of Amazon, started with an idea to sell books online, and transformed it into the world’s largest e-commerce and cloud computing company. His relentless focus on customer experience and innovation reshaped how the world shops, reads, and uses technology. Beyond Amazon, Bezos is also driving advancements in space exploration with his company Blue Origin.',
            quote: '"One of the only ways to get out of a tight box is to invent your way out."'
        },
        'prabhas': {
            title: 'From regional stardom to becoming an international icon in cinema: Meet Prabhas',
            bio: 'Prabhas, born in a film family, rose to national and international prominence with his dedication, hard work, and passion for acting. From his early days in Telugu cinema to his groundbreaking performance in the Baahubali series, Prabhas has become one of the most recognized and celebrated actors in Indian cinema, expanding his fan base far beyond regional and national borders.',
            quote: '"Dream big, work hard, stay humble."'
        },
        'cristiano-ronaldo': {
            title: 'From humble beginnings to becoming one of the greatest footballers of all time: Meet cristiano Ronaldo',
            bio: 'Cristiano Ronaldo’s journey from a small island in Portugal to becoming one of the world’s most celebrated footballers is a story of sheer determination, relentless work ethic, and unparalleled passion for the game. With countless records, multiple Ballon d’Or awards, and success at top clubs like Manchester United, Real Madrid, and Juventus, Ronaldo’s career is an inspiring tale of dedication and triumph.',
            quote: '"Your love makes me strong, your hate makes me unstoppable."'
        }
        // Add more stories as needed
    };

    // Load the story data
    const story = stories[storyId];
    document.getElementById('story-title').innerText = story.title;
    document.getElementById('story-bio').innerText = story.bio;
    document.getElementById('story-quote').innerText = story.quote;
}

// Function to go back to the success stories section
function goBack() {
    // Hide the story details section
    document.getElementById('story-details').style.display = 'none';
    // Show the success stories section
    document.getElementById('success-stories').style.display = 'block';
}

// Function to handle the "Get Started" button click
function getStarted() {
    alert('Redirecting to the sign-up page...');
    // Redirect to the sign-up page (example)
    window.location.href = 'signup.html';
}
