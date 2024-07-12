import { extlink } from '../util/links'

export interface ProjectData {
  title: string
  date?: string
  sortDate?: string
  text?: string
  content?: React.ReactNode
  link?: string
  slug?: string
  tags?: string[]
  images?: string[]
}

export function processProjectData(data: ProjectData) {
  let sortDate = data.sortDate
  if (!sortDate) {
    const year = Number(data.date?.split(' ')[1])
    sortDate = `${year}-01-01`
  }
  return { ...data, sortDate }
}

export const projects: ProjectData[] = [
  {
    link: 'https://www.instagram.com/wendyswokworld/p/C7uBxCsplBJ',
    title: `Wendy's Wok World Basel Karaoke`,
    date: 'May 2024',
    slug: 'wendy',
    content: (
      <p>
        Custom Karaoke Video Software for {extlink('https://www.instagram.com/wendyswokworld', `Wendy's Wok World's`)}{' '}
        Art Basel (Switzerland...) Parcours Project. Code is{' '}
        {extlink('https://github.com/kevin-roark/wendys-wok-world-karaoke', 'here')}.
      </p>
    ),
    tags: ['Video', 'Software'],
    images: ['images/wendy_karaoke.jpg'],
  },
  {
    link: 'https://www.youtube.com/watch?v=0JXBWYNVnNQ&t=147s',
    title: 'Cajun Hooper EXPLODES From Deep',
    slug: 'cajun-hooper',
    date: 'March 2024',
    text: `Video of first-person basketball with some video glasses I've been experimenting with.`,
    tags: ['Video'],
    images: ['images/cajun_hooper.jpg'],
  },
  {
    link: 'https://tinyurl.com/xkevxnycfood',
    title: `NYC Restaurant "Tool"`,
    date: 'June 2022',
    text: 'A large restaurant database I was experimenting with for a while to learn more about Notion...',
    tags: ['Food', 'Research'],
  },
  {
    link: 'https://coryarcangel.com/things-i-made/2017-006-rodeo-performance',
    title: "/roʊˈdeɪoʊ/ Let's Play: HOLLYWOOD",
    slug: 'rodeo-hollywood',
    date: 'March 2021',
    content: (
      <p>
        Software Art for Cory Arcangel's {extlink('https://coryarcangel.com/shows/century-21', 'Century 21')} show. A
        pretty complex project—AI using computer vision to infinitely play the now-defunct Kim Kardashian: Hollywood
        Android game. Showed at {extlink('https://greenenaftaligallery.com/', 'Greene Naftali Gallery')} in Chelsea.
        More information {extlink('https://coryarcangel.com/things-i-made/2017-006-rodeo-performance', 'here')} and{' '}
        {extlink('https://rodeo.computer', 'here')}. Collaborated with{' '}
        {extlink('https://henryvd.com/', 'Henry Van Dusen')} in a major way on this one. Daniel Lopatin (OPN) made the
        sound, which I thought at one point would really impact my life.
      </p>
    ),
    tags: ['Video', 'Software'],
    images: [
      'images/rodeo_hollywood/rodeo1.jpg',
      'images/rodeo_hollywood/rodeo2.jpg',
      'images/rodeo_hollywood/rodeo3.jpg',
      'images/rodeo_hollywood/rodeo4.jpg',
      'images/rodeo_hollywood/rodeo5.jpg',
      'images/rodeo_hollywood/rodeo6.jpg',
      'images/rodeo_hollywood/rodeo7.jpg',
      'images/rodeo_hollywood/rodeo8.jpg',
      'images/rodeo_hollywood/rodeo9.jpg',
    ],
  },
  {
    link: 'https://mistershane.bandcamp.com/album/lucky',
    title: 'Lucky',
    date: 'April 2018',
    slug: 'lucky',
    content: (
      <p>
        "How could it happen to me?" Mister Shane 4 song EP, 4/20/18. "The Dig" video available{' '}
        {extlink('https://www.youtube.com/watch?v=vRqmYh3MJWI', 'here')}.
      </p>
    ),
    tags: ['Mister Shane', 'Sound'],
    images: ['images/mister-shane-lucky.jpg'],
  },
  {
    link: 'https://artguide.artforum.com',
    title: 'Artforum Artguide',
    slug: 'artguide',
    date: 'December 2017',
    text: 'I redesigned the Artforum Artguide website, a while ago. It is a guide to art events in New York City.',
    tags: ['Website'],
  },
  {
    link: 'http://spaghettis.surge.sh',
    title: "Spaghetti's Supper Club",
    date: 'October 2017',
    text: `Spaghetti's is an Italian-American performance-oriented dinner-and-a-show supper club.`,
    tags: ['Pleasure Seeker', 'Food'],
    images: ['images/spaghettis-spaghetti.jpg'],
  },
  {
    link: 'http://www.itscomingastorm.us',
    title: "It's Coming a Storm",
    slug: 'its-coming-a-storm',
    date: 'June 2017',
    content: (
      <div>
        <p>
          <i>It's Coming a Storm (Praise Receiver)</i> was an attempt to measure the Internet attention received by
          people who have made lives of thriving on it.
        </p>
        <p>
          It was produced for an exhibition at {extlink('http://www.harvestworks.org', 'Harvestworks')} from
          06/22/17-06/25/17. I can't lie the experience of this totally broke me for a while and made me want to stop
          producing things in public. More info{' '}
          {extlink(
            'https://www.harvestworks.org/june-22-25-nyeaf-its-coming-a-storm-an-installation-by-kevin-roark-jr/',
            'here'
          )}
          .
        </p>
        <p>
          It takes the form of two 3D environments. The first contains 8 ogreish politicans and celebrities swinging
          from chains as they accumulate Attention Coins, groan, and swell as the size of their audience ebbs and flows.
          The second (THE ORB) invites participation and manipulates a humanoid body for every Twitter person that signs
          up {extlink('http://orb.itscomingastorm.us/#/register', 'here')}. The energy of the orb is dictated by our
          collective sum of attention received over the past 24 hours. Warning that most laptops may not render these
          videos very well, or they might get really hot.{' '}
        </p>
        <p>
          Sound produced in collaboration with{' '}
          <a href="http://thomasjohnmartinez.com/" target="_blank">
            Tommmy Martinez
          </a>
          . Below are some images of the install / screenshots from the 3D environments.
        </p>
      </div>
    ),
    tags: ['Installation', 'Video', 'Object', '3D', 'Research'],
    images: [
      'images/its-coming-a-storm/storm-1.jpg',
      'images/its-coming-a-storm/storm-2.jpg',
      'images/its-coming-a-storm/storm-3.jpg',
      'images/its-coming-a-storm/storm-4.jpg',
      'images/its-coming-a-storm/storm-5.jpg',
      'images/its-coming-a-storm/storm-6.jpg',
      'images/its-coming-a-storm/storm-7.jpg',
      'images/its-coming-a-storm/storm-8.jpg',
      'images/its-coming-a-storm/storm-9.jpg',
      'images/its-coming-a-storm/storm-10.jpg',
      'images/its-coming-a-storm/storm-11.jpg',
      'images/its-coming-a-storm/storm-12.jpg',
      'images/its-coming-a-storm/storm-13.jpg',
      'images/its-coming-a-storm/storm-14.jpg',
      'images/its-coming-a-storm/storm-15.jpg',
      'images/its-coming-a-storm/storm-16.jpg',
    ],
  },
  {
    link: 'https://historyofthegif.com',
    title: 'History of the GIF | Giphy',
    date: 'June 2017',
    content: (
      <p>
        I designed & developed this site for Giphy (The BigGifWebsite) to celebrate the history of the GIF image format.
        It was shown at the {extlink('https://timeframe.splashthat.com/', 'TIME_FRAME')} exhibition in New York City
        with a bunch of GIF art. Made with guidance of {extlink('https://computerlab.io/', 'Computer Lab')}.
      </p>
    ),
    tags: ['Website', '3D'],
    images: ['images/history-of-the-gif.jpg'],
  },
  {
    link: 'https://www.youtube.com/watch?v=vmHr9dUhclo',
    title: '"Unelected" - Perc (Video)',
    date: 'April 2017',
    sortDate: '2017-04-20',
    content: (
      <div>
        <p>"Unelected" is a track from Perc's 2017 album Bitter Music, released on Perc Trax.</p>
        <p>
          {extlink('https://vimeo.com/fasenfest', 'Bernhard Fasenfest')} and I created a video for the track using
          repetitive flashing and blending of news images from the world events of 2016 and early 2017.
        </p>
        <p>Flashing Images Warning ;p</p>
      </div>
    ),
    tags: ['Video'],
    images: [
      'images/perc-unelected/unelected-1.jpg',
      'images/perc-unelected/unelected-2.jpg',
      'images/perc-unelected/unelected-3.jpg',
      'images/perc-unelected/unelected-4.jpg',
      'images/perc-unelected/unelected-5.jpg',
      'images/perc-unelected/unelected-6.jpg',
      'images/perc-unelected/unelected-7.jpg',
      'images/perc-unelected/unelected-8.jpg',
      'images/perc-unelected/unelected-9.jpg',
      'images/perc-unelected/unelected-10.jpg',
      'images/perc-unelected/unelected-11.jpg',
      'images/perc-unelected/unelected-12.jpg',
      'images/perc-unelected/unelected-13.jpg',
      'images/perc-unelected/unelected-14.jpg',
      'images/perc-unelected/unelected-15.jpg',
      'images/perc-unelected/unelected-16.jpg',
      'images/perc-unelected/unelected-17.jpg',
      'images/perc-unelected/unelected-18.jpg',
      'images/perc-unelected/unelected-19.jpg',
      'images/perc-unelected/unelected-20.jpg',
      'images/perc-unelected/unelected-21.jpg',
    ],
  },
  // {
  //   link: 'https://github.com/kevin-roark/business-bot-friend-helper',
  //   title: 'Business Bot Friend Helper',
  //   date: 'April 2017',
  //   text: 'App to help you get a job by endlessly emailing someone you need to impress until you get the job.',
  //   tags: ['Software'],
  // },
  {
    link: 'https://www.youtube.com/watch?v=LIdULtTrW3c',
    title: '"Falcon Passport" - DIVORCE (Video)',
    date: 'February 2017',
    content: (
      <div>
        <p>DIVORCE released Jet Fuel, their first EP, via NYC's Sweat Equity; it is very good electronic music.</p>
        <p>
          This is a music video for the fourth track of Jet Fuel. A creature learns to fly. I tried to blend real-world
          and digital-world footage in a somewhat fluid way. Really getting deep into the bird world.
        </p>
      </div>
    ),
    tags: ['Video'],
    images: [
      'images/falconpassport/1.jpg',
      'images/falconpassport/2.jpg',
      'images/falconpassport/3.jpg',
      'images/falconpassport/4.jpg',
      'images/falconpassport/5.jpg',
    ],
  },
  // {
  //   link: 'http://www.myworld.click',
  //   title: 'MY WORLD',
  //   date: 'February 2017',
  //   text: 'I made some 3D scans of the people and objects around me in early 2017. This is my collection of those 3D photographs. You can download prints!',
  //   tags: ['3D', 'Net'],
  //   images: ['images/myworld/1.jpg', 'images/myworld/2.jpg', 'images/myworld/3.jpg'],
  // },
  {
    link: 'https://www.youtube.com/watch?v=tuWrmaQmcVo',
    title: 'Simulacrum, Everywhere',
    date: 'February 2017',
    content: (
      <div>
        <p>
          Donald J. Trump State Park" is a 436-acre undeveloped plot of land in Putnam County, New York. It was called a
          state park from 2006 until 2010, when the state abandoned it because of budget cuts. It has rested unused for
          seven years, wasted.
        </p>
        <p>
          On January 20th 2017 I brought a 55-gallon steel drum into the former park and a bag of shredded $10,000. I
          poured the money into the barrel and I played with it. I held the money in my hands and I threw it in the air
          and back down into the barrel. I lit the money on fire but I became afraid, the sight of burning money made my
          stomach churn. I poured a gallon of spring water from a plastic jug onto the pile of burning money to
          extinguish the flames. I held the burnt damp money in my hands, towards the sky. I carried the barrel out of
          the wasteland and went home.
        </p>
      </div>
    ),
    tags: ['Video', 'Performance'],
    images: ['images/simulacrum/1.jpg', 'images/simulacrum/2.jpg', 'images/simulacrum/3.jpg'],
  },
  // {
  //   link: 'http://joebucciero.website/index.php/art/popular-mechanics/',
  //   title: 'Popular Mechanics / Worse Than Lepers',
  //   date: 'February 2017',
  //   text: "Two videos made with Joe Bucciero about populism and nostalgia. Showing as part of We Need to Talk at Petzel Gallery in Chelsea. You can read more about them on Joe's site.",
  //   tags: ['Video'],
  //   images: ['images/popularmechanics.jpg', 'images/worsethanlepers.jpg'],
  // },
  // {
  //   link: 'http://www.breadandmeats.com/',
  //   title: 'Joyce Kim Website',
  //   date: 'January 2017',
  //   text: "Portfolio website for graphic designer Joyce Kim. She's really good and it has flames!!!",
  //   tags: ['Net', 'Money'],
  //   images: ['images/joycekim.jpg'],
  // },
  // {
  //   link: 'https://github.com/kevin-roark/rigid-envelope',
  //   title: 'Rigid Envelope',
  //   date: 'January 2017',
  //   text: `
  //     I made a Mac application that periodically checks my email and downloads 3D scans that I make onto my computer.
  //     This would not be very helpful for you, but if you find yourself doing repetitive email work and want me to
  //     make you a tool I will do that!!
  //     `,
  //   tags: ['Software'],
  // },
  {
    link: '/bird-sculpture',
    title: 'Bird Sculpture (FREEDOM)',
    date: 'December 2016',
    text: 'Multimedia installation about birds, guilt, replication, and abstraction.',
    tags: ['Object', '3D', 'Video', 'Installation'],
    images: ['images/birdsculpture.jpg'],
  },
  {
    link: 'http://gruen.kevinroark.com',
    title: 'Gruen (NAME ON THE FRONT PAGE)',
    date: 'December 2016',
    text: 'Infinitely-growing black pillars in a black box lit by red and blue. Made for projection at a Cyberpunk Event...',
    tags: ['Pleasure Seeker', '3D', 'Sound', 'Website'],
    images: ['images/gruen.jpg'],
  },
  {
    link: '/freelance',
    title: 'FREELANCE',
    date: 'Novemeber 2016',
    text: 'Stream of photos from VIVITAR FREELANCE digital cam.',
    tags: ['Photo'],
    // listStyle: 'letter-spacing: 5px; text-shadow: 5px 5px 1px rgba(0,0,0,0.5);',
    images: [
      'freelance-images/381.jpg',
      'freelance-images/327.jpg',
      'freelance-images/253.jpg',
      'freelance-images/274.jpg',
    ],
  },
  {
    link: 'https://www.youtube.com/watch?v=8gQ4cEM1ONA',
    title: '"True" (ft. Maria Ivanova) - Broken Spear (Video)',
    date: 'November 2016',
    text: 'Music video for the single "True" from the Broken Spear album True. Lots of Pensacola Beach Wedding Footage.',
    tags: ['Video'],
    images: ['images/true/1.jpg', 'images/true/2.jpg', 'images/true/3.jpg', 'images/true/4.jpg', 'images/true/5.jpg'],
  },
  // {
  //   link: 'https://docs.google.com/document/d/1wBPhVi4UxxUtJffNkEdAA2Ia_qTqak4BC-45saYhX9E/edit?usp=sharing',
  //   title: 'Curtain State',
  //   date: 'November 2016',
  //   text: 'Here are some thoughts about the bad election in relation to reality tv, mass media, and self-representation. Helpful for me to process hope it can be helpful to others.',
  //   tags: ['Text'],
  //   listStyle: 'background: #f00;',
  // },
  {
    link: '/from-tony-rontinos',
    title: "From Tony Rontino's",
    slug: 'from-tony-rontinos',
    date: 'November 2016',
    text: "LIVE ALBUM RECORDED FROM TONY RONTINO'S ITALIAN RESTAURANT IN WEST CHESTER - Italian Food.",
    tags: ['Pleasure Seeker', 'Sound', 'Video'],
    images: ['images/fromtonyrontinos.jpg'],
  },
  // {
  //   link: 'https://vsco.co',
  //   title: 'VSCO Discover Homepage',
  //   text: 'Programmed the new VSCO website it is all black and has countdowns... pretty sick.',
  //   date: 'November 2016',
  //   images: ['images/vscohomepage.jpg'],
  //   tags: ['Website'],
  // },
  {
    link: 'http://www.mistershane.com/lemonade-performance',
    title: 'Lemonade Performance',
    date: 'October 2016',
    text: 'Mister Shane is selling the performance of the sale of a glass of lemonade for $1,000.',
    tags: ['Mister Shane', 'Performance', 'Video'],
    images: ['images/lemonadeperformance.jpg'],
  },
  {
    link: 'http://www.sweetnothings.online',
    title: 'SWEET NOTHINGS — BDSMR (Website and Videos)',
    date: 'October 2016',
    text: 'BDSMR is a really good minimal electronic album by SWEET NOTHINGS. I did not make the music, but I made the website, some photos, two videos (ETERNITY and ZODIAC) and the album art (with help!). Click it!!',
    tags: ['Website', 'Video'],
    images: ['images/bdsmr.jpg'],
  },
  {
    link: '/the-watcher',
    title: 'THE WATCHER',
    date: 'October 2016',
    text: 'THE WATCHER is a film about watching. It is a concatenation of a lot of footage of watching. Watch THE WATCHER.',
    tags: ['Video'],
    images: ['images/thewatcher.jpg'],
  },
  {
    link: 'https://www.youtube.com/watch?v=k-9ZI4bmx4I',
    title: 'I Say Nothing',
    date: 'October 2016',
    text: 'Video. Power of Refusal. Apprenticeship.',
    tags: ['Mister Shane', 'Video', 'Sound'],
    images: ['images/isaynothing.jpg'],
  },
  {
    link: 'https://pleasureseeker.bandcamp.com/album/clap',
    title: 'CLAP',
    slug: 'clap',
    date: 'October 2016',
    text: 'Music tracks made from clap sounds. Mainly the 808 clap sound, the cheap toy one not the real one. I learned that when it was too late. Every sound is a clap. Please clap.',
    tags: ['Pleasure Seeker', 'Sound'],
    images: ['images/clap.jpg'],
  },
  {
    link: 'https://kevinroark.itch.io/luddy',
    title: 'Luddy',
    date: 'October 2016',
    text: 'Luddy put me on his list. A compilation of financial tech recruiting email correspondence that took place over the course of 20 months followed by a devolving sequence of collage-accompanied reflections. I have a small run of printed copies available, please contact me to obtain one :).',
    tags: ['Text'],
    images: ['images/luddy.jpg'],
  },
  {
    link: 'https://www.youtube.com/playlist?list=PL9j8JGV9mSa3f-ZuOOtfgS96hzsvkIbqB',
    title: 'There It Is',
    date: 'October 2016',
    text: 'A 32 epsiode cooking and lifestyle series performed by "Kev." "What\'s new with you?" "I\'ve been cooking a lot recently." "Oh."',
    tags: ['Video', 'Performance'],
    images: ['images/thereitis.jpg'],
  },
  {
    link: 'https://www.youtube.com/playlist?list=PL9j8JGV9mSa3Ltz47vMXom2EpK1HJ958b',
    title: 'Here I Am',
    date: 'October 2016',
    text: 'A 28 epsiode series of instructional yoga videos performed by "Kev." I did the same thing every day but I did not improve.',
    tags: ['Video', 'Performance'],
    images: ['images/hereiam.jpg'],
  },
  {
    link: 'https://www.youtube.com/watch?v=FcCluBBaz8A',
    title: "These Are The 50 Facts You Didn't Know About Stranger Things",
    date: 'September 2016',
    text: 'Mister Shane researched 50 amazing facts about the hit TV series Stranger Things.',
    tags: ['Mister Shane', 'Video'],
    images: ['images/strangerthings.jpg'],
  },
  {
    link: 'http://www.mistershane.com/woody',
    title: 'Woody',
    date: 'September 2016 - January 2017',
    text: 'Mister Shane made a Woody mask.',
    tags: ['Mister Shane', 'Video'],
    images: ['images/woody.jpg'],
  },
  {
    link: 'https://kevinroark.itch.io/daddy',
    title: "Daddy's Essays Complete Edition",
    date: 'September 2016',
    text: 'I put all of the essays about past that I wrote in the Spring of 2016 in a book, with some photos taken by my mom and myself.',
    tags: ['Money', 'Text'],
    images: ['images/daddy_essays_complete.jpg'],
  },
  {
    link: '/manikin',
    title: 'Manikin',
    date: 'September 2016',
    text: 'Text and Image collection made through a window',
    tags: ['Photo', 'Text'],
    images: ['images/manikin.jpg'],
  },
  // {
  //   link: 'https://kevinroark.itch.io/the-rock-and-the-rock',
  //   title: 'The Rock and The Rock',
  //   date: 'August 2016',
  //   text: 'A small baby game / film about the inevitable and natural attraction of two rocks to one another. It is set in the desert. Rock on.',
  //   tags: ['Money', 'Game', '3D'],
  //   images: ['images/therockandtherock.jpg'],
  // },
  // {
  //   link: 'http://max.carmichael.xyz/',
  //   title: 'MAX AND ROLL',
  //   date: 'July 2016',
  //   text: "Carmichael's first album. Not just an album, a Visual Software Classic Rock MIDI Album incorporating videos of friend Max playing the piano. In 3D and 2D!!! All D.",
  //   tags: ['Payamps', '3D', 'Net', 'Sound'],
  //   images: ['images/maxandroll.jpg'],
  // },
  {
    link: 'http://johnny.kevinroark.com',
    title: 'Johnny Football',
    date: 'June 2016',
    text: 'I hope Johnny goes to jail <i>music</i>. I hope my son goes to jail <i>music</i>. I hope my dad goes to jail <i>music</i>.',
    tags: ['Pleasure Seeker', 'Sound', 'Website'],
    images: ['images/johnnyfootball.jpg'],
  },
  {
    link: 'https://www.youtube.com/watch?v=gruumgDfOEs',
    title: 'My Bad Video',
    date: 'June 2016',
    text: 'Video for the Dog Shadow track. I took off my shirt again.',
    tags: ['Dog Shadow', 'Video', 'Sound'],
    images: ['images/mybad.jpg'],
  },
  {
    link: 'http://www.f-a-c-e.press',
    title: 'FACE TIME',
    date: 'June 2016',
    text: 'Facial Aspect Character Emulator with Timed Intuitive Muscular Expression. A realtime facial distortion suite. Make a better face and print it out and paste it on your skin.',
    tags: ['Payamps', '3D', 'Software'],
    images: ['images/facetime.jpg'],
  },
  {
    link: 'https://nextjs.org/',
    title: 'Next.js (Very Early Days)',
    slug: 'nextjs',
    date: 'June 2016',
    content: (
      <p>
        I worked under {extlink('https://x.com/rauchg', 'Guillermo Rauch')} for Vercel (then called Zeit) on some very
        early versions of the React framework now known as Next.js. Generally I have learned so much from him and am
        grateful for his guidance!
      </p>
    ),
    tags: ['Software'],
  },
  {
    link: 'https://www.youtube.com/watch?v=VGzTPTxfQ1U',
    title: 'Wasted Years Video',
    date: 'May 2016',
    text: 'Video for the Dog Shadow track. Footage from an urban domestic dog park in downtown New York City.',
    tags: ['Dog Shadow', 'Video'],
    images: ['images/wastedyears.jpg'],
  },
  {
    link: 'https://dogshadow.bandcamp.com/album/dog-years',
    title: 'Dog Years',
    date: 'May 2016',
    text: 'An album of Hard Emotional Tracks divided into three thematic acts: you can hear the pride!! Swelling! Big bunch of ideas in this one. Listen to "Inside Man" and "Cut It Off."',
    tags: ['Dog Shadow', 'Sound'],
    images: ['images/dogyears.jpg'],
  },
  {
    link: 'http://www.hdsllc.website',
    title: 'HDS VOL. 1',
    date: 'May 2016',
    text: "A data-object media compilation on which a lot of my and friends' recent projects/work/data was released! You can purchase HDS Vol. 1 at www.hdsllc.website. Please do it and support friends and lovers everywhere!!",
    tags: ['Object'],
    images: ['images/hdsvol1.jpg'],
  },
  {
    link: 'http://atsea.mistershane.com/',
    title: 'At Sea',
    date: 'May 2016',
    text: "Mister Shane went on a Carnival cruise from New Orleans to Mexico. This is a multimedia collection made of music and photos from that journey. A journey at sea. Every sound is either a field recording from the ship or Shane's voice. He went on vacation. He got what he wanted. He found it.",
    tags: ['Mister Shane', 'Sound', 'Photo'],
    images: ['images/atsea.jpg'],
  },
  {
    link: 'https://pleasureseeker.bandcamp.com/album/love-songs/',
    title: 'Love Songs',
    date: 'May 2016',
    text: 'A set of 32 of the Greatest Pop Love Songs Of All Time that I compiled and recorded renditions of with the aid of YouTube lyrics videos. An <em>icy-hot</em> profession of love and pain.',
    tags: ['Pleasure Seeker', 'Sound', 'Performance'],
    images: ['images/pleasureseekerlovesongs.jpg'],
  },
  {
    link: 'https://github.com/kevin-roark/midi-timing',
    title: 'midi-timing',
    date: 'May 2016',
    text: 'A small utility to convert MIDI files (.mid) to an easy-to-read JSON structure of offset times and durations',
    tags: ['Software'],
  },
  {
    link: 'http://sol.carmichael.xyz/',
    title: 'Second Round Square Solo',
    date: 'May 2016',
    text: "A video permutation series where 13 poems, ascending from in length from three to fifteen lines, are mechanically read in every possible permutated line-order. It's Very Cool&trade;.",
    tags: ['Payamps', 'Video', 'Software'],
    images: ['images/secondroundsquaresolo.jpg'],
  },
  // {
  //   link: 'http://www.pith.space',
  //   title: 'Pith Website',
  //   date: 'May 2016',
  //   text: 'I programmed a tiny site for chef Jonah Reider.',
  //   images: ['images/pith.jpg'],
  //   tags: ['Money', 'Net'],
  // },
  {
    link: 'https://vsco.co',
    title: 'VSCO App',
    slug: 'vsco',
    text: 'My first job in software was for the photo app VSCO, where I worked on the iOS app and some backend machine learning software. They were very great.',
    images: ['images/vscoapp.jpg'],
    tags: ['Software', 'Photo'],
    date: 'June 2014 - April 2016',
  },
  {
    link: 'http://birdhouse.kevinroark.com',
    title: 'Birdhouse Formal Wall Projection',
    date: 'April 2016',
    text: 'NYC Fraternity big birdhouse themed party commissioned request for video project with no reference to birds so I referenced construction because it is through architecture through which we humans fly.',
    tags: ['Video', 'Installation'],
    images: ['images/birdhouse.jpg'],
  },
  // {
  //   link: 'http://www.colors.black/deduction/',
  //   title: 'Chromatic Deduction',
  //   date: 'April 2016',
  //   text: 'A series of films that were broken down into frames and rearranged temporally with various color-sorting techniques into ColorTime.',
  //   tags: ['Payamps', 'Video', 'Software'],
  //   images: ['images/chromaticdeduction.jpg'],
  // },
  // {
  //   link: 'http://www.carmichael.xyz/multiplex/',
  //   title: 'Multiplex Cinema',
  //   date: 'March 2016',
  //   text: 'Task-oriented parallel films rearranged from A1A2A3B1B2B3C1C2C3 to A1B1C1A2B2C2A3B3C3 for achievement pleasure.',
  //   tags: ['Payamps', 'Video', 'Software'],
  //   images: ['images/cinemamultiplex.jpg'],
  // },
  {
    link: 'http://www.colors.black/reduction/',
    title: 'Chromatic Reduction',
    date: 'March 2016',
    text: 'A rainbow spectrum of films where each frame is reduced to its most relevant color and rendered into an ABSTRACT COLORSTREAM. Recommended: Minions.',
    tags: ['Payamps', 'Video', 'Software'],
    images: ['images/chromaticreduction.jpg'],
  },
  // {
  //   link: 'http://www.fffight.site/',
  //   title: 'fffight.site',
  //   date: 'March 2016',
  //   text: 'Grotesque live-composed permutations of all possibilities hinted at by Bourne rebourne. The ultimate action movie site.',
  //   tags: ['Payamps', 'Video', 'Software'],
  //   images: ['images/fffightsite.jpg'],
  // },
  // {
  //   link: 'http://www.carmichael.xyz/rebourne',
  //   title: 'Bourne rebourne',
  //   date: 'March 2016',
  //   text: 'Frankensteinien reconstruction of shots from the <em>Bourne</em> series that amplify what we wanted.',
  //   tags: ['Payamps', 'Video'],
  //   images: ['images/bournerebourne.jpg'],
  // },
  {
    link: 'http://www.lifeislife.xyz',
    title: 'Life in Review',
    date: 'March 2016',
    text: "A stream of Facebook's emotive digital memories flashes before your physical eyes.",
    tags: ['Payamps', 'Website'],
    images: ['images/lifeinreview.jpg'],
  },
  {
    link: 'https://github.com/kevin-roark/frampton',
    title: 'Frampton',
    date: 'February 2016 - April 2016',
    text: 'A suite of isomorphic-ish algorithmic video composition tools.',
    tags: ['Software'],
  },
  {
    link: 'http://www.feud.online/',
    title: 'feud.online',
    date: 'February 2016',
    text: "A series of endless films about family and spectacle featuring delicate clips from TV's Family Feud.",
    tags: ['Payamps', 'Video', 'Website'],
    images: ['images/feudonline.jpg'],
  },
  {
    link: 'https://dogshadow.bandcamp.com/',
    title: 'Faithful Companion',
    date: 'December 2015',
    text: 'The first music release from Dog Shadow, featuring blasted electronic emotional dog sounds.',
    tags: ['Dog Shadow', 'Sound'],
    images: ['images/faithfulcompanion.jpg'],
  },
  {
    link: 'http://second.mistershane.com/',
    title: 'Second Shane',
    slug: 'second-shane',
    date: 'December 2015',
    text: 'A complex and growing interactive world unified by consistent themes both contemporary + eternal. Please explore and see what you can find...',
    tags: ['Mister Shane', '3D', 'Software', 'Sound'],
    images: ['images/secondshane.jpg'],
  },
  {
    link: 'https://www.mistershane.com/blog/',
    title: "Mister Shane's Thought Blog",
    slug: 'mister-shane-thought-blog',
    date: 'December 2015',
    text: "Mister Shane's musings on life, career, family.",
    tags: ['Mister Shane', 'Text'],
  },
  {
    link: 'http://www.gods.website/',
    title: "God's Website",
    date: 'December 2015',
    text: 'Helps us track what we say about God, right now. Good or bad? Is it two-way?',
    tags: ['Payamps', 'Website'],
    images: ['images/godswebsite.jpg'],
  },
  {
    link: 'https://vimeo.com/145527109',
    title: '30 Pushups By Myself',
    date: 'November 2015',
    text: '9 hours of accumulated clerical mistakes. Work and Work and Work and this is what I get. 11 minute video.',
    tags: ['Video'],
    images: ['images/30pushupsbymyself.jpg'],
  },
  // {
  //   link: 'http://www.rainonme.xyz/',
  //   title: 'Rain in a Room',
  //   date: 'November 2015',
  //   text: 'Let the Wet wash over You. Water falls all around you yet you never wet yourself, then witness a flood of others experiencing the Rain Room artwork. 20 minutes recommended.',
  //   tags: ['Payamps', '3D', 'Net'],
  //   images: ['images/raininaroom.jpg'],
  // },
  {
    link: 'http://www.davidzwirnher.com/',
    title: 'David Zwirnher Online',
    date: 'October 2015',
    text: 'Fall through the Hole. Easy and Quick and at Home. Rapid View all the Art ever exhibited at the David Zwirnher New York City Art Gallery. 15 minutes recommended.',
    tags: ['Payamps', '3D', 'Website'],
    images: ['images/dzonline.jpg'],
  },
  {
    link: 'http://www.onetool.website/',
    title: 'And Rakes To Spread The Haul',
    date: 'August 2015',
    text: 'A collection of poems hailing the One Man One Tool One Purpose ideology. Please contact me to obtain a physical book.',
    tags: ['Text', 'Object', 'Website'],
    images: ['images/andrakes.jpg'],
  },
  // {
  //   link: 'http://lovepoem.kevinroark.com/',
  //   title: '[Love Poem]',
  //   date: 'August 2015',
  //   text: 'I made gold from a Richard Brautigan poem',
  //   tags: ['Text', '3D'],
  //   images: ['images/lovepoem.jpg'],
  // },
  // {
  //   link: 'https://github.com/kevin-roark/sheen',
  //   title: 'Sheen',
  //   date: 'August 2015',
  //   text: "A small extension of THREE.js with helpful starter pack for my own projects. You are welcome to use it. You also don't have to.",
  //   tags: ['Software'],
  //   images: ['images/sheen.jpg'],
  // },
  {
    link: 'http://www.newplanet.website/',
    title: 'New Snock Planet',
    date: 'July 2015',
    text: 'A persistent new world, boiling the essence, becoming. Chat and interact with others and me.',
    tags: ['3D', 'Website'],
    images: ['images/snockplanet.jpg'],
  },
  // {
  //   link: 'film/june15',
  //   title: 'June 2015 Photos',
  //   date: 'June 2015',
  //   text: '35mm photos of motorcycles, luxury, water, florida.',
  //   tags: ['Photo'],
  //   images: ['images/june15-1.jpg'],
  // },
  // {
  //   link: 'http://www.luminal.space/',
  //   title: 'Luminal.space',
  //   date: 'April 2015',
  //   text: "An installation on Columbia's Low Steps; long-term project made with many people more talented than me. Click for info.",
  //   tags: ['Object', 'Installation'],
  //   images: ['images/luminal.jpg'],
  // },
  {
    title: 'Job Fair',
    date: 'March 2015',
    text: 'Simulation of a startup job fair / earn and prove your worth',
    tags: ['Tony Tonehole', 'Performance', 'Sound', '3D'],
    images: ['images/tony/jobfair.jpg'],
  },
  {
    link: 'http://heaven.mistershane.com',
    title: "Shane's Tweet Heaven",
    date: 'February 2015',
    text: 'Explore your twitter self with a museum made just for u',
    tags: ['Mister Shane', 'Text', '3D', 'Sound', 'Software'],
    images: ['images/shane/heaven.jpg'],
  },
  {
    title: 'Ronald',
    date: 'December 2014',
    text: "He just can't seem to get outside of that computer trash can. Help him.",
    tags: ['Tony Tonehole', 'Performance', 'Sound', '3D'],
    images: ['images/tony/ronald.jpg'],
  },
  // {
  //   link: 'http://www.9857188538.website/',
  //   title: '(985) 718-8538',
  //   date: 'November 2014',
  //   text: 'Translation of phone words to phone sounds using DTMF tones',
  //   tags: ['Text', 'Website', 'Sound'],
  //   images: ['images/9857188538.jpg'],
  // },
  {
    title: 'Strength.js',
    date: 'October 2014',
    text: 'Tech Masculinity / Wrestling Dylan with Kinect puppets',
    tags: ['Tony Tonehole', 'Performance', 'Sound', '3D'],
    images: ['images/tony/strengthjs.jpg'],
  },
  {
    link: 'http://benkogan.github.io/corpse/',
    title: 'Corpse',
    date: 'October 2014',
    text: "Computer corpse for Postcrypt's Exquisite Corpse show. Made w/ Ben, Dylan, Henry. I did the foot.",
    tags: ['Software'],
    images: ['images/corpse.jpg'],
  },
  // {
  //   link: 'http://wayne.kevinroark.com',
  //   title: 'Wayne',
  //   date: 'October 2014',
  //   text: 'A wayne model that grows sicker and sadder with you',
  //   tags: ['3D', 'Net'],
  //   images: ['images/wayne.jpg'],
  // },
  {
    link: 'http://www.mistershane.com',
    title: 'Content: Volume 1',
    slug: 'content-volume-one',
    date: 'May 2014',
    text: 'First collection of tracks from Mister Shane, experimental audiovisual project from Sean and Kev.',
    tags: ['Mister Shane', 'Sound', 'Video', 'Software'],
    images: [
      'images/shane/laborpain.jpg',
      'images/shane/osteen.jpg',
      'images/shane/pig.jpg',
      'images/shane/birthday.jpg',
      'images/shane/eat.jpg',
    ],
  },
  // {
  //   link: 'http://journey.kevinroark.com',
  //   title: '(Pork) Journey',
  //   date: 'June 2014',
  //   text: 'Play through the inevitable fate of a space-pig: The Journey To Pork',
  //   tags: ['Game'],
  //   images: ['images/porkjourney.jpg'],
  // },
  // {
  //   link: 'https://github.com/kevin-roark/dummy-meat-timer',
  //   title: 'dummy-meat-timer',
  //   date: 'June 2014',
  //   tags: ['Software'],
  //   text: 'A simple HTML tool for timing a sequence of events. I used it to record ticks of when each word in the song "With Arms Wide Open" occurs :).',
  // },
  {
    link: 'http://www.wideopenwitharms.com',
    title: 'Wide Open With Arms',
    date: 'June 2014',
    text: 'Creed Music Video',
    tags: ['Video'],
    images: ['images/wideopenwitharms.jpg'],
  },
  // {
  //   link: 'http://kevin-roark.github.io/arthur',
  //   title: 'arthur',
  //   date: 'Spring 2014',
  //   text: 'A programming language made for manipulating and combining various media styles. made it for a class with melody sahil henry dylan. check the examples.',
  //   images: ['images/arthur.jpg'],
  //   tags: ['Software'],
  // },
  {
    link: 'http://socket.computer/',
    title: 'Socket.IO Computer',
    date: 'May 2014',
    content: (
      <p>
        A collaborative windows xp emulator that runs in browser, powered by 100% JavaScript and{' '}
        {extlink('https://socket.io/', 'Socket.IO 1.0')}, made with {extlink('https://x.com/rauchg', 'Guillermo Rauch')}
        .
      </p>
    ),
    images: ['images/socketcomputer.jpg'],
    tags: ['Software'],
  },
  {
    link: 'http://sxecop.bandcamp.com',
    title: 'Straightedge Cop 2014 Demo',
    date: 'May 2014',
    text: 'Hardcore straightedge sermon music. First small demo lol its coming back one day',
    tags: ['Sound'],
    images: ['images/sxecop.jpg'],
  },
  {
    link: 'https://socket.io',
    title: 'Socket.IO 1.0',
    slug: 'socketio',
    date: 'April 2014',
    content: (
      <p>
        I worked under {extlink('https://x.com/rauchg', 'Guillermo Rauch')}, my Open Source Mentor, on developing
        version 1.0 of Socket.IO, the best bidirectional realtime JavaScript communication library 2014 could dream of!
      </p>
    ),
    tags: ['Software'],
  },
  // {
  //   link: 'http://www.lonelytrash.me',
  //   title: 'Lonely Trash',
  //   date: 'May 2014',
  //   text: 'Small walking exploration, three minutes to win in this world of my trash, trash from me',
  //   tags: ['Game', 'Photo'],
  //   images: ['images/lonelytrash.jpg'],
  // },
  // {
  //   link: 'http://www.millersfantasy.com/',
  //   title: 'yellin',
  //   date: 'April 2014',
  //   text: "An iOS application. Send sound at miller's fantasy founders. We send it back",
  //   tags: ["Miller's Fantasy", 'Software', 'Sound'],
  //   images: ['images/miller/yellin.jpg'],
  // },
  // {
  //   link: 'film/textures/',
  //   title: 'Textures',
  //   date: 'Spring 2014',
  //   text: 'natural patterns',
  //   tags: ['Photo'],
  //   images: ['images/textures.jpg'],
  // },
  // {
  //   link: 'film/mouths/',
  //   title: 'Mouths',
  //   date: 'Spring 2014',
  //   text: 'eat through the hole',
  //   tags: ['Photo'],
  //   images: ['images/mouths.jpg'],
  // },
  // {
  //   link: 'http://adhoc.fm',
  //   title: 'AdHoc',
  //   date: 'Spring 2014',
  //   text: 'I did internet work for this diy music publication / show-booker a+',
  //   tags: ['Net', 'Money'],
  //   images: ['images/adhoc.jpg'],
  // },
  // {
  // link: 'http://www.weplay.io',
  //   title: 'Weplay',
  //   date: 'March 2014',
  //   content: (
  //     <p>
  //       A 100% JavaScript collaborative gameboy player w/ {extlink('https://socket.io/', 'Socket.IO 1.0')}, made with{' '}
  //       {extlink('https://x.com/rauchg', 'Guillermo Rauch')}) and Tony K. The code and URL have been lost to time but it
  //       was sick.
  //     </p>
  //   ),
  //   images: ['images/weplay.jpg'],
  //   tags: ['Software'],
  // },
  // {
  //   link: 'http://www.specialmagicglasshole.com',
  //   title: 'Special Magic Glass Hole',
  //   date: 'March 2014',
  //   text: 'A realtime hole through which all are seen and can Share',
  //   tags: ['Net'],
  //   images: ['images/specialmagicglasshole.jpg'],
  // },
  // {
  //   link: 'http://www.specialmagicyellingroom.com',
  //   title: 'Special Magic Yelling Room',
  //   date: 'March 2014',
  //   text: 'A realtime Ear Bucket where everyone is Heard at once',
  //   tags: ['Net'],
  //   images: ['images/specialmagicyellingroom.jpg'],
  // },
  // {
  //   link: 'http://www.networkforu.com/',
  //   title: 'Network Style',
  //   date: 'March 2014',
  //   text: 'A seminar on Best Business Practices and learning Trade Secrets',
  //   tags: ["Miller's Fantasy", 'Net'],
  //   images: ['images/miller/networkstyle.jpg'],
  // },
  // {
  //   link: 'http://www.diningatcu.com/',
  //   title: 'Dining@CU',
  //   date: 'March 2014',
  //   text: 'Dining menu application to discover dining hall menus',
  //   tags: ["Miller's Fantasy", 'Net'],
  //   images: ['images/miller/diningatcu.jpg'],
  // },
  // {
  //   link: 'http://www.whereistimesquare.com/',
  //   title: "Miller's Fantasy: WHERE IS TIME SQUARE?",
  //   date: 'February 2014',
  //   text: 'Map finding application to map find Time Square',
  //   tags: ['Website'],
  //   images: ['images/miller/whereistimesquare.jpg'],
  // },
  // {
  //   link: 'http://www.hifisnockuptown.com',
  //   title: 'Hi Fi Snock Uptown',
  //   date: 'February 2014',
  //   text: 'made the site for this nyc music org',
  //   tags: ['Net', 'Software'],
  //   images: ['images/hifisnockuptown.jpg'],
  // },
  // {
  //   link: 'https://raw.github.com/kevin-roark/watchpi/master/samples/square_600_pi.jpg',
  //   title: 'Watch Pi',
  //   date: 'January 2014',
  //   text: 'Turning irrational numbers into irrational images and videos',
  //   tags: ['Software'],
  //   images: ['images/watchpi.jpg'],
  // },
  {
    link: 'http://wbar.org',
    title: 'WBAR',
    date: 'Fall 2013',
    text: 'I made the old website for the best nyc freeform college radio station in the world.',
    images: ['images/wbar.jpg'],
    tags: ['Website'],
  },
  {
    link: 'cruise',
    title: 'Cruise Remix',
    date: 'October 2013',
    text: 'A remix of a florida georgia line song with video too.',
    tags: ['Video', 'Sound'],
    images: ['images/cruise.jpg'],
  },
  {
    link: 'https://www.nasa.gov/stennis/',
    title: 'NASA Stennis Space Center Oceanography Apprencticeship',
    slug: 'nasa',
    date: 'Summer 2010',
    text: 'An amazing man named Kemal taught me how to do research and program computers when I was in high school. We did research on the Turkish Straights. I played basketball against the rocket scientists every day at lunch in the Mississippi Heat.',
    tags: ['Research'],
  },
  // {
  //   link: 'http://www.lollaurie.net',
  //   title: 'Laurie',
  //   date: 'December 2013',
  //   text: 'Christmas present for my special and great sister, that is all.',
  //   tags: ['Net'],
  //   images: ['images/laurie.jpg'],
  // },
  // {
  //   link: 'http://pi.kevinroark.com',
  //   title: 'Look at Pi',
  //   date: 'July 2013',
  //   text: 'Turning irrational numbers into irrational colors.',
  //   tags: ['Net'],
  //   images: ['images/lookatpi.jpg'],
  // },
  // {
  //   link: 'https://www.youtube.com/watch?v=Bl8wKauzzdA',
  //   title: 'Brain Phlem',
  //   date: 'Fall 2011',
  //   text: "This is old and bad I'm sorry for everything about me.",
  //   images: ['images/brainphlem.jpg'],
  // },
]
