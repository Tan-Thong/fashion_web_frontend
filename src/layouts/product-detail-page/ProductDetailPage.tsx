import React from "react";
import "../../css/item-detail.css"

function ProductDetailPage() {
    return(
        <div className="content">
            <div className="detail">
                <div className="imgs">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="desc">
                    <form role="form" encType="multipart/form-data">
                        <h3 className="name-product"></h3>
                        <p className="price" style={{marginTop: "12px"}}>123</p>
                        <div className="s-detail" style={{display: "flex", marginTop: "26px"}}>
                            <p><b>Color</b></p>
                            <p style={{marginLeft: "8px"}}>Alabaster Pink</p>
                        </div>
                        <div className="border" style={{marginTop: "20px"}}>
                            <div className="circle"></div>
                        </div>
                        <div className="s-detail" style={{marginTop: "26px"}}>
                            <p><b>Material</b></p>
                            <p style={{marginTop: "16px"}}>100% silk</p>
                        </div>

                        <div className="s-detail" style={{marginTop: "26px"}}>
                            <p><b>Details</b></p>
                            <p style={{marginTop: "16px"}}>This silk twill mini-dress has a shirt-dress silhouette brightened by a paisley print. Embellished with a refined bow collar, the style with simple yet sophisticated details is decorated with the iconic geometric shape of the fabric triangle logo. </p>
                        </div>
                        <a className="btn-submit">ADD TO SHOPPING BAG</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;