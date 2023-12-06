export type Project = ReturnType<typeof getOldProjectsData>[number];

export function getOldProjectsData() {
  const data = oldProjects.map((p) => {
    let sortDate = p.sortDate;
    if (!sortDate) {
      const year = Number(p.date.split(" ")[1]);
      sortDate = `${year}-01-01`;
    }

    const [year, month, day] = sortDate.split("-").map(Number);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${months[month - 1]} ${year}`;

    return { ...p, sortDate, formattedDate };
  });

  return data;
}

const oldProjects = [
  {
    link: "",
    title: "Kevin's Food Guide",
    date: "June 2022",
    sortDate: "2022-06-01",
    text: ``,
    tags: [],
    images: [],
  },
  {
    link: "",
    title: "/roʊˈdeɪoʊ/ Let's Play: HOLLYWOOD",
    date: "March 2021",
    sortDate: "2021-03-05",
    text: `Kim Kardashian Style`,
    tags: [],
    images: [],
  },
  {
    link: "https://mistershane.bandcamp.com/album/lucky",
    title: "Lucky",
    date: "April 2018",
    sortDate: "2018-04-15",
    text: `
      "How could it happen to me?"<br><br>
      Mister Shane 4 song EP, 4/20/18.
      "The Dig" video available <a href="https://www.youtube.com/watch?v=vRqmYh3MJWI" target="_blank">here</a>.`,
    tags: ["Mister Shane", "Sound"],
    images: ["images/mister-shane-lucky.jpg"],
  },
  {
    link: "http://spaghettis.surge.sh",
    title: "Spaghetti's Supper Club",
    date: "October 2017 (Ongoing)",
    sortDate: "2017-10-27",
    text: `Spaghetti's is an Italian-American performance-oriented dinner-and-a-show supper club.`,
    tags: ["Pleasure Seeker", "Performance"],
    images: ["images/spaghettis-spaghetti.jpg"],
  },
  {
    link: "http://www.itscomingastorm.us",
    title: "It's Coming a Storm",
    date: "June 2017",
    sortDate: "2017-06-22",
    text: `
      <i>It's Coming a Storm (Praise Receiver)</i> is an ongoing attempt to measure the Internet attention received
      by people who have made lives of thriving on it.
      <br><br>
      It takes the form of two 3D environments. The first contains 8 ogreish politicans and celebrities swinging from
      chains as they accumulate Attention Coins, groan, and swell as the size of their audience ebbs and flows. The
      second (THE ORB) invites participation and manipulates a humanoid body for every Twitter person that signs up
      <a href="http://orb.itscomingastorm.us/#/register" target="_blank">here</a>. The energy of the orb is dictated
      by our collective sum of attention received over the past 24 hours.
      <br><br>
      Warning that most laptops may not render these videos very well, or they might get really hot. They were designed
      to run on dedicated computers in the context of an installtion. So far, the work has been installed at
      <a href="http://www.harvestworks.org/" target="_blank">Harvestworks</a> from 06/22/17 - 06/25/17.
      <br><br>
      Sound produced in collaboration with <a href="http://thomasjohnmartinez.com/" target="_blank">Tommmy Martinez</a>.
      <br><br>
      Below are some images of the install / screenshots from the 3D environments. I can send videos of the space on
      request.
      `,
    tags: ["Installation", "Video", "Object", "3D"],
    images: [
      "images/its-coming-a-storm/storm-1.jpg",
      "images/its-coming-a-storm/storm-2.jpg",
      "images/its-coming-a-storm/storm-3.jpg",
      "images/its-coming-a-storm/storm-4.jpg",
      "images/its-coming-a-storm/storm-5.jpg",
      "images/its-coming-a-storm/storm-6.jpg",
      "images/its-coming-a-storm/storm-7.jpg",
      "images/its-coming-a-storm/storm-8.jpg",
      "images/its-coming-a-storm/storm-9.jpg",
      "images/its-coming-a-storm/storm-10.jpg",
      "images/its-coming-a-storm/storm-11.jpg",
      "images/its-coming-a-storm/storm-12.jpg",
      "images/its-coming-a-storm/storm-13.jpg",
      "images/its-coming-a-storm/storm-14.jpg",
      "images/its-coming-a-storm/storm-15.jpg",
      "images/its-coming-a-storm/storm-16.jpg",
    ],
  },
  {
    link: "https://historyofthegif.com",
    title: "History of the GIF | Giphy",
    date: "June 2017",
    sortDate: "2017-06-10",
    text: `
      I designed & developed this site for Giphy (The BigGifWebsite) to celebrate the history of
      the GIF image format. It was shown at the
      <a href="https://timeframe.splashthat.com/" target="_blank">TIME_FRAME</a> exhibition
      in New York City with a bunch of GIF art.
      <br><br>
      Made with guidance of <a href="https://computerlab.io/" target="_blank">Computer Lab</a>.
      `,
    tags: ["Money", "Net", "3D"],
    images: ["images/history-of-the-gif.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=vmHr9dUhclo",
    title: '"Unelected" - Perc (Video)',
    date: "April 2017",
    sortDate: "2017-04-20",
    text: `
      "Unelected" is a great new track from Perc's 2017 album Bitter Music, released on Perc Trax.
      <br><br>
      <a href="https://vimeo.com/fasenfest" target="_blank">Bernhard Fasenfest</a>
      and I created a video for the track using repetitive flashing and blending
      of news images from the world events of 2016 and early 2017.
      <br><br>
      Rather than work cohesively, the video’s images are meant to blur and contrast against one another, at once familiar
      and implacable. They evoke familiar images of events, people, and places from the past year with lingering after-effects,
      but which are easily forgotten in the vast and unrelenting 24-hour news cycle: the rise of far-right politics, mass
      migrations of refugees, ongoing conflicts and civil wars, protests for and against the rights of others, globalization,
      late-capitalism, etc. Images of these phenomena are cut and blended together to reflect their entanglement; a tension
      emerges between the narrative of the individual images/objects and their aesthetic power, our inability to reconcile
      their varied meanings overcome by the mesmerizing effects of their combination.
      <br><br>
      Flashing images warning (:
      `,
    tags: ["Music Vid", "Video"],
    images: [
      "images/perc-unelected/unelected-1.jpg",
      "images/perc-unelected/unelected-2.jpg",
      "images/perc-unelected/unelected-3.jpg",
      "images/perc-unelected/unelected-4.jpg",
      "images/perc-unelected/unelected-5.jpg",
      "images/perc-unelected/unelected-6.jpg",
      "images/perc-unelected/unelected-7.jpg",
      "images/perc-unelected/unelected-8.jpg",
      "images/perc-unelected/unelected-9.jpg",
      "images/perc-unelected/unelected-10.jpg",
      "images/perc-unelected/unelected-11.jpg",
      "images/perc-unelected/unelected-12.jpg",
      "images/perc-unelected/unelected-13.jpg",
      "images/perc-unelected/unelected-14.jpg",
      "images/perc-unelected/unelected-15.jpg",
      "images/perc-unelected/unelected-16.jpg",
      "images/perc-unelected/unelected-17.jpg",
      "images/perc-unelected/unelected-18.jpg",
      "images/perc-unelected/unelected-19.jpg",
      "images/perc-unelected/unelected-20.jpg",
      "images/perc-unelected/unelected-21.jpg",
    ],
  },
  {
    link: "https://github.com/kevin-roark/business-bot-friend-helper",
    title: "Business Bot Friend Helper",
    date: "April 2017",
    text: "App to help you get a job by endlessly emailing someone you need to impress until you get the job.",
    tags: ["Software"],
  },
  {
    link: "https://www.youtube.com/watch?v=LIdULtTrW3c",
    title: '"Falcon Passport" - DIVORCE (Video)',
    date: "February 2017",
    text: `
      DIVORCE released Jet Fuel, their first EP, via NYC's Sweat Equity; it is very good electronic music.
      <br><br>
      This is a music video for the fourth track of Jet Fuel. A creature learns to fly. I tried to blend real-world
      and digital-world footage in a somewhat fluid way. Really getting deep into the bird world.
      `,
    tags: ["Music Vid", "Video"],
    images: [
      "images/falconpassport/1.jpg",
      "images/falconpassport/2.jpg",
      "images/falconpassport/3.jpg",
      "images/falconpassport/4.jpg",
      "images/falconpassport/5.jpg",
    ],
  },
  {
    link: "http://www.myworld.click",
    title: "MY WORLD",
    date: "February 2017",
    text: "I made some 3D scans of the people and objects around me in early 2017. This is my collection of those 3D photographs. You can download prints!",
    tags: ["3D", "Net"],
    images: [
      "images/myworld/1.jpg",
      "images/myworld/2.jpg",
      "images/myworld/3.jpg",
    ],
  },
  {
    link: "https://www.youtube.com/watch?v=tuWrmaQmcVo",
    title: "Simulacrum, Everywhere",
    date: "February 2017",
    text: `
      "Donald J. Trump State Park" is a 436-acre undeveloped plot of land in Putnam County, New York. It was called a state park from 2006 until 2010, when the state abandoned it because of budget cuts. It has rested unused for seven years, wasted.
      <br><br>
      Donald Trump, the former star of The Apprentice and now the President of the United States, purchased the land in the 1990s for $2 million with the intention of building a $10 million private golf course on the wetlands. Inconveniently, his plan was thwarted by “some local opposition” from environmental restrictions and permitting requirements. Ever-opportunistic, Trump donated the land to the state of New York in under the conditions that it would become a park bearing his name (forever — “I gave that land for the purposes of the park, and I always believed that once a park is there, it would always be a park”) and, more significantly, that he could use the donation for a $100 million tax break. Trump made no donation to maintain the land or to truly create a park from it. The abandoned buildings contain asbestos. The land still bears his name. It is a shell. It was a gift. A simulacrum of a gift and a simulacrum of a park.
      <br><br>
      Former Governor George Pataki, on the donation: "With spring upon us and Earth Day right around the corner, today marks the perfect time for New Yorkers to receive such a generous and meaningful gift – the protection of valuable open space and beautiful parklands in the Hudson Valley. The establishment of Donald J. Trump State Park will increase public access to scenic landscapes and provide additional recreational opportunities for families and visitors to the region. On behalf of the people of the Empire State, I express our gratitude to Donald Trump for his vision and commitment to preserve the natural resource of this property for the benefit of future generations.",
      <br><br>
      State Assemblyperson Sandra Galef, on the donation: "Parkland is such a precious commodity and this gift of 436 acres from Donald Trump will have a positive impact on the residents of our Hudson Valley communities for many decades.",
      <br><br>
      Former State Parks Commissioner Bernadette Castro, on the donation: “This magnificent donation highlights the long-term success of fostering public/private partnerships as we continue to implement Governor Pataki’s vision for the environment and open space protection. Donald Trump’s incredible gift will have a lasting impact on our parklands, opening up public access to additional outdoor recreation and helping preserve the rich array of natural resources found in the Hudson Valley. Through his generosity, New Yorkers and their families will now be able to enjoy these parklands for years to come.”
      <br><br>
      The land is barren; everyone smiled, promised, and pretended something else. Trump didn’t want it, and the state couldn’t afford it. The park closed only four years after The Gift was announced.
      <br><br>
      One sign to enter the park is still visible from the Taconic Parkway. There used to be other signs. The entrance to the park is hard to find—it is at the top of a hill and gated off. Once the gate is entered: everything is dead, muddy, pale brown. There are a number of flat open fields, covered in dead grass with a view of spectacular mountains in the distance, mountains that are not in the park. There is plastic trash; there is gatorade and styrofoam. It is dirty. No one cares, no one is responsible for the land. The land is a tool.
      <br><br>
      On January 20th 2017 I brought a 55-gallon steel drum into the former park and a bag of shredded $10,000. I poured the money into the barrel and I played with it. I held the money in my hands and I threw it in the air and back down into the barrel. I lit the money on fire but I became afraid, the sight of burning money made my stomach churn. I poured a gallon of spring water from a plastic jug onto the pile of burning money to extinguish the flames. I held the burnt damp money in my hands, towards the sky. I carried the barrel out of the wasteland and went home.
      <br><br>
      This place is wretched and this man is wretched. Our world requires us to pretend that a lot of things are real; we should not pretend this man is real.
      <br><br>
      Yorktown superviser Linda Cooper, on Trump’s failed golf course: He “just didn’t want to go through the rules… He called me, at one point, and said, ‘Linda, just let me build the golf course — I’m rich, you’ll like it.'”
      `,
    tags: ["Video", "Performance"],
    images: [
      "images/simulacrum/1.jpg",
      "images/simulacrum/2.jpg",
      "images/simulacrum/3.jpg",
    ],
  },
  {
    link: "http://joebucciero.website/index.php/art/popular-mechanics/",
    title: "Popular Mechanics / Worse Than Lepers",
    date: "February 2017",
    text: "Two videos made with Joe Bucciero about populism and nostalgia. Showing as part of We Need to Talk at Petzel Gallery in Chelsea. You can read more about them on Joe's site.",
    tags: ["Video"],
    images: ["images/popularmechanics.jpg", "images/worsethanlepers.jpg"],
  },
  {
    link: "http://www.breadandmeats.com/",
    title: "Joyce Kim Website",
    date: "January 2017",
    text: "Portfolio website for graphic designer Joyce Kim. She's really good and it has flames!!!",
    tags: ["Net", "Money"],
    images: ["images/joycekim.jpg"],
  },
  {
    link: "https://github.com/kevin-roark/rigid-envelope",
    title: "Rigid Envelope",
    date: "January 2017",
    text: `
      I made a Mac application that periodically checks my email and downloads 3D scans that I make onto my computer.
      This would not be very helpful for you, but if you find yourself doing repetitive email work and want me to
      make you a tool I will do that!!
      `,
    tags: ["Software"],
  },
  {
    link: "/bird-sculpture",
    title: "Bird Sculpture (FREEDOM)",
    date: "December 2016",
    text: "Multimedia installation about birds, guilt, replication, and abstraction.",
    tags: ["Object", "3D", "Video", "Installation"],
    images: ["images/birdsculpture.jpg"],
  },
  {
    link: "http://gruen.kevinroark.com",
    title: "Gruen (NAME ON THE FRONT PAGE)",
    date: "December 2016",
    text: "Infinitely-growing black pillars in a black box lit by red and blue. Sound from a disgusting man. Made for projection at a Cyberpunk Event (lol).",
    tags: ["Pleasure Seeker", "3D", "Sound", "Net"],
    images: ["images/gruen.jpg"],
  },
  {
    link: "/freelance",
    title: "FREELANCE",
    date: "Novemeber 2016 (Ongoing)",
    text: "Deep Stream of life photos taken on VIVITAR FREELANCE digital cam.",
    tags: ["Photo"],
    listStyle: "letter-spacing: 5px; text-shadow: 5px 5px 1px rgba(0,0,0,0.5);",
    images: [
      "freelance-images/381.jpg",
      "freelance-images/327.jpg",
      "freelance-images/253.jpg",
      "freelance-images/274.jpg",
    ],
  },
  {
    link: "https://www.youtube.com/watch?v=8gQ4cEM1ONA",
    title: '"True" (ft. Maria Ivanova) - Broken Spear (Video)',
    date: "November 2016",
    text: 'Music video for the single "True" from the Broken Spear album True (out now go listen). I loved making this vid.',
    tags: ["Music Vid", "Video"],
    images: [
      "images/true/1.jpg",
      "images/true/2.jpg",
      "images/true/3.jpg",
      "images/true/4.jpg",
      "images/true/5.jpg",
    ],
  },
  {
    link: "https://docs.google.com/document/d/1wBPhVi4UxxUtJffNkEdAA2Ia_qTqak4BC-45saYhX9E/edit?usp=sharing",
    title: "Curtain State",
    date: "November 2016",
    text: "Here are some thoughts about the bad election in relation to reality tv, mass media, and self-representation. Helpful for me to process hope it can be helpful to others.",
    tags: ["Text"],
    listStyle: "background: #f00;",
  },
  {
    link: "/from-tony-rontinos",
    title: "From Tony Rontino's",
    date: "November 2016",
    text: "LIVE ALBUM RECORDED FROM TONY RONTINO'S ITALIAN RESTAURANT IN WEST CHESTER - Italian Food.",
    tags: ["Pleasure Seeker", "Sound", "Video"],
    images: ["images/fromtonyrontinos.jpg"],
  },
  {
    link: "https://vsco.co",
    title: "VSCO Discover Homepage",
    text: "Programmed the new VSCO website it is all black and has countdowns... pretty sick.",
    date: "November 2016",
    images: ["images/vscohomepage.jpg"],
    tags: ["Money", "Net", "Software"],
  },
  {
    link: "http://www.mistershane.com/lemonade-performance",
    title: "Lemonade Performance",
    date: "October 2016",
    text: "Mister Shane is selling the performance of the sale of a glass of lemonade for $1,000.",
    tags: ["Mister Shane", "Performance", "Video"],
    images: ["images/lemonadeperformance.jpg"],
  },
  {
    link: "http://www.sweetnothings.online",
    title: "SWEET NOTHINGS — BDSMR (Website and Videos)",
    date: "October 2016",
    text: "BDSMR is a really good minimal electronic album by SWEET NOTHINGS. I did not make the music, but I made the website, some photos, two videos (ETERNITY and ZODIAC) and the album art (with help!). Click it!!",
    tags: ["Net", "Music Vid", "Video", "Money"],
    images: ["images/bdsmr.jpg"],
  },
  {
    link: "/the-watcher",
    title: "THE WATCHER",
    date: "October 2016",
    text: "THE WATCHER is a film about watching. It is a concatenation of a lot of footage of watching. Watch THE WATCHER.",
    tags: ["Video"],
    images: ["images/thewatcher.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=k-9ZI4bmx4I",
    title: "I Say Nothing",
    date: "October 2016",
    text: "Video. Power of Refusal. Apprenticeship.",
    tags: ["Mister Shane", "Video", "Sound"],
    images: ["images/isaynothing.jpg"],
  },
  {
    link: "https://pleasureseeker.bandcamp.com/album/clap",
    title: "CLAP",
    date: "October 2016",
    text: "Music tracks made from clap sounds. Mainly the 808 clap sound, the cheap toy one not the real one. I learned that when it was too late. Every sound is a clap. Please clap.",
    tags: ["Pleasure Seeker", "Sound"],
    images: ["images/clap.jpg"],
  },
  {
    link: "https://kevinroark.itch.io/luddy",
    title: "Luddy",
    date: "October 2016",
    text: "Luddy put me on his list. A compilation of financial tech recruiting email correspondence that took place over the course of 20 months followed by a devolving sequence of collage-accompanied reflections. I have a small run of printed copies available, please contact me to obtain one :).",
    tags: ["Text", "Money"],
    images: ["images/luddy.jpg"],
  },
  {
    link: "https://www.youtube.com/playlist?list=PL9j8JGV9mSa3f-ZuOOtfgS96hzsvkIbqB",
    title: "There It Is",
    date: "October 2016",
    text: 'A 32 epsiode cooking and lifestyle series performed by "Kev." "What\'s new with you?" "I\'ve been cooking a lot recently." "Oh."',
    tags: ["Video", "Performance"],
    images: ["images/thereitis.jpg"],
  },
  {
    link: "https://www.youtube.com/playlist?list=PL9j8JGV9mSa3Ltz47vMXom2EpK1HJ958b",
    title: "Here I Am",
    date: "October 2016",
    text: 'A 28 epsiode series of instructional yoga videos performed by "Kev." I did the same thing every day but I did not improve.',
    tags: ["Video", "Performance"],
    images: ["images/hereiam.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=FcCluBBaz8A",
    title: "These Are The 50 Facts You Didn't Know About Stranger Things",
    date: "September 2016",
    text: "Mister Shane researched 50 amazing facts about the hit TV series Stranger Things.",
    tags: ["Mister Shane", "Video"],
    images: ["images/strangerthings.jpg"],
  },
  {
    link: "http://www.mistershane.com/woody",
    title: "Woody",
    date: "September 2016 - January 2017",
    text: "Mister Shane made a Woody mask.",
    tags: ["Mister Shane", "Video"],
    images: ["images/woody.jpg"],
  },
  {
    link: "https://kevinroark.itch.io/daddy",
    title: "Daddy's Essays Complete Edition",
    date: "September 2016",
    text: "I put all of the essays about past that I wrote in the Spring in a book, with some photos taken by my mom and myself. Digital copy avaialble at link, if you want a printed copy please contact me :). Love ya!",
    tags: ["Money", "Text"],
    images: ["images/daddy_essays_complete.jpg"],
  },
  {
    link: "/manikin",
    title: "Manikin",
    date: "September 2016",
    text: "Text and Image collection made through a window",
    tags: ["Photo", "Text", "Net"],
    images: ["images/manikin.jpg"],
  },
  {
    link: "https://kevinroark.itch.io/the-rock-and-the-rock",
    title: "The Rock and The Rock",
    date: "August 2016",
    text: "A small baby game / film about the inevitable and natural attraction of two rocks to one another. It is set in the desert. Rock on.",
    tags: ["Money", "Game", "3D"],
    images: ["images/therockandtherock.jpg"],
  },
  {
    link: "http://max.carmichael.xyz/",
    title: "MAX AND ROLL",
    date: "July 2016",
    text: "Carmichael's first album. Not just an album, a Visual Software Classic Rock MIDI Album incorporating videos of friend Max playing the piano. In 3D and 2D!!! All D.",
    tags: ["Carmichael Payamps", "3D", "Net", "Sound"],
    images: ["images/maxandroll.jpg"],
  },
  {
    link: "http://johnny.kevinroark.com",
    title: "Johnny Football",
    date: "June 2016",
    text: "I hope Johnny goes to jail <i>music</i>. I hope my son goes to jail <i>music</i>. I hope my dad goes to jail <i>music</i>.",
    tags: ["Pleasure Seeker", "Sound", "Net"],
    images: ["images/johnnyfootball.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=gruumgDfOEs",
    title: "My Bad Video",
    date: "June 2016",
    text: "Video for the Dog Shadow track. I took off my shirt again.",
    tags: ["Dog Shadow", "Video", "Sound"],
    images: ["images/mybad.jpg"],
  },
  {
    link: "http://www.f-a-c-e.press",
    title: "FACE TIME",
    date: "June 2016",
    text: "Facial Aspect Character Emulator with Timed Intuitive Muscular Expression. A realtime facial distortion suite. Make a better face and print it out and paste it on your skin.",
    tags: ["Carmichael Payamps", "3D", "Net", "Software"],
    images: ["images/facetime.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=VGzTPTxfQ1U",
    title: "Wasted Years Video",
    date: "May 2016",
    text: "Video for the Dog Shadow track. Footage from an urban domestic dog park in downtown New York City.",
    tags: ["Dog Shadow", "Music Vid", "Video", "Sound"],
    images: ["images/wastedyears.jpg"],
  },
  {
    link: "https://dogshadow.bandcamp.com/album/dog-years",
    title: "Dog Years",
    date: "May 2016",
    text: 'An album of Hard Emotional Tracks divided into three thematic acts: you can hear the pride!! Swelling! Big bunch of ideas in this one. Listen to "Inside Man" and "Cut It Off."',
    tags: ["Dog Shadow", "Sound"],
    images: ["images/dogyears.jpg"],
  },
  {
    link: "http://www.hdsllc.website",
    title: "HDS VOL. 1",
    date: "May 2016",
    text: "A data-object media compilation on which a lot of my and friends' recent projects/work/data was released! You can purchase HDS Vol. 1 at www.hdsllc.website. Please do it and support friends and lovers everywhere!!",
    tags: ["Money", "Object"],
    images: ["images/hdsvol1.jpg"],
  },
  {
    link: "http://atsea.mistershane.com/",
    title: "At Sea",
    date: "May 2016",
    text: "Mister Shane went on a Carnival cruise from New Orleans to Mexico. This is a multimedia collection made of music and photos from that journey. A journey at sea. Every sound is either a field recording from the ship or Shane's voice. He went on vacation. He got what he wanted. He found it.",
    tags: ["Mister Shane", "Sound", "Photo"],
    images: ["images/atsea.jpg"],
  },
  {
    link: "https://pleasureseeker.bandcamp.com/album/love-songs/",
    title: "Love Songs",
    date: "May 2016",
    text: "A set of 32 of the Greatest Pop Love Songs Of All Time that I compiled and recorded renditions of with the aid of YouTube lyrics videos. An <em>icy-hot</em> profession of love and pain.",
    tags: ["Pleasure Seeker", "Sound", "Performance"],
    images: ["images/pleasureseekerlovesongs.jpg"],
  },
  {
    link: "https://github.com/kevin-roark/midi-timing",
    title: "midi-timing",
    date: "May 2016",
    text: "A small utility to convert MIDI files (.mid) to an easy-to-read JSON structure of offset times and durations",
    tags: ["Software"],
  },
  {
    link: "http://sol.carmichael.xyz/",
    title: "Second Round Square Solo",
    date: "May 2016",
    text: "A video permutation series where 13 poems, ascending from in length from three to fifteen lines, are mechanically read in every possible permutated line-order. It's Very Cool&trade;.",
    tags: ["Carmichael Payamps", "Video", "Net"],
    images: ["images/secondroundsquaresolo.jpg"],
  },
  {
    link: "http://www.pith.space",
    title: "Pith Website",
    date: "May 2016",
    text: "I programmed a tiny site for chef Jonah Reider.",
    images: ["images/pith.jpg"],
    tags: ["Money", "Net"],
  },
  {
    link: "https://vsco.co",
    title: "VSCO App",
    text: "I've worked a lot on the VSCO iOS app and some backend machine learning software. It is fun and good (:.",
    images: ["images/vscoapp.jpg"],
    tags: ["Money", "Software"],
    date: "June 2014 - April 2016",
  },
  {
    link: "http://birdhouse.kevinroark.com",
    title: "Birdhouse Formal Wall Projection",
    date: "April 2016",
    text: "NYC Fraternity big birdhouse themed party commissioned request for video project with no reference to birds so I referenced construction because it is through architecture through which we humans fly (CHROME ONLY).",
    tags: ["Video", "Installation"],
    images: ["images/birdhouse.jpg"],
  },
  {
    link: "http://www.colors.black/deduction/",
    title: "Chromatic Deduction",
    date: "April 2016",
    text: "A series of films that were broken down into frames and rearranged temporally with various color-sorting techniques into ColorTime.",
    tags: ["Carmichael Payamps", "Video", "Software"],
    images: ["images/chromaticdeduction.jpg"],
  },
  {
    link: "http://www.carmichael.xyz/multiplex/",
    title: "Multiplex Cinema",
    date: "March 2016",
    text: "Task-oriented parallel films rearranged from A1A2A3B1B2B3C1C2C3 to A1B1C1A2B2C2A3B3C3 for achievement pleasure.",
    tags: ["Carmichael Payamps", "Video", "Software"],
    images: ["images/cinemamultiplex.jpg"],
  },
  {
    link: "http://www.colors.black/reduction/",
    title: "Chromatic Reduction",
    date: "March 2016",
    text: "A rainbow spectrum of films where each frame is reduced to its most relevant color and rendered into an ABSTRACT COLORSTREAM. Recommended: Minions.",
    tags: ["Carmichael Payamps", "Video", "Software"],
    images: ["images/chromaticreduction.jpg"],
  },
  {
    link: "http://www.fffight.site/",
    title: "fffight.site",
    date: "March 2016",
    text: "Grotesque live-composed permutations of all possibilities hinted at by Bourne rebourne. The ultimate action movie site.",
    tags: ["Carmichael Payamps", "Video", "Net"],
    images: ["images/fffightsite.jpg"],
  },
  {
    link: "http://www.carmichael.xyz/rebourne",
    title: "Bourne rebourne",
    date: "March 2016",
    text: "Frankensteinien reconstruction of shots from the <em>Bourne</em> series that amplify what we wanted.",
    tags: ["Carmichael Payamps", "Video"],
    images: ["images/bournerebourne.jpg"],
  },
  {
    link: "http://www.lifeislife.xyz",
    title: "Life in Review",
    date: "March 2016",
    text: "A stream of Facebook's emotive digital memories flashes before your physical eyes.",
    tags: ["Carmichael Payamps", "Net"],
    images: ["images/lifeinreview.jpg"],
  },
  {
    link: "https://github.com/kevin-roark/frampton",
    title: "Frampton",
    date: "February 2016 - April 2016",
    text: "An in-the-works suite of isomorphic-ish algorithmic video composition tools.",
    tags: ["Software"],
  },
  {
    link: "http://www.feud.online/",
    title: "feud.online",
    date: "February 2016",
    text: "A series of endless films about family and spectacle featuring delicate clips from TV's Family Feud.",
    tags: ["Carmichael Payamps", "Video", "Net"],
    images: ["images/feudonline.jpg"],
  },
  {
    link: "https://dogshadow.bandcamp.com/",
    title: "Faithful Companion",
    date: "December 2015",
    text: "The first music release from Dog Shadow, featuring blasted electronic emotional dog sounds.",
    tags: ["Dog Shadow", "Sound"],
    images: ["images/faithfulcompanion.jpg"],
  },
  {
    link: "http://second.mistershane.com/",
    title: "Second Shane",
    date: "December 2015",
    text: "A complex and growing interactive world unified by consistent themes both contemporary + eternal. Please explore and see what you can find...",
    tags: ["Mister Shane", "3D", "Net", "Sound"],
    images: ["images/secondshane.jpg"],
  },
  {
    link: "http://www.gods.website/",
    title: "God's Website",
    date: "December 2015",
    text: "Helps us track what we say about God, right now. Good or bad? Is it two-way?",
    tags: ["Carmichael Payamps", "Net"],
    images: ["images/godswebsite.jpg"],
  },
  {
    link: "https://vimeo.com/145527109",
    title: "30 Pushups By Myself",
    date: "November 2015",
    text: "9 hours of accumulated clerical mistakes. Work and Work and Work and this is what I get. 11 minute video.",
    tags: ["Video"],
    images: ["images/30pushupsbymyself.jpg"],
  },
  {
    link: "http://www.rainonme.xyz/",
    title: "Rain in a Room",
    date: "November 2015",
    text: "Let the Wet wash over You. Water falls all around you yet you never wet yourself, then witness a flood of others experiencing the Rain Room artwork. 20 minutes recommended.",
    tags: ["Carmichael Payamps", "3D", "Net"],
    images: ["images/raininaroom.jpg"],
  },
  {
    link: "http://www.davidzwirnher.com/",
    title: "David Zwirnher Online",
    date: "October 2015",
    text: "Fall through the Hole. Easy and Quick and at Home. Rapid View all the Art ever exhibited at the David Zwirnher New York City Art Gallery. 15 minutes recommended.",
    tags: ["Carmichael Payamps", "3D", "Net"],
    images: ["images/dzonline.jpg"],
  },
  {
    link: "http://www.onetool.website/",
    title: "And Rakes To Spread The Haul",
    date: "August 2015",
    text: "A collection of poems hailing the One Man One Tool One Purpose ideology. Please contact me to obtain a physical book.",
    tags: ["Money", "Text", "Object", "Net"],
    images: ["images/andrakes.jpg"],
  },
  {
    link: "http://lovepoem.porkf.at/",
    title: "[Love Poem]",
    date: "August 2015",
    text: "I made gold from a Richard Brautigan poem",
    tags: ["Text", "3D"],
    images: ["images/lovepoem.jpg"],
  },
  {
    link: "https://github.com/kevin-roark/sheen",
    title: "Sheen",
    date: "August 2015",
    text: "A small extension of THREE.js with helpful starter pack for my own projects. You are welcome to use it. You also don't have to.",
    tags: ["Software"],
    images: ["images/sheen.jpg"],
  },
  {
    link: "http://www.newplanet.website/",
    title: "New Snock Planet",
    date: "July 2015",
    text: "A persistent new world, boiling the essence, becoming. Chat and interact with others and me.",
    tags: ["3D", "Net"],
    images: ["images/snockplanet.jpg"],
  },
  {
    link: "film/june15",
    title: "June 2015 Photos",
    date: "June 2015",
    text: "35mm photos of motorcycles, luxury, water, florida.",
    tags: ["Photo"],
    images: ["images/june15-1.jpg"],
  },
  {
    link: "http://www.luminal.space/",
    title: "Luminal.space",
    date: "April 2015",
    text: "An installation on Columbia's Low Steps; long-term project made with many people more talented than me. Click for info.",
    tags: ["Object", "Installation"],
    images: ["images/luminal.jpg"],
  },
  {
    title: "Job Fair",
    date: "March 2015",
    text: "Simulation of a startup job fair / earn and prove your worth",
    tags: ["TONY TONEHOLE", "Performance", "Sound", "3D"],
    images: ["images/tony/jobfair.jpg"],
  },
  {
    link: "http://heaven.mistershane.com",
    title: "Shane's Tweet Heaven",
    date: "February 2015",
    text: "Explore your twitter self with a museum made just for u",
    tags: ["Mister Shane", "Text", "3D", "Sound", "Net"],
    images: ["images/shane/heaven.jpg"],
  },
  {
    title: "Ronald",
    date: "December 2014",
    text: "He just can't seem to get outside of that computer trash can. Help him.",
    tags: ["TONY TONEHOLE", "Performance", "Sound", "3D"],
    images: ["images/tony/ronald.jpg"],
  },
  {
    link: "http://www.9857188538.website/",
    title: "(985) 718-8538",
    date: "November 2014",
    text: "Translation of phone words to phone sounds using DTMF tones",
    tags: ["Text", "Net", "Sound"],
    images: ["images/9857188538.jpg"],
  },
  {
    title: "Strengh.js",
    date: "October 2014",
    text: "Tech Masculinity / Wrestling Dylan with Kinect puppets",
    tags: ["TONY TONEHOLE", "Performance", "Sound", "3D"],
    images: ["images/tony/strengthjs.jpg"],
  },
  {
    link: "http://benkogan.github.io/corpse/",
    title: "Corpse",
    date: "October 2014",
    text: "Computer corpse for Postcrypt's Exquisite Corpse show. Made w/ Ben, Dylan, Henry. I did the foot.",
    tags: ["Net"],
    images: ["images/corpse.jpg"],
  },
  {
    link: "http://wayne.porkf.at",
    title: "Wayne",
    date: "October 2014",
    text: "A wayne model that grows sicker and sadder with you",
    tags: ["3D", "Net"],
    images: ["images/wayne.jpg"],
  },
  {
    link: "http://wbar.org",
    title: "WBAR",
    date: "Fall 2012 - Spring 2015",
    text: "Internet work at best freeform nyc college radio station a+",
    images: ["images/wbar.jpg"],
    tags: ["Net", "Software"],
  },
  {
    link: "http://www.mistershane.com",
    title: "Content: Volume 1",
    date: "May 2014",
    text: "First collection of tracks from Mister Shane, experimental audiovisual project from Sean and Kev.",
    tags: ["Mister Shane", "Sound", "Video", "Net"],
    images: [
      "images/shane/laborpain.jpg",
      "images/shane/osteen.jpg",
      "images/shane/pig.jpg",
      "images/shane/birthday.jpg",
      "images/shane/eat.jpg",
    ],
  },
  {
    link: "http://journey.porkf.at",
    title: "(Pork) Journey",
    date: "June 2014",
    text: "Play through the inevitable fate of a space-pig: The Journey To Pork",
    tags: ["Game"],
    images: ["images/porkjourney.jpg"],
  },
  {
    link: "https://github.com/kevin-roark/dummy-meat-timer",
    title: "dummy-meat-timer",
    date: "June 2014",
    tags: ["Software"],
    text: 'A simple HTML tool for timing a sequence of events. I used it to record ticks of when each word in the song "With Arms Wide Open" occurs :).',
  },
  {
    link: "http://www.wideopenwitharms.com",
    title: "Wide Open With Arms",
    date: "June 2014",
    text: "Creed Music Video",
    tags: ["Video"],
    images: ["images/wideopenwitharms.jpg"],
  },
  {
    link: "http://kevin-roark.github.io/arthur",
    title: "arthur",
    date: "Spring 2014",
    text: "A programming language made for manipulating and combining various media styles. made it for a class with melody sahil henry dylan. check the examples.",
    images: ["images/arthur.jpg"],
    tags: ["Software"],
  },
  {
    link: "http://socket.computer/",
    title: "Socket.IO Computer",
    date: "May 2014",
    text: "a collaborative windows xp emulator that runs in browser",
    images: ["images/socketcomputer.jpg"],
    tags: ["Software"],
  },
  {
    link: "http://sxecop.bandcamp.com",
    title: "Straightedge Cop",
    subtitle: "2014 Demo",
    date: "May 2014",
    text: "Hardcore straightedge sermon music. First small demo lol its coming back one day",
    tags: ["Sound"],
    images: ["images/sxecop.jpg"],
  },
  {
    link: "http://www.lonelytrash.me",
    title: "Lonely Trash",
    date: "May 2014",
    text: "Small walking exploration, three minutes to win in this world of my trash, trash from me",
    tags: ["Game", "Photo"],
    images: ["images/lonelytrash.jpg"],
  },
  {
    link: "http://www.millersfantasy.com/",
    title: "yellin",
    date: "April 2014",
    text: "An iOS application. Send sound at miller's fantasy founders. We send it back",
    tags: ["Miller's Fantasy", "Software", "Sound"],
    images: ["images/miller/yellin.jpg"],
  },
  {
    link: "film/textures/",
    title: "Textures",
    date: "Spring 2014",
    text: "natural patterns",
    tags: ["Photo"],
    images: ["images/textures.jpg"],
  },
  {
    link: "film/mouths/",
    title: "Mouths",
    date: "Spring 2014",
    text: "eat through the hole",
    tags: ["Photo"],
    images: ["images/mouths.jpg"],
  },
  {
    link: "http://adhoc.fm",
    title: "AdHoc",
    date: "Spring 2014",
    text: "I did internet work for this diy music publication / show-booker a+",
    tags: ["Net", "Money"],
    images: ["images/adhoc.jpg"],
  },
  {
    link: "http://www.weplay.io",
    title: "Weplay",
    date: "March 2014",
    text: "a 100% javascript collaborative gameboy player w/ socket.io 1.0 (with mr guillermo &amp; Mr. Tony)",
    images: ["images/weplay.jpg"],
    tags: ["Software"],
  },
  {
    link: "http://www.specialmagicglasshole.com",
    hidden: true,
    title: "Special Magic Glass Hole",
    date: "March 2014",
    text: "A realtime hole through which all are seen and can Share",
    tags: ["Net"],
    images: ["images/specialmagicglasshole.jpg"],
  },
  {
    link: "http://www.specialmagicyellingroom.com",
    hidden: true,
    title: "Special Magic Yelling Room",
    date: "March 2014",
    text: "A realtime Ear Bucket where everyone is Heard at once",
    tags: ["Net"],
    images: ["images/specialmagicyellingroom.jpg"],
  },
  {
    link: "http://www.networkforu.com/",
    title: "Network Style",
    date: "March 2014",
    text: "A seminar on Best Business Practices and learning Trade Secrets",
    tags: ["Miller's Fantasy", "Net"],
    images: ["images/miller/networkstyle.jpg"],
  },
  {
    link: "http://www.diningatcu.com/",
    title: "Dining@CU",
    date: "March 2014",
    text: "Dining menu application to discover dining hall menus",
    tags: ["Miller's Fantasy", "Net"],
    images: ["images/miller/diningatcu.jpg"],
  },
  {
    link: "http://www.whereistimesquare.com/",
    title: "WHERE IS TIME SQUARE?",
    date: "February 2014",
    text: "Map findng application to map find Time Square",
    tags: ["Miller's Fantasy", "Net"],
    images: ["images/miller/whereistimesquare.jpg"],
  },
  {
    link: "http://www.hifisnockuptown.com",
    title: "Hi Fi Snock Uptown",
    date: "February 2014",
    text: "made the site for this nyc music org",
    tags: ["Net", "Software"],
    images: ["images/hifisnockuptown.jpg"],
  },
  {
    link: "https://raw.github.com/kevin-roark/watchpi/master/samples/square_600_pi.jpg",
    title: "Watch Pi",
    date: "January 2014",
    text: "Turning irrational numbers into irrational images and videos",
    tags: ["Software"],
    images: ["images/watchpi.jpg"],
  },
  {
    link: "cruise",
    title: "Cruise Remix",
    date: "October 2013",
    text: "A remix of a florida georgia line song with video too. Link leads u to a movie theater.",
    tags: ["Video", "Sound"],
    images: ["images/cruise.jpg"],
  },
  {
    link: "http://www.lollaurie.net",
    title: "Laurie",
    date: "December 2013",
    text: "Christmas present for my special and great sister, that is all.",
    tags: ["Net"],
    images: ["images/laurie.jpg"],
  },
  {
    link: "http://pi.porkf.at",
    title: "Look at Pi",
    date: "July 2013",
    text: "Turning irrational numbers into irrational colors.",
    tags: ["Net"],
    images: ["images/lookatpi.jpg"],
  },
  {
    link: "https://www.youtube.com/watch?v=Bl8wKauzzdA",
    title: "Brain Phlem",
    hidden: true,
    date: "Fall 2011",
    text: "This is old and bad I'm sorry for everything about me.",
    images: ["images/brainphlem.jpg"],
  },
];