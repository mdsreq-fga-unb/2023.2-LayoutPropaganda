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
    width: "500px",
    height: "500px",
    padding: "150px",
    backgroundColor: "#FFFFFF",
    borderRadius: "24px"
}

const HEADER_STYLE: CSSProperties = {
    position:"fixed",
    top: 10,
    left: 250,
    transform: "translate(-50%, -50%)",
    color: "#000000",
    backgroundColor: "#B62828",
    width: "500px",
    height: "50px",
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
    marginRight: "6px"
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
                </div>
            </div>
        )
    }

    return null;
}
