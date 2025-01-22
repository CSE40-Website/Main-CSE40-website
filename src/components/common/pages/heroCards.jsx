import {motion, useMotionValue, useTransform} from "framer-motion";
import React, {useEffect, useState} from "react";
import featuresData from "../data/features-data.js";
import FeatureCard from "../widgets/cards/feature-card.jsx";
import {FingerPrintIcon} from "@heroicons/react/24/solid/index.js";
import {Button, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import { v4 as uuidv4 } from "uuid";
import CarouselCustom from "./Carousel.jsx";
import Typical from "react-typical";

let cards = [
    {
        key: uuidv4(),
        content: (
            <DefaultCard />
        )
    },
    {
        key: uuidv4(),
        content: (
            <DefaultCard />        )
    },
    {
        key: uuidv4(),
        content: (
            <DefaultCard />        )
    },
    {
        key: uuidv4(),
        content: (
            <DefaultCard />        )
    },
    {
        key: uuidv4(),
        content: (
            <DefaultCard />        )
    }
];


export  default  function  HeroCards() {

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
    const rotate = useTransform(x, [-150, 150], [-90, 90]);

    return (
        <>
            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map(({color, title, icon, description}, index) => (
                            <motion.div
                                key={title}
                                whileHover={{scale: 1.06}}
                                initial={{opacity: 0, x: '-50%', scale: 1}}
                                whileInView={{
                                    opacity: 1, x: '0%',
                                    transition: {
                                        duration: 0.1,
                                        delay: 0.3 * (index + 1),
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 5
                                    }
                                }
                                }

                                drag="x"
                                dragConstraints={{left: 0, right: 0}}
                                dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
                                whileTap={{cursor: "grabbing"}}

                            >
                                <FeatureCard
                                    color={color}
                                    title={title}
                                    icon={icon}
                                    description={description}
                                />
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            <section className="-mt-32 bg-black px-4 pb-32 pt-4">
                <div className="container mx-auto">

                    <div className="mt-32 flex flex-wrap items-center ">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <div
                                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                                <FingerPrintIcon className="h-8 w-8 text-white "/>
                            </div>
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="white"
                            >

                                <Typical
                                    steps={['Working with us is a pleasure...', 8000, '', 4000]}
                                    loop={Infinity}
                                    wrapper="span"
                                />

                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                                Don't let your uses guess by attaching tooltips and popoves to
                                any element. Just make sure you enable them first via
                                JavaScript.
                                <br/>
                                <br/>
                                The kit comes with three pre-built pages to help you get started
                                faster. You can change the text and images and you're good to
                                go. Just make sure you enable them first via JavaScript.
                            </Typography>

                            <motion.div
                                initial={{opacity: 0, y: '30px'}}
                                whileInView={{opacity: 1, y: '0 px', transition: {duration: 0.2, delay: 0.3}}}

                            >
                                <Button
                                    className="rounded-full transform transition-transform duration-300 hover:scale-150 px-10 mt-10"
                                    loading={true}
                                    color="amber"
                                    variant={'gradient'}
                                    size={'md'}
                                >
                                    read more
                                </Button>
                            </motion.div>

                        </div>
                        <motion.div

                            initial={{opacity: 0, x: '20%', scale: 1}}
                            whileInView={{
                                opacity: 1, x: '0%',
                                transition: {
                                    duration: 0.1,
                                    delay: 0.2,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 8
                                }
                            }
                            }
                            className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

                            <CarouselCustom
                                cards={cards}
                                height="500px"
                                width="30%"
                                margin="0 auto"
                                offset={2}
                                showArrows={false}
                            />

                        </motion.div>
                    </div>


                </div>
            </section>
        </>
    )
}


const names = ["Enterprise", "Business", "Company", "Organization"];


function  DefaultCard() {
    return(
<motion.div
    whileHover={{scale: 1.06}}
    style={{minWidth:'400px'}}>
    <Card   className="shadow-lg border  shadow-gray-500/10 rounded-lg">
        <CardHeader floated={false} className="relative h-56">
            <motion.img
                 whileHover={{scale: 1.2}}
                alt="Card Image"
                src="/img/teamwork.png"
                className="h-full w-full"
            />
        </CardHeader>

        <CardBody>
            <Typography variant="small" color="blue-gray"
                        className="font-normal">Enterprise</Typography>
            <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
            >


                Top Notch Services
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
            </Typography>
        </CardBody>
    </Card>

</motion.div>    )
}