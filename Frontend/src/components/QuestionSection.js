import './QuestionSection.css';
import { Link, useLocation } from "react-router-dom";
const QuestionSection = () =>{
    return(
        <section className="otazkysection">
            <h2>Máte jakékoliv specifické požadavky ?</h2>
            <p>
                Pokud jste nenašli konkrétní požadavek k vašemu střihu, neváhejte a ozvěte se nám. Rádi vám výjdeme vstříc.
            </p>
            <button>
                <Link to="/Kontakty#kontaktovat">Kontaktovat</Link>
            </button>
 
        </section>
    )
}
export default  QuestionSection