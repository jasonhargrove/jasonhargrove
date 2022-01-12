
import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.scss';

function Home() {
  const cache_bust = Date.now();
  const [readme_md, set_readme_md] = useState('');

  const get_content = async () => {
    const readme = await fetch('/README.md');
    const text = await readme.text();
    set_readme_md(text);
  };

  get_content();

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
          </figcaption>
        </figure>
        <ReactMarkdown className='jhhc-content'>{readme_md}</ReactMarkdown>
      </div>
      <div className='jhh-ghc'>
        <a href='https://github.com/jasonhargrove'>
          <img src={`/github-contributions-jasonhargrove.png?${cache_bust}`} alt="chart of github contributions by jasonhargrove, shown in a heat map format, with bright colors showing the most contributions. the map shows jason was quite active on GitHub as an engineer since 2016, with a very busy 2018 and 2021" />
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
