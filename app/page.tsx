import ProjectHighlights from "@/components/ProjectHighlights";
import { extlink } from "./util/links";

export default function Home() {
  const links = {
    github: "https://github.com/kevin-roark",
    nets: "https://www.instagram.com/brooklynnets/",
    countryGod:
      "https://open.spotify.com/playlist/1vnpLY6Q13ygwhPPexmeTG?si=32d34b87258f4197",
    metalcoreGod:
      "https://open.spotify.com/playlist/6vh22EQ2wMAkc4pLWyC6NO?si=ac0b0c7d414c49f8",
    aca: "https://adultchildren.org/",
    socketio: "https://github.com/socketio/socket.io",
    cory: "https://coryarcangel.com/",
    clab: "https://computerlab.io/",
    vsco: "https://www.vsco.co/",
    vercel: "https://vercel.com/",
  };

  return (
    <div className="px-8 pb-6 pt-12 md:pt-24 lg:px-24">
      <div className="max-w-full overflow-visible">
        <h1
          className="mb-8 w-[35vw] origin-top-left text-left text-3xl font-bold tracking-wide md:mb-16 md:text-4xl lg:text-6xl"
          style={{ transform: "skew(-2deg, 2deg) scale(2.5, 1)" }}
        >
          Kevin Roark{" "}
          <span className="-ml-2 inline-block text-base lg:-ml-3">Jr</span>
          <div className="text-xl lg:text-3xl">Monastic Website</div>
        </h1>
      </div>

      <div className="flex flex-col items-start gap-8 xl:flex-row-reverse">
        <ProjectHighlights listClassName="max-xl:flex-row max-xl:flex-wrap max-xl:gap-2" />
        <div className="max-w-4xl text-2xl leading-9 [&>p]:mb-4">
          <p>
            I am 31 years old (April 11, 1993) and live in New York City. I am
            from Slidell, LA (swamp between New Orleans and Mississippi). I
            enjoy: playing and thinking about basketball, making photos and
            videos, {extlink(links.github, "designing software")},
            psychoanalysis, research and organizing material,{" "}
            {extlink(links.countryGod, "70s country music")} and{" "}
            {extlink(links.metalcoreGod, "metalcore")}, my bike, reading and
            highlighting the best parts, really good movies, outside and inside
            time, old and new, eating and drinking.
          </p>

          <p>
            I work for the {extlink(links.nets, "Brooklyn Nets")} in the front
            office. My title (made it up):{" "}
            <i>Director of Basketball Systems and Innovation</i>. Our group is
            responsible for putting together the team's roster via the Draft,
            Free Agency, and Trades. I use computer, design, and
            <b> critical thinking</b> skills to enhance and streamline the work
            of everyone else. I like the scope and duration of the problem, and
            basketball too.
          </p>

          <p>
            I have worked on lots of other things too—multimedia software,
            photos, videos, research and archival tools, 3D graphics, websites,
            sound, {extlink(links.socketio, "Advanced JavaScript")}. You can see
            details in the projects page in the navigation links up there. Much
            of it happened prior to my basketball professionaliation, but it
            still comes out in trickles. I have this grand vision of publishing
            collections of links and my writing and photo prints and photo books
            and finishing ongoing videos on here sometime, look out for that.
            Before Basketball, I worked with {extlink(links.vercel, "Vercel")},{" "}
            {extlink(links.cory, "Cory Arcangel")},{" "}
            {extlink(links.vsco, "VSCO")}, {extlink(links.clab, "Computer Lab")}
            , and... others. I studied Computer Science at Columbia and went to
            Slidell High ;p.
          </p>

          <p>
            I love spending time with friends & loved ones. I have three epic
            siblings: Laurie (25), Moses (17), Isabella (15).{" "}
            {extlink(links.aca, "ACA")} meetings really helped me out, I grew up
            in unusual circumstance and had a strange run in my life for a
            while, doing pretty good now. I often go to a meeting on Tuesdays in
            Carroll Gardens, hit me up if you have questions or want to come...
          </p>
        </div>
      </div>
    </div>
  );
}
