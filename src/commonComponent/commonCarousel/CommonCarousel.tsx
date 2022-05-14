import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import styles from "../../../styles/CommonCarousel.module.css";
import arrowRight from "../../assests/arrow-right.png";
import arrowLeft from "../../assests/arrow-left.png";

const CommonCarousel = (props: { children: any; show: any; infiniteLoop: any; }) => {
    const {children,show,infiniteLoop} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    
    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {

        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }


    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
        setIsRepeating(infiniteLoop && children.length > show);
    },[children, infiniteLoop, show]);

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    return (
        <div className={`${styles.carouselContainer}`}>
            <div className={`${styles.carouselWrapper}`}>
                {
                    (isRepeating || currentIndex > 0) &&
                   <div  onClick={prev} className={`${styles.leftArrow}`}>
                        <Image src={arrowLeft}/>
                   </div>
                }
                <div className={`${styles.carouselContentWrapper}`}>
                    <div className={`${styles.carouselContent} show-${show}`} /* style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }} */                         style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}>
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                 {
                    (isRepeating || currentIndex < (length - show)) &&
                    <div  onClick={next} className={`${styles.rightArrow}`}>
                    <Image src={arrowRight}/>
                    </div> 
                }
            </div>
        </div>

    )}

export default CommonCarousel


