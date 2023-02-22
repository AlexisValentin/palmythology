import { Link } from "react-router-dom";
import { FoldersType } from "../../types/consts/folders";
import { RouteType } from "../../types/consts/routes";

type PageSectionProps = RouteType | FoldersType;

const PageSection: React.FC<PageSectionProps> = ({
  name,
  url,
  description,
  gradient,
  iconUrl,
}): JSX.Element => (
  <>
    <Link to={url} className="flex flex-row m-10 sm:block sm:w-full sm:m-0">
      <section
        className={`flex flex-col items-center sm:flex-row ${
          gradient
            ? `bg-gradient-to-r from-${gradient?.startingColor} to-${gradient?.endingColor}`
            : `bg-black text-white`
        }`}
      >
        <img
          className="w-24 m-6 sm:m-12"
          src={iconUrl}
          alt={`${name} - ${description}`}
        />
        <div
          className={`flex items-center grow ${
            gradient && `text-white`
          } sm:my-12 sm:mr-12`}
        >
          <div className="flex flex-col mt-2 mb-2">
            <h2 className="font-semibold text-xl">{name}</h2>
            <div className="font-medium mt-6 hidden md:block">
              {description}
            </div>
          </div>
        </div>
      </section>
    </Link>
  </>
);

export default PageSection;
