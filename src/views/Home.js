import React from 'react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.scss';
import { Photos } from '../features/Photos';
import moment from 'moment';

function ReadmeContent() {
  const [readme_md, set_readme_md] = useState('');
  useEffect(() => {
    const get_content = async () => {
      const readme = await fetch('/README.md');
      const text = await readme.text();
      set_readme_md(text);
    };
    get_content();
  }, []);
  return (
    <ReactMarkdown className='jhhc-readme'>
      {readme_md}
    </ReactMarkdown>
  );
}

function MicroblogContent() {
  const [microblog_items, set_microblog_items] = useState([]);
  useEffect(() => {
    const get_blog = async () => {
      const microblog = await fetch('/microblog.json');
      const { items } = await microblog.json();
      const microblog_items = items.map(x => {
        const date = `${x[0]} GMT-0700 (Pacific Daylight Time)`;
        const date_local = new Date(date);
        return {
          date,
          date_local,
          date_from_now: moment(date_local).fromNow(),
          title: x[1],
          content: x[2]
        };
      });
      console.log(microblog_items);
      set_microblog_items(microblog_items);
    };

    get_blog();
  }, []);

  return (
    <div className='jhhc-microblog'>
      <h3>Status Updates</h3>
      <ul>
        {microblog_items.map((x, i) => {
          return (
            <li key={i}>
              <span>{x.date_from_now}</span>
              {x.content}
            </li>
          );
        })}
      </ul>
      <blockquote>
        <p>
          See <a href="https://github.com/jasonhargrove/jasonhargrove/blob/main/buildlab/lab-l/log.txt">buildlab/lab-l/log.txt</a> for more updates 🌱 📈
        </p>
      </blockquote>
    </div>
  );
}

function Home() {
  return (
    <div className="jh-home">
      <div className="jhh-container">
        <figure>
          <img src="/jasonhargrove-photographer-icon.jpg" alt="PFP of Jason Hargrove holding camera and wearing a tuxedo. highlight color is orange" />
          <figcaption>
            <h1>Jason Hargrove</h1>
            <p>
              <span>GitHub&nbsp;</span>
              <span><a href="https://github.com/jasonhargrove">jasonhargrove</a></span>
            </p>
            <p>
              <span>Twitter&nbsp;</span>
              <span><a href="https://twitter.com/jasonhargrove">jasonhargrove</a></span>
            </p>
            <a href="https://github.com/jasonhargrove/jasonhargrove/blob/main/buildlab/CONTACT.md">
              <img src="/join_strong_team-smart_contracts_defi_social-contact.png" alt="Join a strong team. Product people in Software. Smart contracts, DeFi, Social. Help people and make the world better. See buildlab/contact.md" />
            </a>
            <Photos />
          </figcaption>
        </figure>
        <a href="https://github.com/jasonhargrove/jasonhargrove/blob/main/buildlab/CONTACT.md">
          <img src="/join_strong_team-smart_contracts_defi_social-contact.png" alt="Join a strong team. Product people in Software. Smart contracts, DeFi, Social. Help people and make the world better. See buildlab/contact.md" />
        </a>
        <MicroblogContent />
        <ReadmeContent />
      </div>
      <div className='jhh-ghc'>
        <a href='https://github.com/jasonhargrove'>
          <img src={`/github-contributions-jasonhargrove.png?${Date.now()}`} alt="chart of github contributions by jasonhargrove, shown in a heat map format, with bright colors showing the most contributions. the map shows jason was quite active on GitHub as an engineer since 2016, with a very busy 2018 and 2021" />
        </a>
        <div className='jhhghc-days'>
          <ul>
            <li>Monday</li>
            <li>Wednesday</li>
            <li>Friday</li>
          </ul>
        </div>
      </div>
      <div className='jhh-footer'>
        <img src="/site-header.jpg" alt="banner style graphic that says 'imagine'" />
      </div>
      <p>
        <span>PS, this app is&nbsp;</span>
        <span><a href="https://github.com/jasonhargrove/jasonhargrove">public on GitHub, see how it's made?</a></span>
      </p>
      <p>👋 JH</p>
    </div>
  );
}

export default Home;
