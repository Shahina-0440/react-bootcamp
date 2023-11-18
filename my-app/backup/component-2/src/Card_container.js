import React from "react";
import Card from './Card';
import Details from "./Details";

function Card_container(){
    return (
        <div className="card-container">
                    <Card
                        imgsrc={Details[0].imgsrc}
                        link={Details[1].website}
                        title={Details[2].title}
                    />
                        <Card
                        imgsrc={Details[0].imgsrc}
                        link={Details[1].website}
                        title={Details[2].title}
                    />
                        <Card
                        imgsrc={Details[0].imgsrc}
                        link={Details[1].website}
                        title={Details[2].title}
                    />
        </div>
    )
}

export default Card_container;