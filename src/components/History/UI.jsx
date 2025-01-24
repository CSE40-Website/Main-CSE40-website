import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "1.1",
  "1.2",
  "2.1",
  "2.2",
  '3.1',
  '3.2',
  "4.1",
  "4.2",
  "5.1",
  "5.2",
  "6.1",
  "6.2",
  "7.1",
  "7.2",
  "8.1",
  "8.2",
  "9.1",
  "9.2",
  "10.1",
  "10.2",
];


// left side - 0,1 & right side - 2,3
const descriptions = [
  {
    0: "SLIoT Challenge - 2023",
    1: "The Department of Computer Science and Engineering at the University of Moratuwa, in collaboration with SLT Mobitel and IESL, hosted the SLIoT Challenge 2023, an annual competition for innovative IoT solutions. Held in three categories—school, undergraduate, and open—the event aimed to raise IoT awareness among Sri Lankans, encouraging creative solutions to real-world challenges.",
  
    2: "Research Team from the Department of Computer Science and Engineering Receives Prestigious Award at EACL 2024",
    3: "A research team from the Department of Computer Science & Engineering received the Low-Resource Paper Award at the European Chapter of the Association for Computational Linguistics (EACL) 2024 conference. Their paper, titled \"Quality Does Matter: A Detailed Look at the Quality and Utility of Web-Mined Parallel Corpora,\" focuses on improving the quality of web-mined parallel corpora.The team consists of research students Mr. Menan Velayuthan, Ms. Aloka Fernando, and Contract Lecturer Ms. Charitha Rathnayaka, supervised by Dr. Surangika Ranathunga and Dr. Nisansa de Silva. Supported by a Google Award for Inclusion Research (AIR) grant, their work advances low-resource language computing, benefiting languages like Sinhala and Tamil.",
  },
  {
    0: "BrainLeftException Shines at IEEEXtreme 17",
    1: "The team BrainLeftException from the University of Moratuwa has once again demonstrated its coding prowess on the global stage. Comprising the brilliant minds of Sandil Ranasinghe, Radith Samarakoon, and Joel Sathiyendra, team BrainLeftException triumphed in the IEEEXtreme XVII, a 24-hour coding challenge for IEEE Student members securing an impressive 112th position worldwide and 3rd position nationally.",

    2: "The University of Moratuwa Celebrates Success at 25th National ICT Awards – NBQSA 2023",
    3: "The 25th National ICT Awards – NBQSA 2023, held on October 25 at Monarch Imperial, celebrated Sri Lankan ICT innovation with H.E. President Ranil Wickremasinghe and Hon. State Minister of Technology Kanaka Herath as guests of honor.Dilith Jayakody, a University of Moratuwa Computer Science student, won the Bronze Award in the \"Research and Development Project of the Year\" category for his project, \“Reinforcement Learning-based Remote Sensing Index Generation,\” supervised by Dr. Thanuja Ambegoda. This achievement highlights the university's commitment to advancing ICT research and fostering technological excellence in Sri Lanka.",

  
  }
  ,
  {
    0: "University of Moratuwa Alumni Win President’s Award for Scientific Research",
    1: "We are proud to commemorate a remarkable achievement by alumni from the Department of Computer Science & Engineering, University of Moratuwa, who received the President’s Award for Scientific Research 2020 from H.E. President Ranil Wickremesinghe. Their bachelor’s thesis, \"Change Detection and Notification of Web Pages: A Survey,\" published in ACM Computing Surveys (CSUR), was recognized for its scientific excellence.Congratulations to Vijini Mallawaarachchi, Lakmal Meegahapola, Roshan Alwis, and Eranga Heshan, mentored by Prof. Dulani Meedeniya and Dr. Sampath Jayarathna, for their contribution to advancing Change Detection and Notification systems. This milestone highlights the University of Moratuwa's continued legacy in research and innovation.",
    
    2: "Prof. Sanath Jayasena Receives Silver Award at National Educator Awards 2023",
    3: "At the inaugural National Educator Awards 2023, Prof. Sanath Jayasena from the Department of Computer Science & Engineering, University of Moratuwa, was honored with the Silver Award for the National Educator Award in Computing. This prestigious recognition celebrated his exceptional contributions to academia, research, and the field of computing.The National Educator Awards evaluated educators on academic achievements, research, and contributions to institutional and national development. Prof. Jayasena’s dedication to teaching and research has left a lasting impact on the department and set a benchmark for educators nationwide.",
  },
  
  {
    0: "Washington Accord Re-Accreditation Successfully Completed",
    1: "On September 13, 2023, the Computer Science & Engineering degree program at the University of Moratuwa, Sri Lanka, successfully received full Washington Accord re-accreditation from the IESL. The evaluation panel commended the program’s innovative educational practices, strong student and staff commitment, and high employability of its graduates, despite challenging financial conditions. This achievement highlights the department’s dedication to academic excellence and its global contributions to computer science and engineering.",
   
    2: "CSE Students Shine at Red Cloud Summit",
    3: "Students from the Department of Computer Science and Engineering at the University of Moratuwa excelled at the Red Cloud Summit organized by OREL IT. Team Deciphers secured second runner-up in the Capture The Flag competition, showcasing skills in web decoding, image analysis, geo-coordinate evaluation, and text decryption.Team De Bait also earned second runner-up in The Great Debate Competition, debating topics like \"The cloud is safer than my server room\" and \"Is the cloud really green?\" against other universities. Both teams were awarded LKR 1,000,000 worth of OREL Cloud Credit each for their exceptional performances.",
 
  },
  {
    0: "Google Summer of Code 2023 Achievements",
    1: "Two final-year students from the Department of Computer Science Engineering at the University of Moratuwa, Akila Induranga and Wenuka Somarathne, achieved significant recognition in Google Summer of Code 2023. Akila enhanced the Kolibri EPUB renderer by introducing a custom text color picker, allowing users to personalize text, background, and link colors.Wenuka contributed to the TensorMap project at SCoRe Lab by fixing major bugs, streamlining the codebase, and adding new features to the TensorMap app. His efforts resulted in a more efficient and user-friendly application, advancing TensorMap's capabilities and its impact on the community.",
  
    2: "ABU RoboCon 2023",
    3: "Penh, Cambodia. While the team did not secure any awards, the invaluable experiences and lessons learned throughout this journey significantly contributed to their growth and understanding of robotics.The participation fostered international connections with peers from various countries, highlighting the importance of collaboration in the field. The team's commitment to learning and innovation remains strong, and they are eager to apply their newfound knowledge to tackle future challenges. This experience underscores the department's dedication to excellence in robotics education.",
  },
  {
    0: "Dr. Srinath Perera Releases Book on Software Architecture and Decision-Making",
    1: "Dr. Srinath Perera, a distinguished alumnus of the Department of CSE, authored the book \“Software Architecture and Decision-Making: Leveraging Leadership, Technology, and Product Management to Build Great Products.\” Published in 2023, the book explores the intersection of software architecture and leadership, offering insights into navigating uncertainties in development. Highlighting principles for better judgment, it has become a valuable resource for professionals. The department proudly recognizes Dr. Perera's achievement, with the book available on Amazon and InformIT.",
  
    2: "Championing Excellence in ./bashway 2023 by University of Moratuwa",
    3: "The remarkable team Team \"TrackTech\" from the Department of Computer Science and Engineering, University of Moratuwa comprising of Sandil Ranasinghe, Eshan Subasinghe, Inuka Ampavila, and Radith Samarkoon, emerged as undisputed champions in the recently concluded ./bashaway 2023, the second edition of the first-ever scripting and automation competition organized by the SLIIT FOSS Community.",
  },
  {
    0: "CrickOverflow 2023 Concludes Successfully",
    1: "CricOverflow, cricket encounter organized by the Department of Computer Science and Engineering at the University of Moratuwa on December 23, 2023, was a spirited display of friendly competition and camaraderie.",
  
    2: "Team Hades Shines as Second Runners-Up at SLIoT Challenge 2023",
    3: "In 2023, Team Hades from the Department of Computer Science and Engineering at the University of Moratuwa achieved remarkable success as the Second Runners-Up in the University Category of the SLIoT Challenge. This accomplishment highlighted their innovative spirit and technical expertise, showcasing the department's commitment to nurturing future leaders in the tech world.",
  },
  {
    0: "The Department of Computer Science and Engineering Joins Hands with CERN",
    1: "In 2022, the Department of Computer Science and Engineering at the University of Moratuwa became an associate member of the ALICE experiment at CERN, focusing on the physics of strongly interacting matter. Initiated by Dr. Luciano Musa and Prof. Indika Perera, this collaboration offered students opportunities to work on high-performance computing projects within the ALICE experiment. Representatives Dr. Gayashan Amarasinghe and Mr. Kalana Wijethunga visited CERN to discuss future directions, and two students joined the ALICE Grid team under Dr. Latchezar Betev as part of their Master’s program.",
  
    2: "Sri Lanka’s First Virtual Robotics Competition - IESL Robogames 2020",
    3: "The \"IESL RoboGames 2020,\" Sri Lanka's first virtual robotics competition, was held on November 28, organized by the Department of Computer Science and Engineering at the University of Moratuwa and IESL’s IT & Sectional Committee, with support from Sri Lanka Telecom. Competitors programmed virtual robots in a Covid-19-themed city maze using Webots simulation software.Workshops prepared over 20 school teams and 44 university teams for the event, overcoming barriers to robotics access. Industry experts judged participants on code quality, robot design, and algorithmic creativity. Team Trix from Maliyadeva College won the School Category, and Team Circuit Breakers from the University of Moratuwa triumphed in the University Category, showcasing nationwide robotics talent.",
 
  },
  {
    0: "Advancing Autonomous Robotic Technology with Rebirth Technologies and the University of Moratuwa.",
    1: "In April 2019, Rebirth Technologies (Pvt) Ltd, a Swedish-Sri Lankan startup, partnered with IntelliSense Lab at the Department of Computer Science and Engineering, University of Moratuwa, to advance robotic technology for hazardous or labor-intensive tasks. The collaboration, marked by the signing of an agreement, aimed to generate intellectual property and drive technology commercialization.The project, \"Xavier,\" developed a multi-robot system for collaborative 3D terrain mapping and autonomous navigation. The initiative highlighted the university's global recognition for producing graduates skilled in advanced tech projects. This partnership showcased the potential of industry-academic collaboration in pioneering cutting-edge robotics solutions.",
  
    2: "Imagine Cup winners",
    3: "BitMasters, the team from the Moratuwa University Engineering Faculty in Sri Lanka, made their country proud by securing second place in the Innovation Category at the Microsoft Imagine Cup 2016. The award ceremony, held at Microsoft’s Redmond campus in Seattle, was graced by Microsoft CEO Satya Nadella, marking a historic achievement for Sri Lankan students in a global technology competition.The team, comprised of Lakmal Buddika Meegahapola, Chanaka Lakmal, Chathusha Wijenayake, and Charith Eranga, presented ‘Amplus,’ an intelligent digital signage solution poised to transform the advertising industry. This accomplishment, built on two years of dedicated work, reflects the potential of Sri Lankan talent on the international stage.",
 
  },
  {
    0: "Best Student Paper Award at 16th IEEE International Conference",
    1: "Proteins play a critical role in cellular health and function, with deficiencies leading to diseases and cellular degeneration. Dinithi Sumanaweera, a University of Moratuwa (UoM) graduate, developed a computational model under the guidance of Dr. Shehan Perera to predict proteins associated with mitochondrial organization, a key cellular process. Her research was grounded in data mining techniques, focusing on Saccharomyces cerevisiae proteins to support biomedical insights.Dinithi’s work earned her a Best Student Paper Award at the IEEE BIBE 2016 conference. With further guidance from UoM’s multidisciplinary faculty, she completed her master’s with high distinction. Currently, Dinithi is pursuing her PhD at Monash University, Australia, researching statistical methods for protein alignment modeling to better understand evolutionary relationships in proteins.",
  
    2: "IESL Robogames 2014",
    3: "In 2014, the IT & Communication Engineering Sectional Committee of the Institution of Engineers Sri Lanka (IESL), in collaboration with the Department of Computer Science and Engineering at the University of Moratuwa, hosted the \"IESL RoboGames 2014.\" This event challenged Sri Lankan youth to showcase their creativity by constructing and programming autonomous robots, fostering innovation and technical skills in robotics.",
 
  },
  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
    description: "Cover Page: History of CSE",
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
    description: descriptions[Math.floor(i / 2)],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
  description: descriptions[descriptions.length - 1],
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
