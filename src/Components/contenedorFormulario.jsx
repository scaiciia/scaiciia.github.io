import { FormGroup, FormLabel, Button, TextField } from '@mui/material';
import '../styles/contenedorFormulario.css'

function ContenedorFormulario() {


    return (
        <div className='ContenedorFormulario'>
            <form action='https://formsubmit.co/scaiciia@gmail.com' method='POST'>
                <FormGroup row={window.visualViewport.width < 1024 ? false : true}>
                    <FormGroup sx={{ margin: { md: '20px' }, width: '250px' }} className='FormItem'>
                        <FormLabel sx={{ paddingLeft: 2 }}>NOMBRE:</FormLabel>
                        <TextField required sx={{ bgcolor: 'white', border: '1px solid #7286D3', borderRadius: '50px' }} name='Nombre' InputProps={{ sx: { borderRadius: '50px' } }} fullWidth />
                    </FormGroup>
                    <FormGroup sx={{ margin: { md: '20px' }, width: '250px' }} className='FormItem'>
                        <FormLabel sx={{ paddingLeft: 2 }}>APELLIDO:</FormLabel>
                        <TextField required sx={{ bgcolor: 'white', border: '1px solid #7286D3', borderRadius: '50px' }} name='Apellido' InputProps={{ sx: { borderRadius: '50px' } }} fullWidth />
                    </FormGroup>
                </FormGroup>
                <FormGroup row={window.visualViewport.width < 1024 ? false : true}>
                    <FormGroup sx={{ margin: { md: '20px' }, width: '250px' }} className='FormItem'>
                        <FormLabel sx={{ paddingLeft: 2 }}>E-MAIL:</FormLabel>
                        <TextField required type='email' sx={{ bgcolor: 'white', border: '1px solid #7286D3', borderRadius: '50px' }} name='Email' InputProps={{ sx: { borderRadius: '50px' } }} fullWidth />
                    </FormGroup>
                    <FormGroup sx={{ margin: { md: '20px' }, width: '250px' }} className='FormItem'>
                        <FormLabel sx={{ paddingLeft: 2 }}>TELEFONO:</FormLabel>
                        <TextField required sx={{ bgcolor: 'white', border: '1px solid #7286D3', borderRadius: '50px' }} name='Tel' InputProps={{ sx: { borderRadius: '50px' } }} fullWidth />
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <FormGroup sx={{ width: { xs: 250, md: 400 } }} className='TextArea'>
                        <FormLabel sx={{ paddingLeft: 2 }}>MENSAJE:</FormLabel>
                        <TextField required className='textarea' multiline rows={6} sx={{ bgcolor: 'white', border: '1px solid #7286D3', borderRadius: '30px' }} name='Msg' InputProps={{ sx: { borderRadius: '30px' } }} fullWidth />
                    </FormGroup>
                </FormGroup>
                <Button variant="contained" className='FormItem' type='submit' sx={{ marginTop: 1, marginBottom: 1 }}>Enviar</Button>
            </form>
        </div>
    );
}

export default ContenedorFormulario;