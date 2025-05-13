import ImageOne from "../../assets/features/feature-1.png";
import SharedDataOne from "../Shared/SharedDataOne";

export default function SubServiceOne() {
  return (
    <>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <SharedDataOne />

        <img src={ImageOne} alt="Your illustration" />
      </div>
    </>
  );
}
