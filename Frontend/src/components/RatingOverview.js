import './RatingOverview.css';
import starGold from '../assets/Star_gold.png';
import starGrey from '../assets/Star_grey.png';
import RatingItem from './RatingItem';
const totalRatings = 108;
const ratingData = [
    { stars: 5, count: 80 },
    { stars: 4, count: 30 },
    { stars: 3, count: 15 },
    { stars: 2, count: 8 },
    { stars: 1, count: 5 }
];

const RatingOverview = () => {
    return (
        <>
        <section className="ratingOverview">
            <div className="col-12 col-md-3 leftSideRating">
                <h2>4.8</h2>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={i < 5 ? starGold : starGrey} alt="Star" />
                    ))}
                </div>
            </div>
            <div className="col-12 col-md-9 rightSideRating">
                {ratingData.map(({ stars, count }) => (
                    <div key={stars} className="starC starCount">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={i < stars ? starGold : starGrey} alt="Star" />
                            ))}
                             
                        </div>
                        <div className=" progressBar">
                            <div className="progress" style={{ width: `${(count / totalRatings) * 100}%` }}></div>
                        </div>
                        
                        <span className="pocet">{count}x</span>
                    </div>
                ))}
                <div className="addRatingButton">
                    <button><a href="#">Přidat hodnocení</a></button>
                </div>
            </div>
        </section>
        <RatingItem></RatingItem>
        </>
    );
};

export default RatingOverview;