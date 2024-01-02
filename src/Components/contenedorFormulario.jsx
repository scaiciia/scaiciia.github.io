import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/contenedorFormulario.css'

function ContenedorFormulario() {

    return (
        <div className='ContenedorFormulario'>
            <Form action='https://formsubmit.co/scaiciia@gmail.com' method='POST'>
                <Row>
                    <Form.Group as={window.visualViewport.width < 1024 ? 'div' : Col} className='FormItem'>
                        <Form.Label>NOMBRE:</Form.Label>
                        <Form.Control type='text' name='Nombre' />
                    </Form.Group>
                    <Form.Group as={window.visualViewport.width < 1024 ? 'div' : Col} className='FormItem'>
                        <Form.Label>APELLIDO:</Form.Label>
                        <Form.Control type='text' name='Apellido' />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={window.visualViewport.width < 1024 ? 'div' : Col} className='FormItem'>
                        <Form.Label>E-MAIL:</Form.Label>
                        <Form.Control type='email' name='Email' />
                    </Form.Group>
                    <Form.Group as={window.visualViewport.width < 1024 ? 'div' : Col} className='FormItem'>
                        <Form.Label>TELEFONO:</Form.Label>
                        <Form.Control type='text' name='Tel' />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className='FormItem'>
                        <Form.Label>MENSAJE:</Form.Label>
                        <Form.Control className='textarea' as='textarea' rows={8} name='Msg' />
                    </Form.Group>
                </Row>
                <Button className='FormItem' type='submit'>Enviar</Button>
            </Form>
        </div>
    );
}

export default ContenedorFormulario;