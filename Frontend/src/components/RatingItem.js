import './RatingItem.css';
import male from '../assets/male_profile.png';
import female from '../assets/female_profile.png';
import starGold from '../assets/Star_gold.png';
import starGrey from '../assets/Star_grey.png';

const users = [
    { 
        name: "Petr Novák", 
        gender: "male", 
        rating: 5, 
        message: "Skvělý produkt! Určitě doporučuji." 
    },
    { 
        name: "Jana Svobodová", 
        gender: "female", 
        rating: 3, 
        message: "Produkt je fajn, ale čekala jsem trochu lepší kvalitu."
    }
];

const getInitials = (fullName) => {
    const nameParts = fullName.split(" ");
    return nameParts.map(part => part[0]).join("");
};

const RatingItem = () => {
    return (
        <>
            {users.map((user, index) => (
                <section className="ratingItem" key={index}>
                    <div className="col-12 col-md-2 leftSideRatingItem">
                        <div>
                            <img src={user.gender === "male" ? male : female} alt="" />
                            <h2>{getInitials(user.name)}</h2>
                            <p>{user.name}</p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={i < user.rating ? starGold : starGrey} alt="Star" />
                                ))}
                            </div>
                        </div>      
                    </div>
                    <div className="col-12 col-md-10 rightSideRatingItem">
                        <p>{user.message}</p>           
                    </div>
                </section>
            ))}
        </>
    );
};

export default RatingItem;