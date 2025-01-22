import {Button, IconButton, Typography} from "@material-tailwind/react";
import {motion} from "framer-motion";
import React from "react";
import {useEffect} from "react";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useRef} from "react";

export  default  function TimeLine(){


    const childContainerRef = useRef(null);




    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = "hidden";
            if (childContainerRef.current) {
                childContainerRef.current.style.overflowY = "auto";
                childContainerRef.current.style.scrollbarWidth = 'none'; // Firefox
                childContainerRef.current.style.msOverflowStyle = 'none'; // IE and Edge
            }
        };

        const enableScroll = () => {
            document.body.style.overflow = "auto";
            if (childContainerRef.current) {
                childContainerRef.current.style.overflowY= "hidden";
                childContainerRef.current.style.scrollbarWidth = 'none'; // Firefox
                childContainerRef.current.style.msOverflowStyle = 'none'; // IE and Edge
            }

        };

        const handleScrollRedirect = (event) => {
            if (childContainerRef.current) {
                const child = childContainerRef.current;
                const isAtTop = child.scrollTop === 0 && event.deltaY < 0;
                const isAtBottom = child.scrollTop + child.clientHeight >= child.scrollHeight && event.deltaY > 0;

                if (!isAtTop && !isAtBottom) {
                    child.scrollTop += event.deltaY; // Scroll within the child container
                    event.preventDefault(); // Prevent default body scroll
                } else {
                    enableScroll(); // Allow main scroll if at the top or bottom
                }
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.9) {
                    disableScroll(); // Disable scrolling when 80% of the div is visible
                    window.addEventListener("wheel", handleScrollRedirect, { passive: false });
                } else {
                    enableScroll(); // Re-enable scrolling when it's less than 80%
                    window.removeEventListener("wheel", handleScrollRedirect); // Clean up event listener
                }
            },
            {
                root: null, // Viewport as the root
                threshold: 0.9, // Trigger when 80% of the element is visible
            }
        );

        if (childContainerRef.current) {
            observer.observe(childContainerRef.current);
        }

        return () => {
            if (childContainerRef.current) {
                observer.unobserve(childContainerRef.current);
            }
            window.removeEventListener("wheel", handleScrollRedirect); // Clean up the event listener
            enableScroll(); // Cleanup and re-enable scrolling on unmount
        };
    }, []);


    return (
        <section>
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <motion.div
                            initial={{opacity: 0, x: '-60px'}}
                            whileInView={{opacity: 1, x: '0 px', transition: {duration: 0.5, delay: 0.2}}}
                        >
                            <Typography color="amber" variant="h6" className=' uppercase tracking-loose'>Working
                                Process</Typography>

                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="white"
                            >
                                Working Process of Fest...
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: '10px'}}
                            whileInView={{opacity: 1, y: '0 px', transition: {duration: 0.5, delay: 0.2}}}
                        >
                            <Typography variant="paragraph" color="white" className="opacity-80">
                                Here’s your guide to the tech fest 2021 process. Go through all the steps to know the
                                exact
                                process of the
                                fest.
                            </Typography>

                            <Button
                                className="rounded-full transform transition-transform duration-300 hover:scale-150 px-10 mt-10"
                                loading={true}
                                color="amber"
                                variant={'gradient'}
                                size={'md'}
                            >
                                See Our Story
                            </Button>
                           < img
                            className="mx-6 my-16 h-full w-full rounded-xl object-cover object-center"
                            src="/img/jettImg.png"
                            alt="nature image"
                            />

                        </motion.div>


                    </div>
                    <div className="mt-10 ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="border-2-2 border-yellow-555 absolute h-full border"
                                     style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}}>
                                </div>

                                   <div ref={childContainerRef} className='scrollable-container px-6 overflow-y-auto overflow-x-hidden  max-h-screen w-full'>
                                       <TimeLineCard side={1}/>
                                       <TimeLineCard side={0}/>
                                       <TimeLineCard side={1}/>
                                       <TimeLineCard side={0}/>
                                       <TimeLineCard side={1}/>
                                       <TimeLineCard side={0}/>
                                       <TimeLineCard side={1}/>
                                       <TimeLineCard side={0}/>
                                   </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const TimeLineCard = ({side}) => {

    const sideClass = side === 1 ? 'left-timeline' : 'right-timeline';
    const initialPadding = side ===1?'-120px':'120px';
    const reverse=side===1?'flex-row-reverse':'';
    const textAlign=side===1?'text-right':'text-left';
    const arrowSide=side===1?{}:{ transform: 'rotate(180deg)' };


    return (
        <motion.div
            initial={{opacity: 0, x: initialPadding}}
            whileInView={{opacity: 1, x: '0 px',
                transition: {
                    delay: 0.2,

                }}}


            className={"mb-8 flex justify-between " +reverse+ " items-center w-full "+sideClass}>
            <div className="order-1 w-5/12"></div>
            <div className={"order-1 w-5/12 px-1 py-4 "+textAlign}>
                <DoubleArrowIcon style={arrowSide}/>
                <Typography className='mb-3' variant="h5" color="amber">
                    1-6 May, 2021
                </Typography>

                <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                <Typography variant="small" color="white" className="opacity-100 mb-3">
                    Pick your favourite event(s) and register in that event by filling the form
                    corresponding to that
                    event. Its that easy :)
                </Typography>

                <motion.figure  whileHover={{scale: 1.1,transition: {duration: 0.4,}}}
                                className="hidden md:block relative h-auto w-full cursor-pointer">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="nature image"
                    />
                    <figcaption
                        className="  absolute bottom-2 left-2/4 flex w-[calc(100%-1rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/60  shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Sara Lamalo
                            </Typography>
                            <Typography  variant='small' color="gray" className=" font-normal" style={{textAlign:'center'}}>
                                20 July 2022
                            </Typography>
                        </div>

                    </figcaption>
                </motion.figure>

            </div>
        </motion.div>
    )
}