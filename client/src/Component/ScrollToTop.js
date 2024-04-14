import React from 'react'

const ScrollToTop = () => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        });
    }
    return (
        <>
            <div className='m-0 p-1' style={{ position: "fixed", bottom: "1.5cm", right: "1.5cm" }}>
                <button className='btn btn-md btn-outline-warning p-1' onClick={ScrollToTop} ><i class="fa-solid fa-arrow-up"></i></button>
            </div >
        </>
    )
}

export default ScrollToTop;
