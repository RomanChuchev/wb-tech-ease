import room from "../../images/room.jpg";
import "./LightingPage.scss";

function LightingPage() {
    return (
        <div className="lightin-page">
            <div className="lightin-page__container">
                <div className="lightin-page__wrapper">
                    <p className="lightin-page__text-description">
                        Collection of lighting is inspired by the geometric
                        works of the great Suprematist artists Kissitzky and
                        Kazimir Malevich.
                        <br />
                        <br />
                        Suprematism is a modernist movement in the art of the
                        early twentieth century, focused on the basic geometric
                        forms, such as circles, squares, lines and rectangles.
                        The geometric structure of the lamps will always look
                        like a small art objects in your house.
                    </p>
                    <div className="lightin-page__info">
                        <p className="lightin-page__text">
                            <strong>Material:</strong> Copper <br /> <br />
                            <strong>Dimensions(cm):</strong> H 33 x W 15 x D 15
                            <br /> <br />
                            <strong>Net Weight:</strong> 2,5 kg
                            <br /> <br />
                            <strong>Electrification:</strong>
                            <br />
                            LED 10W | G9 | 220-240V | 50 Hz
                        </p>
                    </div>
                </div>
                <div className="lightin-page__selection-wrapper">
                    <img
                        className="lightin-page__room-img"
                        src={room}
                        alt="room"
                    ></img>
                    <div className="lightin-page__selection"></div>
                    <div className="lightin-page__selection-shadow"></div>
                </div>
            </div>
        </div>
    );
}

export default LightingPage;
