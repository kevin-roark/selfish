import Image from 'next/image'

export default function Home() {
  const styles = {
    description: 'text-2xl mt-8 mb-4'
  }
  
  return (
    <main className="min-h-screen p-24">
      <h1 className="mb-4 text-left text-6xl tracking-wide font-bold origin-top-left" style={{ transform: 'skew(-2deg, 2deg) scale(2.5, 1)' }}>
        Kevin Roark <span className="inline-block text-base">Jr</span>
        <div className="text-3xl">Monastary Website</div>
      </h1>

      <p className={styles.description}>
        I am 30 years old (April 11, 1993) and live in Brooklyn, NY.
        I am from Slidell, LA.
        I enjoy playing basketball, "my little research projects," reading, riding my bike, eating and drinking.
      </p>
      <p className={styles.description}>
        I work for the <a href="https://www.instagram.com/brooklynnets/?hl=en" target="_blank">Brooklyn Nets</a> in the front office.
        My title is funny: Director of Basketball Systems and Innovation.
        Our group is responsible for putting together the team's roster via the Draft, Free Agency, and Trades.
        I use computer, design, and critical thinking skills to enhance and streamline the work of everyone else, like scouts and analysts.
        Mostly it is fun and interesting work. I like the scope and duration of the problem, and I love basketball.
      </p>
      <p className={styles.description}>
        I work on other things too—photographs, videos, websites, "link knots," sounds. You can see details in the projects page below.
        I used to do this stuff way more, but I had some kind of mental breakdown / "the yips" style behavior in the summer of 2017 after
        showing "It's Coming a Storm" at Harvestworks that, upon reflection, was a result of not dealing with a series of personal and
        emotional issues stemming from my _unusual_ childhood. I've been working on those issues recently and am doing much better, but it is a "day at a time."
        I am grateful for all of the love and support in my life. I have been doing my media / research work off-and-on in private since then
        and am going to be sharing it here moving forward.
      </p>
      <p className={styles.description}>
        I am an advocate for <a href="https://adultchildren.org/" target="_blank">Adult Children of Alcoholics / Dysfunctional Families (ACA)</a>.
        I go to a meeting every Tuesday in Carroll Gardens, hit me up if you ever want to come.
        I really love to spend time with my friends. I have three siblings: Laurie (24), Moses (16), Isabella (14). I love them too.
      </p>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
