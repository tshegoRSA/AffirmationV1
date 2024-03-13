document.getElementById('fetchButton').addEventListener('click', fetchAffirmation);

function fetchAffirmation() {
  // Simulate fetching affirmation from an API
  const affirmations = [
    "You radiate so much love and positivity, and it will come back to you tenfold.",
    "With each dawn, I embrace the promise of new beginnings and the possibility of better days.",
    "You bring joy to everyone around you.",
    "I am resilient, and I know that every setback is a stepping stone toward the brighter future that awaits me.",
    "Times may be difficult, but it is a short phase of life. Things can get better. Things will get better.",
    "When I come across scriptures referencing how humanity is made in the image of God, I can't help but think of you.",
    "I am a magnet for positivity and opportunity, attracting the blessings of better days into my life.",
    "Any one who has had the privilege of knowing you, I count amongst the most blessed humans to cross this earth. You are amazing",
    "You possess a unique blend of wisdom and compassion that touches the souls of those around you.",
    "I envision a future filled with love, prosperity, and fulfillment, and I trust that better days are manifesting for me even now.",
    "Your journey is a testament to your resilience and inner strength, and will guide others to find their own courage, so you can't give up now",
    "In your presence, I feel the embrace of authenticity and vulnerability, reminding me of the beauty in imperfection.",
    "Your empathy and understanding create a safe space for others to express their true selves without fear of judgment.",
    "You carry within you the seeds of transformation, nurturing growth and renewal in the lives you touch.",


  ];

  // Randomly select an affirmation
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmation = affirmations[randomIndex];

  // Display the affirmation
  document.getElementById('affirmation').textContent = affirmation;
}
