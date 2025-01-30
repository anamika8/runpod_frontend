import './About.css'
import { Title } from '../components'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <p>
                    Introducing a web app utilizes Stability AI API to generate images, based on text input.
                </p>
                <p>
                    Give it a try and watch as your words come to life in the most unique and visually appealing way possible!
                </p>
            </div>
        </div>
    )
};

const art = [
"      ,'``.._   ,'``.                             ",
"     :,--._:)\\,:,._,.:                            ",
"     :`--,''   :`...';\\                           ",
"      `,'       `---'  `.                         ",
"      /                 :                         ",
"     /                   \\                        ",
"   ,'                     :\\.___,-.               ",
"  `...,---'``````-..._    |:       \\              ",
"    (                 )   ;:    )   \\  _,-.       ",
"     `.              (   //          `'    \\      ",
"      :               `.//  )      )     , ;      ",
"    ,-|`.            _,'/       )    ) ,' ,'      ",
"   (  :`.`-..____..=:.-':     .     _,' ,'        ",
"    `,'\\ ``--....-)='    `._,  \\  ,') _ '``._     ",
" _.-/ _ `.       (_)      /     )' ; / \\ \\`-.'    ",
"`--(   `-:`.     `' ___..'  _,-'   |/   `.)       ",
"    `-. `.`.``-----``--,  .'                      ",
"      |/`.\\`'        ,',');                       ",
"          `         (/  (/                        "
].join('\n');

export default About;
