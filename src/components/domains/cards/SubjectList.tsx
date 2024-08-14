/* Components */
import PageSquare, { CONTENT_TYPE } from '../../generics/PageSquare'

/* Consts */
import { ALL_SUBJECT } from '../../../types/cards/subjects'

const SubjectList: React.FC = () => (
  <div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
    {ALL_SUBJECT.map((subject, idx) => (
      <PageSquare
        title={subject.label}
        subject={subject.value}
        key={`subject-${subject.value}`}
        icon={{
          alt: `Icône du sujet ${subject.label}`,
          filename: subject.icon,
        }}
        contentType={CONTENT_TYPE.SUBJECT}
      />
    ))}
  </div>
)

export default SubjectList
