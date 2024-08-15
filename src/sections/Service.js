import React from 'react'
import Accordion from '../component/Accordion'

function Service() {
    const services = [
        {
            title:"Recruitment Services",
            description:`Our Recruitment Services are designed to find and place the best talent for your organization. From sourcing and screening to placement, we handle every step of the recruitment process. Our specialized approach ensures that we match the right candidates with the right roles, aligning with your company's needs and culture. We also specialize inpsychometric testing & assessment centres for graduate trainees and management trainees, providing structured evaluations that ensure you select the best candidates for your development programs.`
        },
        {
            title:"Talent Management",
            description:"Our Talent Management services focus on developing and retaining your key employees. We offer performance management systems, succession planning, and targeted employee development programs. Our goal is to enhance employee performance and prepare your organization for future success by nurturing your top talent."
        },
        {
            title:"HR Strategy and Consulting",
            description:"We provide expert HR Strategy and Consulting services to help you align your HR practices with your business objectives. Our services include developing HR strategies, organizational design, and managing change effectively. We work closely with you to create solutions that drive organizational success and enhance overall performance."
        },
        {
            title:"Compliance and Risk Management",
            description:"Ensure your organization adheres to all relevant labor laws and regulations with our Compliance and Risk Management services. We conduct HR compliance audits, develop and update company policies, and identify potential risks to safeguard your organization. Our proactive approach helps you stay compliant and mitigate HR-related risks."
        },
        {
            title:"HR Outsourcing Services",
            description:"Our HR Outsourcing Services offer a flexible and cost-effective solution for managing your HR functions. Whether you need full HR department outsourcing or specific services like payroll processing, we provide tailored solutions to fit your needs. Let us handle your HR operations so you can focus on growing your business."
        }
    ]
  return (
            <span className="pt-120" id="services">
                <section class="faq__area pt-120">
                    <div class="container">
                        <div class="row mb-120 mt-none-30">
                            <div class="col-lg-10">
                                <div class="faq__wrapper faq__wrapper--2 mt-30">
                                    <h2 className="title">Services</h2>
                                    <ul class="accordion__box clearfix">
                                        {services.map((item, index) => (
                                            <Accordion key={index} title={item.title} content={item.description} />
                                        ))}
                                    </ul>
                            </div>
                            </div>
                        </div>     
                    </div>
                </section>
            </span>
  )
}

export default Service
