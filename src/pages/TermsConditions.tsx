
import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const TermsConditions = () => {
  const companyName = "Peoria Concrete Co";
  const emailAddress = "support@peoriaconcreteco.com";
  const phoneNumber = "309-245-7421";
  const address = "418 east avenue Peoria, IL 61603";
  const domain = "peoriaconcreteco.com";
  const lastUpdated = "July 28, 2023";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms and Conditions | {companyName} | Expert Concrete Services</title>
        <meta
          name="description"
          content={`${companyName} terms and conditions. Learn about our terms of service and usage policies.`}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-concrete-dark py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-hero-pattern opacity-70"
          style={{ 
            backgroundImage: `url('/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-white">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <Card className="mb-10 shadow-md animate-fade-in opacity-0 [animation-delay:300ms]">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-concrete-dark mb-6">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">{companyName}</p>
                    <p className="text-sm text-muted-foreground">{domain}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Email</p>
                    <p className="text-sm text-muted-foreground">{emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Phone</p>
                    <p className="text-sm text-muted-foreground">{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Address</p>
                    <p className="text-sm text-muted-foreground">{address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms Content */}
          <div className="space-y-8 animate-fade-in opacity-0 [animation-delay:400ms]">
            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to {companyName}. These Terms and Conditions govern your use of our website located at {domain} and form the entire agreement between you and us.
              </p>
              <p>
                By using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
              </p>
              <p>
                You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">3. Restrictions</h2>
              <p className="mb-4">You must not:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Republish material from this website;</li>
                <li>Sell, rent or sub-license material from the website;</li>
                <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose;</li>
                <li>Edit or otherwise modify any material on the website;</li>
                <li>Redistribute material from this website except for content specifically and expressly made available for redistribution.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">4. Acceptable Use</h2>
              <p className="mb-4">
                You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful.
              </p>
              <p>
                You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">5. Limited Warranties</h2>
              <p className="mb-4">
                We do not warrant the completeness or accuracy of the information published on this website; nor do we commit to ensuring that the website remains available or that the material on the website is kept up-to-date.
              </p>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">6. Limitations and Exclusions of Liability</h2>
              <p className="mb-4">
                Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from negligence; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in any way that is not permitted under applicable law; or (d) exclude any of our or your liabilities that may not be excluded under applicable law.
              </p>
              <p>
                The limitations and exclusions of liability set out in this Section and elsewhere in these terms and conditions: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the terms and conditions or in relation to the subject matter of the terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">7. Indemnity</h2>
              <p>
                You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses (including, without limitation, legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">8. Breaches of these Terms and Conditions</h2>
              <p className="mb-4">
                Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, we may take such action as we deem appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">9. Variation</h2>
              <p>
                We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of our website from the date of the publication of the revised terms and conditions on our website. Please check this page regularly to ensure you are familiar with the current version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">10. Assignment</h2>
              <p className="mb-4">
                We may transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.
              </p>
              <p>
                You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">11. Severability</h2>
              <p>
                If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">12. Entire Agreement</h2>
              <p>
                These terms and conditions constitute the entire agreement between you and us in relation to your use of our website, and supersede all previous agreements in respect of your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">By email:</span> {emailAddress}
                </p>
                <p>
                  <span className="font-medium">By phone:</span> {phoneNumber}
                </p>
                <p>
                  <span className="font-medium">By mail:</span> {address}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
