import * as React from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'lodash';

import './logoContainer.scss';

interface Props {
    style: string;
}

const removeMenuStyle = (event) => {
    const nav = document.getElementsByClassName('mdl-layout__tab');
    filter(nav, (el) => el.classList.remove('active'));

    const navMobile = document.getElementsByClassName('mdl-navigation__link');
    filter(navMobile, (el) => el.classList.remove('active'));

    const ele2 = document.getElementById('menuMobile');
    ele2.setAttribute('aria-hidden', 'true')
    ele2.classList.remove('is-visible')

    const ele3 = document.getElementsByClassName('mdl-layout__obfuscator is-visible')
    ele3.length != 0 ? ele3[0].classList.remove('is-visible') : ele3;

    const header = document.getElementById('header');
    header.classList.remove('is-casting-shadow');
    document.querySelector(`#portfolio-body`).scrollTo(0, 0);
}

const keepLogoFormat = (event) => {
    const header = document.getElementById('header');
    const classList = header.classList;
    const isCompact = classList.contains('is-casting-shadow')
    if (isCompact) {
        classList.add('is-compact');
        classList.remove('is-animating');
    }
}

export const LogoContainer = (props: Props) => {

    const style = `logo-container ${props.style}`;

    return (
        <div className={style}>

            <div className="logo-container__profile">
                <Link to="/">
                    <div
                        className="portfolio_logo"
                        onClick={removeMenuStyle}></div>
                </Link>
            </div>

            <div className="portfol¡o_social_container">
                <div className="content-grid mdl-grid">
                    <a target="_blank" href="https://twitter.com/adrigardi90" onClick={keepLogoFormat}>
                        <div id="twitter" className="portfolio_logo_twitter"></div>
                    </a>
                    <a target="_blank" href="https://github.com/adrigardi90" onClick={keepLogoFormat}>
                        <div id="github" className="portfolio_logo_github"></div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/adrigardi90/" onClick={keepLogoFormat}>
                        <div id="linkedin" className="portfolio_logo_linkedin"></div>
                    </a>
                </div>

            </div>
        </div>
    )
};