import React, {useRef} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import {motion} from "framer-motion";
import Typical from "react-typical";
import HeroCards from "./heroCards.jsx";
import TimeLine from "./TimeLine.jsx";


export function Home() {

  return (
      <>

        <div className='overflow-hidden'>
          <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center">

            </div>
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center"/>

            <div className="max-w-8xl container relative mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                  <Typography
                      variant="h1"
                      color="white"
                      className="mb-6 font-black"
                  >

                    <Typical
                        steps={['Your story starts with us.', 8000, '', 4000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                  </Typography>
                  <motion.div
                      initial={{opacity: 0, y: '10px'}}
                      whileInView={{opacity: 1, y: '0 px', transition: {duration: 0.5, delay: 0.2}}}
                  >
                    <Typography variant="lead" color="white" className="opacity-80">
                      This is a simple example of a Landing Page you can build using
                      Material Tailwind. It features multiple components based on the
                      Tailwind CSS and Material Design by Google.
                    </Typography>
                  </motion.div>


                  <motion.div
                      initial={{opacity: 0, y: '50px'}}
                      whileInView={{opacity: 1, y: '0 px', transition: {duration: 0.2, delay: 0.3}}}

                  >
                    <Button
                        className="rounded-full transform transition-transform duration-300 hover:scale-150 px-10 mt-10"
                        loading={true}
                        color="amber"
                        variant={'gradient'}
                        size={'lg'}
                    >
                      START VIRTUAL TOUR
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <HeroCards/>

          <hr/>
          <TimeLine/>
          <section className="px-4 pt-32 ">
            <div className="container mx-auto">
              <PageTitle section="" heading="Here are our heroes...">
                <Typography variant="paragraph" color="black" className="opacity-80">
                  According to the National Oceanic and Atmospheric Administration,
                  Ted, Scambos, NSIDClead scentist, puts the potentially record
                  maximum.
                </Typography>

              </PageTitle>
              <div className={'container'}>
                <div className=" mt-24 grid grid-cols-1 gap-12  md:grid-cols-2 xl:grid-cols-4">
                  {teamData.map(({img, name, position, socials}, index) => (
                      <motion.div
                          className="cursor-pointer"
                          whileHover={{scale: 1.1}}
                          initial={{opacity: 0, y: '50%', scale: 1}}
                          whileInView={{
                            opacity: 1, y: '0%',
                            transition: {
                              duration: 0.1,
                              delay: 0.1 * (index + 1),
                              type: 'spring',
                              stiffness: 100,
                              damping: 8
                            }
                          }}
                          key={name}>
                        <TeamCard

                            img={img}
                            name={name}
                            position={position}
                            socials={
                              <div className="flex items-center gap-2">
                                {socials.map(({color, name}) => (
                                    <IconButton key={name} color={color} variant="text">
                                      <i className={`fa-brands text-xl fa-${name}`}/>
                                    </IconButton>
                                ))}
                              </div>
                            }
                        />
                      </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>


          <section className="relative bg-black py-24 px-4">
            <div className="container mx-auto">
              <Typography
                  variant="h3"
                  className="mb-3 font-bold text-center"
                  color="white"
              >

                <Typical
                    steps={['Build something...', 8000, '', 4000]}
                    loop={Infinity}
                    wrapper="span"
                />
              </Typography>

              <Typography variant="paragraph" color="white" className="opacity-80 text-center">
                Put the potentially record low maximum sea ice extent this year down to low ice.
              </Typography>
              <Typography variant="paragraph" color="white" className="opacity-80 text-center">
                According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
              </Typography>


              <div className="mx-auto mt-20 mb-16 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {contactData.map(({title, icon, description},index) => (
                   <motion.div key={title}
                               initial={{opacity: 0, x: '-50%', scale: 1}}
                               whileInView={{
                                 opacity: 1, x: '0%',
                                 transition: {
                                   duration: 0.1,
                                   delay: 0.2 * (index + 1),
                                   type: 'spring',
                                   stiffness: 100,
                                   damping: 10
                                 }
                               }}
                   >
                     <Card
                         key={title}
                         color="transparent"
                         shadow={false}
                         className="text-center text-white"
                     >
                       <div
                           className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-amber-400 shadow-lg shadow-gray-500/20">
                         {React.createElement(icon, {
                           className: "w-5 h-5 text-black",
                         })}
                       </div>
                       <Typography variant="h3" color="light-green" className="mb-2">
                         {title}
                       </Typography>
                       <Typography className="font-normal white">
                         {description}
                       </Typography>
                     </Card>
                   </motion.div>
                ))}
              </div>


            </div>
          </section>

          <section className="relative bg-white py-24 px-4">
            <motion.div

                className="container mx-auto">
              <PageTitle section="" heading="Want to work with us?">
                <Typography variant="paragraph" color="black" className="opacity-80">
                  Complete this form and we will get back to you in 24 hours.
                </Typography>
              </PageTitle>
              <form className="mx-auto w-full mt-12 lg:w-5/12">
                <div className="mb-8 flex gap-8">
                  <Input variant="outlined" size="lg" label="Full Name"/>
                  <Input variant="outlined" size="lg" label="Email Address"/>
                </div>
                <Textarea variant="outlined" size="lg" label="Message" rows={8}/>
                <Checkbox
                    label={
                      <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                      >
                        I agree the
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                        >
                          &nbsp;Terms and Conditions
                        </a>
                      </Typography>
                    }
                    containerProps={{className: "-ml-2.5"}}
                />
                <Button variant="gradient"  color='light-blue' size="lg" className="mt-8" fullWidth>
                  Send Message
                </Button>
              </form>
            </motion.div>
          </section>
          <div className="bg-black">
            <Footer/>
          </div>
        </div>
      </>
  );
}

export default Home;
