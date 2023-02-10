import { Link } from "react-router-dom";
import { setCardRouteParameters } from "../../helpers/routes";
import { Quoi2NeufItemType } from "../../types/consts/quoi2Neuf";

const PageSquare: React.FC<Quoi2NeufItemType> = ({
  title,
  subtitle,
  available,
  icon,
  pantheon,
}): JSX.Element => {
  if (available === undefined) return <></>;

  return available ? (
    <Link
      to={setCardRouteParameters(title, pantheon)}
      className="border border-transparent rounded-3xl shadow-inner hover:bg-red-300 p-6 mx-6"
    >
      <div className="flex items-center justify-center flex-col">
        <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-center flex-col p-6 mx-6">
      <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
    </div>
  );
};

const PageSquareBlock: React.FC<
  Omit<Quoi2NeufItemType, "available" | "pantheon">
> = ({ title, subtitle, icon }): JSX.Element => {
  const { filename, alt } = icon;

  return (
    <>
      <img className="w-24" src={filename} alt={alt} />
      <div className="flex items-center justify-center flex-col mt-4">
        <h2 className="font-bold">{title}</h2>
        <h3 className="italic">{subtitle}</h3>
      </div>
    </>
  );
};

export default PageSquare;
