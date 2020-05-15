export function setFloorNavMountClick(index, element, time) {
    const floor_item = element.floor_item
    const floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop
    const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const timer = {
        step: 60,
        times: 16,
        FLOOR_OFFSETTOP: floor_offsetTop
    }
    if (window_scrollTop > floor_offsetTop) {
        setFloorScrollArrowUp(timer, time)
    } else if (window_scrollTop === floor_offsetTop) {
        return false
    } else {
        setFloorScrollArrowDown(timer, time)
    }
}
export function setFloorScrollArrowUp(timer, time) {
    clearInterval(time)
    time = setInterval(() => {
        const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
            document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
            document.body.scrollTop = timer.FLOOR_OFFSETTOP
            clearInterval(time)
        } else {
            document.documentElement.scrollTop = window_scrollTop - timer.step
            document.body.scrollTop = window_scrollTop - timer.step
        }
    }, timer.times)
}

export function setFloorScrollArrowDown(timer, time) {
    clearInterval(time)
    time = setInterval(() => {
        const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
            document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
            document.body.scrollTop = timer.FLOOR_OFFSETTOP
            clearInterval(time)
        } else {
            document.documentElement.scrollTop = window_scrollTop + timer.step
            document.body.scrollTop = window_scrollTop - timer.step
        }
    }, timer.times)
}

