
import './tour-card.css'

const TourCard = ({tour}) =>{

    const { id , title , photo ,city, price , featured , avgRating , reviews } = tour;

    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img src={photo} alt="" height={'50%'} width={'100%'}  />
                    {featured && <button>Feature</button>}
                </div>
                <div className="card_content">
                    <div className="title">
                        <p><span><i class="ri-map-pin-line"></i></span>{ city }</p>
                        <p><span>
                            <i class="ri-star-fill"></i>
                        </span>4.6(1)</p>
                    </div>
                    <h2>{ title }</h2>
                    <div className="title" style={{alignSelf:'self-end'}}>
                        <small><span>$99</span> /per person</small>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourCard;