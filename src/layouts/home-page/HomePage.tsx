import React from "react";
import Banner from "./component/Banner";
import Collection from "./component/Collection";
import Category from "./component/Categoty";
import Blogs from "./component/Blogs";
import ListPopularProduct from "./component/ListPopularProduct";
import Header from "../header-footer/Header";

function HomePage() {
    return(
        <div>
            <Header color="#fff" logoFilter="invert(1)" />
            <Banner />
            <Collection />
            <Category urlImage1={"./images/categories/Shoes/Shoes_Banner_1.webp"} urlImage2={"./images/categories/Shoes/Shoes_Banner_2.webp"} title="Our style never changes. It evolves. Continuously. Confident and comfortable, ETQ introduces the etiquette of artisan shoe crafting to today’s sneaker world." shop="Shop Footwear" position="7 / span 6"/>
            <ListPopularProduct title="Everyday Luxury" />
            <Category urlImage1={"./images/categories/Menwear/Menwear_Banner_1.webp"} urlImage2={"./images/categories/Menwear/Menwear_Banner_2.webp"} title="At our Dutch design studio, we focus on the things even the eye can’t see, to build better. We create apparel but approach it as product design. It makes all the difference." shop="Shop Menwear" position="4 / span 6"/>
            <ListPopularProduct title="Wardrobe Essentials" />
            <Blogs />
        </div>
    );
}

export default HomePage;