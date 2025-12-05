// Lista med händelser
const events = [
  {
    year: "1957",
    title: "Sputnik 1 skjuts upp",
    text: "Sovjetunionen sänder upp den första satelliten i omloppsbana – starten på rymdkapplöpningen.",
    image: "bilder/moon.png",
    audio: "ljud/sputnik.mp3"
  },
 {
  year: "1961",
  title: "Första människan i rymden",
  text: "Jurij Gagarin blir den första människan i rymden ombord på Vostok 1.",
  image: "bilder/stillracket.png",
  gif:   "bilder/hi.gif",      
  audio: "ljud/gagarin.mp3"
}
,
  {
    year: "1969",
    title: "Månlandningen",
    text: "Apollo 11 landar på månen och Neil Armstrong blir den första människan att sätta sin fot där.",
    image: "bilder/apollo11.jpg",
    audio: "ljud/apollo11.mp3"
  }
];

let index = 0;
const timeline = document.getElementById("timeline");

function visaEvent(i) {
  const e = events[i];
  timeline.innerHTML = `
    <div class="event">
      <h2>${e.year} – ${e.title}</h2>
      <img id="eventImage" src="${e.image}" alt="${e.title}">
      <p>${e.text}</p>
      <audio id="audio" controls autoplay>
        <source src="${e.audio}" type="audio/mpeg">
        Din webbläsare stödjer inte ljuduppspelning.
      </audio>
    </div>
  `;

  // Klick för att starta GIF
  const img = document.getElementById("eventImage");

  img.addEventListener("click", () => {
    if (e.gif) {
      img.src = e.gif;
    }
  });
}


document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % events.length;
  visaEvent(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + events.length) % events.length;
  visaEvent(index);
});

// Visa första händelsen direkt
visaEvent(index);
