import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Swagger() {
    return (
        <>
            <SwaggerUI url="https://api.neuralyrics.com/swagger/" />
        </>
    )
}

export default Swagger