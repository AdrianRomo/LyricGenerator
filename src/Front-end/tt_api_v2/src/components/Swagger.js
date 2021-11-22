import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Swagger() {
    return (
        <>
            <SwaggerUI url="http://172.17.0.2:5000/swagger/" />
        </>
    )
}

export default Swagger