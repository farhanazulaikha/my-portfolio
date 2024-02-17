import './header.css';
import image from '../../assets/images/cute-duck.jpg';
import HeaderRoute from '../../routes/HeaderRoute';

export default function Header() {
    return (
        <header>
            <div className="left-section">
                <img loading="lazy" className="my-picture" src={image} alt="my face :p"/>
                <div className="my-name">FARHANA ZULAIKHA</div>
            </div>
            <div className="right-section">
                <HeaderRoute/>
            </div>
        </header>
    )
}