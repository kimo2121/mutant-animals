import { useState } from "react";
import { AnimalsData } from "./data";
import "./styles.scss";
import { ReactComponent as ImgIcon } from "../../assets/icons/imgIcon.svg";
import BasicModal from "../Modal/Modal";
import { LocalGasStation } from "@material-ui/icons";

const AnimalsFilter = () => {
  const [filter, setFilter] = useState("all");
  const [state, setstate] = useState<null | number>(null);
  const [imgNo, setImgNo] = useState();

  const clickImg = (index: any) => {
    setImgNo(index);
  };
  console.log("what is this ", imgNo);
  return (
    <div className="profile-detail">
      <div className="header-nav">
        <span
          className={filter === "all" ? "active" : undefined}
          onClick={() => setFilter("all")}
        >
          ALL
        </span>
        <span
          className={filter === "kings" ? "active" : undefined}
          onClick={() => setFilter("kings")}
        >
          KING'S
        </span>
        <span
          className={filter === "leaders" ? "active" : undefined}
          onClick={() => setFilter("leaders")}
        >
          LEADER'S
        </span>
        <span
          className={filter === "golds" ? "active" : undefined}
          onClick={() => setFilter("golds")}
        >
          GOLDEN MUTANTS
        </span>
        <span
          className={filter === "mutants" ? "active" : undefined}
          onClick={() => setFilter("mutants")}
        >
          GENERAL MUTANTS
        </span>
      </div>
      <div className="profile-nav-items">
        {filter === "all"
          ? AnimalsData.all
              .sort(() => 10 - 0.5)
              .map((item, index) => (
                <div
                  onClick={() => clickImg(index)}
                  onMouseEnter={() => setstate(index)}
                  onMouseLeave={() => setstate(null)}
                  className="each-mut"
                >
                  <img key={index} src={item} alt="" />
                  <div
                    className={
                      state === index ? "hover-div active" : "hover-div"
                    }
                  >
                    <span>King mutant.</span>
                    <span>Rarity: Ultimate.</span>
                    <ImgIcon />
                    <BasicModal
                      imgNo={imgNo}
                      itemIndex={index}
                      data={AnimalsData.all}
                    />
                  </div>
                </div>
              ))
          : filter === "kings"
          ? AnimalsData.kings.map((item, index) => (
              <div
                onClick={() => clickImg(index)}
                onMouseEnter={() => setstate(index)}
                onMouseLeave={() => setstate(null)}
                className="each-mut"
              >
                <img key={index} src={item} alt="" />
                <div
                  className={state === index ? "hover-div active" : "hover-div"}
                >
                  <span>King mutant.</span>
                  <span>Rarity: Ultimate.</span>
                  <ImgIcon />
                  <BasicModal
                    imgNo={imgNo}
                    itemIndex={index}
                    data={AnimalsData.all}
                  />
                </div>
              </div>
            ))
          : filter === "leaders"
          ? AnimalsData.leaders.map((item, index) => (
              <div
                onClick={() => clickImg(index)}
                onMouseEnter={() => setstate(index)}
                onMouseLeave={() => setstate(null)}
                className="each-mut"
              >
                <img key={index} src={item} alt="" />
                <div
                  className={state === index ? "hover-div active" : "hover-div"}
                >
                  <span>King mutant.</span>
                  <span>Rarity: Ultimate.</span>
                  <ImgIcon />
                  <BasicModal
                    imgNo={imgNo}
                    itemIndex={index}
                    data={AnimalsData.leaders}
                  />
                </div>
              </div>
            ))
          : filter === "golds"
          ? AnimalsData.golds.map((item, index) => (
              <div
                onClick={() => clickImg(index)}
                onMouseEnter={() => setstate(index)}
                onMouseLeave={() => setstate(null)}
                className="each-mut"
              >
                <img key={index} src={item} alt="" />
                <div
                  className={state === index ? "hover-div active" : "hover-div"}
                >
                  <span>King mutant.</span>
                  <span>Rarity: Ultimate.</span>
                  <ImgIcon />
                  <BasicModal
                    imgNo={imgNo}
                    itemIndex={index}
                    data={AnimalsData.golds}
                  />
                </div>
              </div>
            ))
          : filter === "mutants"
          ? AnimalsData.mutants.map((item, index) => (
              <div
                onClick={() => clickImg(index)}
                onMouseEnter={() => setstate(index)}
                onMouseLeave={() => setstate(null)}
                className="each-mut"
              >
                <img key={index} src={item} alt="" />
                <div
                  className={state === index ? "hover-div active" : "hover-div"}
                >
                  <span>King mutant.</span>
                  <span>Rarity: Ultimate.</span>
                  <ImgIcon />
                  <BasicModal
                    imgNo={imgNo}
                    itemIndex={index}
                    data={AnimalsData.mutants}
                  />
                </div>
              </div>
            ))
          : undefined}
      </div>
    </div>
  );
};
export default AnimalsFilter;
