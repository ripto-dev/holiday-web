import {Col, Row, Container, Button} from "react-bootstrap";
import '../../styles/landing/main.css';

const Intro = () => {
    return (
        <div className={"mainIntro"}>
            <Container className={"text-white text-center d-flex justify-content-center align-items-center"}>
                <Row>
                    <Col>
                        <div className={"titleIntro text-center"}>Enjoy Your Holiday</div>
                        {/*<div className={"titleIntro text-center"}></div>*/}
                        <div className={"buttonIntro mt-5 text-center"}>
                            <Button variant={"dark"}>
                                View All Destinations
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;