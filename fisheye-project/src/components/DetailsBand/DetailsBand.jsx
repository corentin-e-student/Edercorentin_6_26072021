import "./detailsBand.css"
import data from '../../data'
import { ButtonContact } from "../ButtonContact"
import {useParams} from "react-router-dom";
import Tag from "../../components/Tag"


const DetailsBand = () => {
    let { id } = useParams();
    return (
        <div> 
            {data.photographers.filter(user => user.id == id).map(photographer => (
                <div className="page__background">
                    <div className="page__items-position">
                        <div className="page__details-block-position">
                            <div className="page__details-block-style">
                                <div className="page__details-name-style">{photographer.name}</div>
                                <div className="page__details-location-style">{photographer.city}, {photographer.country}</div>
                                <div className="page__details-citation-style">{photographer.tagline}</div>
                                <div className="page__details-tags-style">
                                    {photographer.tags.map(tag => (
                                        <Tag key={tag} content={tag} />
                                        ))
                                    }
                                </div>
                            </div>
                            <ButtonContact/>
                        </div>
                        <div className="page__details-portrait-style"><img className="page__portrait-dimensions"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" /></div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
export default DetailsBand;
