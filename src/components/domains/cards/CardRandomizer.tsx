import { URLS } from '../../../types/constants/url'
import { getCardPantheonTitleFromUrl } from '../../../helpers/routes/routes'
import { getCardStory } from '../../../helpers/storyblok'
import { shuffleNumber } from '../../../helpers/number'
import Image from 'next/image'
import Link from 'next/link'

const CardRandomizer: React.FC = async () => {
  const maxRandomNumber = URLS.CARDS.length
  const shuffledNumber = shuffleNumber(maxRandomNumber)
  const getRandomCardUrl = () => URLS.CARDS[shuffledNumber]
  const { title, pantheon } = getCardPantheonTitleFromUrl(getRandomCardUrl())
  const story = await getCardStory(title, pantheon)

  if (!story?.data?.story?.content) return <></>

  const { name, subtitle, summary, images } = story.data.story.content

  if (!summary) return <></>

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Suggestion aléatoire
      </h3>
      <Link
        href={getRandomCardUrl()}
        className="group flex justify-center flex-col lg:flex-row items-center mt-4 lg:border lg:border-black rounded-lg overflow-hidden hover:bg-black"
      >
        <Image
          className="basis-1/3"
          src={images[0].filename}
          alt={`Couverture de la fiche ${name} du panthéon ${pantheon}`}
          width={350}
          height={350}
        />
        <div className="m-4 max-h-80 basis-2/3">
          <div className="hidden lg:block mb-4">
            <h4 className="text-xl font-bold group-hover:text-white">{name}</h4>
            <h5 className="font semibold group-hover:text-white">{subtitle}</h5>
          </div>
          <div className="flex text-center lg:text-left mt-4 md:mt-0">
            <div className="italic max-w-80 md:max-w-fit group-hover:text-white text-ellipsis overflow-hidden">
              <p className="text-ellipsis overflow-hidden">{summary}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardRandomizer
