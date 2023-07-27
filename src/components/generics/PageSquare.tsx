import { Link } from 'react-router-dom'
import {
  getPantheonMainColor,
  getPantheonTextColor,
} from '../../helpers/colors'
import { setCardRouteParameters } from '../../helpers/routes'
import { Quoi2NeufItemType } from '../../types/storyblok/storyblok'

const PageSquare: React.FC<Quoi2NeufItemType> = ({
  title,
  subtitle,
  pantheon,
  icon,
  available = true,
}): JSX.Element => {
  if (available === undefined) return <></>

  return available ? (
    <Link
      to={setCardRouteParameters(title, pantheon)}
      className={`border-4 border-${getPantheonMainColor(
        pantheon,
      )} rounded-3xl p-6 m-6 bg-${getPantheonMainColor(
        pantheon,
      )} text-${getPantheonTextColor(pantheon)} 
      lg:bg-transparent
      lg:text-black
      lg:hover:bg-${getPantheonMainColor(
        pantheon,
      )} lg:hover:text-${getPantheonTextColor(pantheon)}`}
    >
      <div className="flex items-center justify-center flex-col">
        <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-center flex-col p-6 mx-6">
      <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
    </div>
  )
}

const PageSquareBlock: React.FC<
  Omit<Quoi2NeufItemType, 'available' | 'pantheon' | 'isFolder'>
> = ({ title, subtitle, icon }): JSX.Element => (
  <div className="flex item-center justify-center flex-col w-52">
    <div className="flex items-center justify-center flex-col mt-4">
      <img className="w-24 pb-4" src={icon.filename} alt={icon.alt} />
      <h2 className="font-bold truncate">{title}</h2>
      <h3 className="italic truncate">{subtitle}</h3>
    </div>
  </div>
)

export default PageSquare
