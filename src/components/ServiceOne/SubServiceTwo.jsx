import SharedDataTwo from "../Shared/SharedDataTwo";
import ImageTwo from "../../assets/features/feature-2.png";
export default function SubServiceTwo() {
  return (
    <>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img src={ImageTwo} alt="Your illustration" />

        <SharedDataTwo />
      </div>
    </>
  );
}
