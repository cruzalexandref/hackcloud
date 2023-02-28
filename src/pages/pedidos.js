import Menu from './menu.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cpedido.css';
import '../css/index.css';
import React,{Component} from 'react';

export default class Restaurant extends Component {
    
    constructor(props){
        super(props);
            this.state ={
                pedido: [{nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 1',tempoMedioPreparo:'33min',preco:'R$: 35,00',img:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/FEMEU9_YSlHibKL1QBeMF8QAp9wW2wNkW02-W6-oheGy1Jmf5hvWPE1Xkpw9oSWq/n/ax1abkrwz9mp/b/bucket-hackacloudplusofttime03/o/bifeaceboladoBifeAcebolado.jpeg'},
                {nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 2',tempoMedioPreparo:'33min',preco:'R$: 40,00',img:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/FEMEU9_YSlHibKL1QBeMF8QAp9wW2wNkW02-W6-oheGy1Jmf5hvWPE1Xkpw9oSWq/n/ax1abkrwz9mp/b/bucket-hackacloudplusofttime03/o/bifeaceboladoBifeAcebolado.jpeg'},
                {nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 3',tempoMedioPreparo:'33min',preco:'R$: 80,00',img:'https://objectstorage.us-phoenix-1.oraclecloud.com/p/FEMEU9_YSlHibKL1QBeMF8QAp9wW2wNkW02-W6-oheGy1Jmf5hvWPE1Xkpw9oSWq/n/ax1abkrwz9mp/b/bucket-hackacloudplusofttime03/o/bifeaceboladoBifeAcebolado.jpeg'}]
            }
        }

        submitPedido(e){
            e.preventDefault();
                alert(JSON.stringify(this.state.pedido[e.target.value]));
        }

    render(){
  return (
<div className="center">
        <Menu/>
        <Container>
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    {this.state.pedido.map((pedido,index) =>{
                        if(index <= 0){
                            return (
                            
                                <Col md={{ span: 3, offset: 0 }}>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={pedido.img} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.nomePedido}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.descricaoPedido}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.nomeRestaurante}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.tempoMedioPreparo}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.preco}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                            )
                        } else {
                            return(
                            <Col md={{ span: 3, offset: 1 }}>
                   <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top"  className="card-image" src={pedido.img} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.nomePedido}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.descricaoPedido}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.nomeRestaurante}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.tempoMedioPreparo}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.preco}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>)
                        }
                    })}
                </Col>
            </Row>
        </Container>
</div>
  );
}
}
