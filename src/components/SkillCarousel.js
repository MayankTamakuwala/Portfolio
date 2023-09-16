/* eslint-disable jsx-a11y/alt-text */

const SkillCarousel = ({data}) => {

    return (
        <div className='justify-around items-center flex lg:hidden'>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box">
                {
                    data.map((item, index) => {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={require(`../assets/skills/${item.image}.png`)} className="rounded-box w-80  h-96"></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SkillCarousel;