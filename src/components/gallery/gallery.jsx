import './index.scss'

function Gallery() {
    return (  
        <section className="gallery">
            <div className="gallery__inner">
                <div className="grid gap-4 mb-4 lg:grid-cols-2 lg:gap-x-[30px] lg:mb-[30px]">
                    <div>
                        <img src="./gallery/gallery-1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./gallery/gallery-2.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <img src="./gallery/gallery-3.jpg" alt="" />
                </div>
                <div className="gallery__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </section>
    );
}

export default Gallery;