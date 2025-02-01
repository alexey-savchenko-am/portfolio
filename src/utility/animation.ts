
export const FadeUp = (delay:number) => {
    return {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    }
};

export const FadeLeft = (delay:number) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay
            }
        }
    }
};


export const FadeRight = (delay:number, duration?:number) => {
    return {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: duration ?? 1,
                delay: delay,
            }
        }
    }
};