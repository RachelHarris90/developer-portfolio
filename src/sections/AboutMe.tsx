import { Card } from "../commonComponents/Card";

export const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl pb-4 font-bold">about me.</h1>
      <Card>
        <div>
          <p>
            Greetings! I'm Rachel Harris, your trusty Software Developer based
            in Perth, boasting over a decade of thrilling tech escapades.
            Currently, I'm making waves at Culture Amp, where I'm dedicated to
            infusing our legacy React and Ruby on Rails apps with fresh features
            and ironing out any wrinkles along the way. Oh, and I'm also busy
            crafting new apps to elevate our digital arsenal.
          </p>
          <br />
          <p>
            When I'm not immersed in code, you'll find me diving into
            React/Typescript frontends, tinkering with Ruby on Rails APIs, and
            optimizing our AWS infrastructure. But fear not, I'm not just about
            the tech jargon—I'm all about delivering clean, efficient solutions,
            sprinkled with a touch of automation brilliance. Plus, teamwork
            makes the dream work, so I'm always collaborating with Product
            Managers and Designers to ensure our solutions hit the mark.
          </p>
          <br />
          <p>
            Before my Culture Amp gig, I honed my skills in various roles, from
            Delivery Lead to Product Manager at MYOB. Studying a Bachelor of
            Computer Science, I'm on a mission to prove that software
            development isn't just about lines of code—it's about crafting
            experiences that leave a lasting impression.
          </p>
        </div>
      </Card>
    </>
  );
};
