import { Input as AntDInput, Button as AntDButton } from "antd";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    width: 30%;
    margin: 0 auto;
`

const Input = styled(AntDInput)`
`

const Button = styled(AntDButton)`
`

export default { Input, Button, Container }