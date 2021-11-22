import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Swagger() {
    return (
        <>
            <SwaggerUI url="http://neuralyrics.us-east-1.elasticbeanstalk.com/swagger/" />
        </>
    )
}

export default Swagger