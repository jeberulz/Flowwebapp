import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How fast are transfers?",
    answer: "Most transfers land instantly between Flow users; bank transfers typically post within minutes."
  },
  {
    question: "Is my money insured?",
    answer: "Deposits are held at partner banks with standard insurance coverage where applicable."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No monthly fees on Lite. We keep fees transparent—no FX markups, no overdraft surprises."
  }
];

export function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl tracking-tight font-semibold font-['Space_Grotesk']">
          Frequently asked questions
        </h3>
        <p className="mt-3 text-white/65 font-['Poppins']">Everything you need to know.</p>
      </div>
      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => (
          <details key={index} className="border-gradient before:rounded-2xl group rounded-2xl p-4 backdrop-blur-[10px]">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90 font-['Poppins']">
              {faq.question}
              <span className="border-gradient before:rounded-md ml-4 grid h-6 w-6 place-items-center rounded-md backdrop-blur-[10px]">
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </span>
            </summary>
            <div className="p-4 pt-0 text-sm text-white/75 font-['Poppins']">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
