import './index.scss'

function Desc() {
    return ( 
        <section className="desc">
            <div className="desc__lines">
                <div className="desc__line -left"></div>
                <div className="desc__line -center"></div>
                <div className="desc__line -right"></div>
            </div>
            <div className="desc__title">Description</div>
            <div className="desc__inner">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
     );
}

export default Desc;