export interface FaqProps {
  faqTitle: string
  faqItems: FaqItemProps[]
}

export interface FaqItemProps {
  title: string
  description: string
}

const Faq: React.FC<FaqProps> = ({ faqTitle, faqItems }) => (
  <>
    <h3 className="text-2xl font-bold mb-4">{faqTitle}</h3>
    {faqItems.map((faqItems) => {
      return (
        <FaqItem
          title={faqItems.title}
          description={faqItems.description}
          key={faqItems.title}
        />
      )
    })}
  </>
)

const FaqItem: React.FC<FaqItemProps> = ({ title, description }) => (
  <details className="mb-4" open>
    <summary className="text-xl font-semibold mb-2 hover:bg-slate-100 cursor-pointer pl-2">
      {title}
    </summary>
    {description}
  </details>
)

export default Faq
