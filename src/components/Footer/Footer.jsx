import SubfooterOne from "./SubFooterOne";
import SubFooterTwo from "./SubFooterTwo";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <SubfooterOne />
        <SubFooterTwo />
       
</div>
      </footer>
    </div>
  );
}
