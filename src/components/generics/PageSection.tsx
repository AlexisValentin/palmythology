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
    <Link to={url}>
      <section
        className={`flex ${
          gradient
            ? `bg-gradient-to-r from-${gradient?.startingColor} to-${gradient?.endingColor}`
            : `bg-black text-white`
        }`}
      >
        <img
          className="w-24 m-12"
          src={iconUrl}
          alt={`${name} - ${description}`}
        />
        <div
          className={`flex items-center grow ${
            gradient && `text-white`
          } mt-12 mb-12 mr-12`}
        >
          <div className="flex flex-col mt-2 mb-2">
            <h2 className="font-semibold text-xl">{name}</h2>
            <div className="font-medium mt-6 hidden lg:block">
              {description}
            </div>
          </div>
        </div>
      </section>
    </Link>
  </>
);

export default PageSection;
