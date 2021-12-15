import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactComponent as ImgIcon } from "../../assets/icons/imgIcon.svg";
import SliderComponent from "../Slider/Slider";

const style = {
  position: "absolute" as "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.616)",
  border: "2px solid #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BasicModal = ({ item, data, itemIndex, imgNo }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ImgIcon onClick={handleOpen}>Open modal</ImgIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SliderComponent
            handleClose={handleClose}
            imgNo={imgNo}
            data={data}
            item={item}
          />
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
