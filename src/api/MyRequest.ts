import React from "react";

async function MyRequest(endPoint : string) {
    const response = await fetch(endPoint);

    if(!response.ok) {
        console.log(`Can not access to: ${endPoint}`)
    }

    return response.json();
}

export default MyRequest;