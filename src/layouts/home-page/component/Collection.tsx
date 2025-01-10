import React, { useEffect, useState } from "react";
import "./../../../css/collection.css"
import CategoryModel from "../../../models/CategoryModel";
import { GetCollection } from "../../../api/CategoryAPI";

function Collection() {
    const [collection, setCollection] = useState<CategoryModel[]>([]);

    useEffect(() => {
        GetCollection().then(
            collectionData => {
                setCollection(collectionData);
            }
        ).catch(

        );
    }, []);

    return(
        <div className="selection">
            <div className="shop">
                <p className="title">Explore a selection of our wardrobe essentials.</p>
                <a href="" className="extensive-btn">Shop all</a>
            </div>
            <div className="list-categories">

                {
                    collection.map((category) => (
                        <a href="/collection/sneakers" className="category">
                            <img className="image" src={category.image} alt="" />
                            <div className="infor">
                                <p className="title"><b>{category.categoryName}</b></p>
                                <p className="desc">{category.description}</p>
                            </div>
                        </a>
                    ))
                }
                

                {/* <a href="" className="category">
                    <img className="image" src={"./../images/categories/T_Shirts.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>T-Shirts</b></p>
                        <p className="desc">Built for the long haul.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Loafers.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Loafers</b></p>
                        <p className="desc">Intensified suede, utmost supplesness.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Trousers.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Trousers</b></p>
                        <p className="desc">A powerful silhouette and yet, they wear like pajama's.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Dressed_Footwear.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Dressed Footwear</b></p>
                        <p className="desc">Tailored with the finest leathers.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Shirts.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Shirts</b></p>
                        <p className="desc">Endless comfort. You want to keep it on.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Desert_Boots.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Desert Boots</b></p>
                        <p className="desc">Abrasion and slip resistance soles.</p>
                    </div>
                </a>

                <a href="" className="category">
                    <img className="image" src={"./../images/categories/Polo_Shirts.webp"} alt="" />
                    <div className="infor">
                        <p className="title"><b>Polo Shirts</b></p>
                        <p className="desc">Providing comfort without losing shape.</p>
                    </div>
                </a> */}
            </div>
        </div>
    );
}

export default Collection; 