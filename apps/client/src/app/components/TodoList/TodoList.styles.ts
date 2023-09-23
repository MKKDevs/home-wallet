import { List as AntDList, Button, Modal as AntdModal, Input as AntDInput} from "antd";
import styled from "styled-components";

const List = styled(AntDList)`
    width: 60%;
    margin: 5rem auto;

    .ant-list-item {
     display: flex;
     justify-content: space-between;
     align-items: center;
    }
`


const DeleteButton = styled(Button).attrs({danger: true})`
`

const EditButton = styled(Button).attrs({type: "primary"})``

const ButtonContainer = styled.div`
display: flex;
gap: 1rem;
`

const Modal = styled(AntdModal)``

const Input = styled(AntDInput)``

export default { List, DeleteButton, EditButton, ButtonContainer, Modal, Input }