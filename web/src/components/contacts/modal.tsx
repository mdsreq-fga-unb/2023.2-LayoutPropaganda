import React, {CSSProperties} from "react";

const BACKGROUND_STYLE: CSSProperties = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000
}

const MODAL_STYLE: CSSProperties = {
    position:"fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    height: "500px",
    padding: "150px",
    backgroundColor: "#FFFFFF",
    borderRadius: "24px"
}

const HEADER_STYLE: CSSProperties = {
    position:"fixed",
    top: 25,
    left: 225,
    transform: "translate(-50%, -50%)",
    color: "#000000",
    backgroundColor: "#B62828",
    width: "450px",
    height: "50px",
    padding: "13px",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "500",
    fontSize: "24px"
}

const CLOSE_BUTTON_STYLE: CSSProperties = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#000000",
    backgroundColor: "#B62828",
    width: "50px",
    fontWeight: "500",
    fontSize: "24px",
}

const MODAL_BODY_STYLE: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position:"fixed",
    top: "53%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "400px",
}

const TEXTBOX_STYLE: CSSProperties = {
    width: "100%",
    height: "30px",
    outline: "none",
    border: "solid 1px #DE8983",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#000000"
}

const MESSAGE_STYLE: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "120px",
    justifyItems: "start",
    outline: "none",
    border: "solid 1px #DE8983",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#000000"
}

const SUBMIT_BUTTON_STYLE: CSSProperties = {
    width: "60%",
    height: "40px",
    outline: "none",
    border: "solid 1px #DE8983",
    borderRadius: "30px",
    backgroundColor: "#FFFFFF",
    color: "#FF0000",
    fontSize: "20px"
}

export default function Modal({ isOpen, setModalOpen }: { isOpen: boolean, setModalOpen: (value: boolean) => void }) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>Modal
                    <div style={HEADER_STYLE}>
                        <p>Suas informações</p>
                        <button onClick={() => setModalOpen(false)} style={CLOSE_BUTTON_STYLE}>X</button>
                    </div>
                    <div style={MODAL_BODY_STYLE}>
                        <input type="text" placeholder="Nome" style={TEXTBOX_STYLE}></input>
                        <input type="text" placeholder="Email" style={TEXTBOX_STYLE}></input>
                        <input type="text" placeholder="Telefone" style={TEXTBOX_STYLE}></input>
                        <input type="text" placeholder="Mensagem" style={MESSAGE_STYLE}></input>
                        <button style={SUBMIT_BUTTON_STYLE}>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}
