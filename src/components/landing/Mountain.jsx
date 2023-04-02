import {Card, Container, Image, Row, Col} from 'react-bootstrap';
import mountain_1 from '../../assets/images/mountain/mountain_1.jpg';
import  '../../styles/landing/main.css';

const Beach = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className={"text-center"}>Mountains</h1>
                <br/>
                <Row>
                    <Col md={4} id={"mountain"} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Mountain</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Beach</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Beach</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Beach</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Beach</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={"mainWraper"}>
                        <Card className={"mainImage"}>
                            <Image src={mountain_1} className={"images"}/>
                            <div className={"bg-dark"}>
                                <div className={"p-2 m-1 text-white"}>
                                    <Card.Title className={"text-center"}>Bali Beach</Card.Title>
                                    <Card.Text className={'text-left'}>Lorem ipsum test test test tes</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Beach;