import React from 'react'

function Service() {
  return (
    <section class="services__area pt-120">
                <div class="container">
                    <ul class="tb__nav nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Assessment</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Executive Recruitment</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">HR Consulting</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-outsource-tab" data-bs-toggle="pill" data-bs-target="#pills-outsource" type="button" role="tab" aria-controls="pills-outsource" aria-selected="false">HR Outsourcing</button>
                        </li>
                      </ul>
                      <div class="services__content--wrap tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="services__content">
                                <h2 class="serv__title">Assessment as a service</h2>
                                <div class="mt-25 mb-60">
                                    <p>Our comprehensive assessment services help organizations identify the right talent for various roles.</p><p>Using psychometric tools and competency-based evaluations, we provide insights into candidates' skills, potential, and cultural fit.<br/>Whether you're looking to hire new talent or develop existing employees, our assessments offer valuable data to inform your decisions.<br/>We also specialize in assessment centres for graduate trainees and management trainees, providing structured evaluations that ensure you select the best candidates for your development programs.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="services__content">
                                <h2 class="serv__title">Executive Recruitment</h2>
                                <p> Our executive recruitment services are designed to connect your organization with top-tier leadership talent. With a vast network of professionals, we specialize in identifying and attracting executives who align with your company's values and strategic goals. We ensure a thorough vetting process to deliver candidates who can drive your business forward.</p>
                                
                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="services__content">
                                <h2 class="serv__title">HR Consulting</h2>
                                <p> Our HR consulting services offer tailored solutions to address your organization's unique challenges. From strategic planning and organizational development to employee engagement and performance management, our experts provide actionable insights and strategies.</p>
                                <p>We also conduct thorough HR audits to ensure compliance and efficiency. We work closely with you to implement best practices that enhance your HR functions and contribute to overall business success.</p>
                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-outsource" role="tabpanel" aria-labelledby="pills-outsource-tab">
                            <div class="services__content">
                                <h2 class="serv__title">HR Outsourcing</h2>
                                <p> Our HR outsourcing services allow your organization to focus on core business activities while we manage your HR functions.</p>
                                <p>We also specialize in recruitment outsourcing, ensuring you attract and retain the best talent without the administrative burden.<br /> With our expertise, you can ensure efficient and effective HR operations, reducing administrative burdens and operational costs.</p>
                                
                            </div>
                        </div>
                      </div>                      
                </div>
            </section>
  )
}

export default Service
