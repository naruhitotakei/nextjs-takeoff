import FaqItem from './faqItem'

const Faq = () => {
  return (
    <section className='mt-16 md:mt-40' id='faq'>
      <div className='max-w-lg mx-auto space-y-5'>
        <h2 className='text-center'>Frequently Asked Questions</h2>
        <p className='text-center'>
          A collection of answers to the most common questions asked about our
          service.
        </p>
      </div>
        <div className="mt-5 md:mt-16 divide-y divide-gray-700">
          <FaqItem
            index='chk1'
            ques='What is takwoff?'
            ans='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.'
          />
          <FaqItem
            index='chk2'
            ques='What is takwoff?'
            ans='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.'
          />
          <FaqItem
            index='chk3'
            ques='What is takwoff?'
            ans='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.'
          />
        </div>
    </section>
  )
}

export default Faq
