import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/erotiq-skroll">
            <a>Erotiq Skroll</a>
          </Link>
        </li>
        <li>
          <Link href="/lab-study">
            <a>Lab Study</a>
          </Link>
        </li>
        <li>
          <Link href="/porn-studies">
            <a>Porn Studies</a>
          </Link>
        </li>
        <li>
          <Link href="/research-request">
            <a>Research Request</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/signup-login">
            <a>SignUp/Login</a>
          </Link>
        </li>
        <li>
          <Link href="/donation">
            <a>Donate</a>
          </Link>
        </li>
        {/* Repeat this pattern for all your navigation links */}
      </ul>
    </nav>
  );
};

export default Navigation;
