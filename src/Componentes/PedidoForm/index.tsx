import Button from "../Button";
import Button2 from "../Button2";
import { Form, Container, Div } from "./style";


export default function PedidoForm() {
    return (
        <>
            <Container>
                <Form>

                    <label>Nome</label>
                    <input type="name" disabled />

                    <label>Serviço solicitado</label>
                    <input type="service" disabled />

                    <label>Data da contratação</label>
                    <input type="date" disabled />

                    <label>Horario sugerido</label>
                    <input type="hour" disabled />

                    <label>Status</label>
                    <input type="status" disabled />

                    <table>
                        <tr>
                            <td>
                                <Button text="voltar" />
                            </td>
                            <td>
                                <Div>
                                    <Button2 text="atender solicitação" />
                                </Div>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Container>
        </>
    );
}